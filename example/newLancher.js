const JSONPath = "../launcherconfig/";
const invalidToken = "Invalid token. Kindly check with administrator!";
/**
 * To genrarate the Query params
 * @param {paramsKey:string} param 
 * @returns Value of respective params
 */
const getQueryParam = (param) => {
	const queryString = window.location.search;
	const regex = new RegExp(`[?&]${param}=([^&]*)`);
	const match = queryString.match(regex);
	return match ? decodeURIComponent(match[1]) : null;
};

const isShowLogo = getQueryParam('loader') === "true";
const launcherToken = getQueryParam('token');

let gameUrl = "";
let isLogoAnimationDone = false;
let isConfigLoaded = false;
let isGameDomStable = false; //track game load state
let hardFallbackTimeoutId = null;

/**
 * To launch the game once launcher process done 
 */
let hasIframeShown = false;

const showIframe = () => {
	if (hasIframeShown) return;//prevent multiple calls.
	if (isLogoAnimationDone && isConfigLoaded && isGameDomStable && gameUrl) {
		hasIframeShown = true;
		if (hardFallbackTimeoutId) {
			clearTimeout(hardFallbackTimeoutId);
			hardFallbackTimeoutId = null;
		}
		const logoContainer = document.getElementById("logoAnimationId");
		const iframe = document.getElementById("gameFrame");

		// Fade out the loader
		logoContainer.classList.add("fade-out");

		// Wait for fade-out animation to complete, then show iframe
		setTimeout(() => {
			logoContainer.style.display = "none";
			iframe.classList.add("visible");
		}, 500); // match transition duration
	}
};

const loadGamePage = () => {

	if (gameUrl) {
		let meta = document.createElement('meta');
		meta.httpEquiv = "Refresh";
		meta.content = `1; url=${gameUrl}`;
		document.getElementsByTagName('head')[0].appendChild(meta);
	}
};

/**
 * This method will generate the logo animation
 */
const animateLogo = () => {
	let pos = 0.0;

	const loaderFill = document.getElementById("loaderFill");
	document.getElementById("loaderBase").style.visibility = "visible";
	document.getElementById("originalImg").style.visibility = "visible";;


	const interval = setInterval(() => {
		// If game is fully loaded and logo finished, stop
		if (isGameDomStable && pos >= 100) {
			clearInterval(interval);
			isLogoAnimationDone = true;
			showIframe();
		} else if (pos < 99) {
			pos += isGameDomStable ? 0.8 : 0.2; // normal progress
			loaderFill.style.width = `${pos}%`;
		} else if (pos < 100 && isGameDomStable) {
			pos += 0.1; // final stretch only when game is ready
			loaderFill.style.width = `${pos}%`;
		}
	}, 30);
};

const setupGameReadinessCheck = (iframe) => {
	const GAME_LOADING_GRACE_PERIOD_MS = 3000;
	const FINAL_FALLBACK_TIMEOUT_MS = 300000;

	let lastChangeTime = Date.now();
	let gameReadyTimeoutId = null;
	let checkDomIntervalId = null;
	let visualPollId = null;

	const iframeWindow = iframe.contentWindow;
	let iframeDocument;

	try {
		iframeDocument = iframe.contentDocument || iframeWindow.document;
	} catch (err) {
		// Access denied to iframe (CORS). Waiting fallback...
		setTimeout(() => {
			isGameDomStable = true;
			showIframe();
		}, GAME_LOADING_GRACE_PERIOD_MS + 2000);
		return;
	}

	if (!iframeDocument || !iframeDocument.body) {
		// Iframe not yet ready. Waiting...
		const waitForBody = setInterval(() => {
			try {
				iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
				if (iframeDocument?.body) {
					clearInterval(waitForBody);
					setupGameReadinessCheck(iframe); // Re-run with body available
				}
			} catch { }
		}, 200);
		return;
	}

	// 🧠 DOM mutation fallback
	const observer = new MutationObserver(() => {
		lastChangeTime = Date.now();
		if (gameReadyTimeoutId) {
			clearTimeout(gameReadyTimeoutId);
			gameReadyTimeoutId = null;
		}
	});

	observer.observe(iframeDocument, {
		childList: true,
		subtree: true,
		attributes: true,
		characterData: true,
	});

	checkDomIntervalId = setInterval(() => {
		const idleTime = Date.now() - lastChangeTime;
		if (idleTime > 1500) {
			clearInterval(checkDomIntervalId);
			observer.disconnect();
			gameReadyTimeoutId = setTimeout(() => {
				clearInterval(visualPollId);
				isGameDomStable = true;
				if (navigator.connection) {
					const connection = navigator.connection;
					console.log("Effective network type:", connection.effectiveType);
					console.log("Downlink (Mbps):", connection.downlink);
					console.log("RTT (ms):", connection.rtt);
					console.log("Save data mode on?", connection.saveData);

					const isSlowNetwork = ['slow-2g', '2g', '3g'].includes(connection.effectiveType);
					if (isSlowNetwork) {
						//Slow network detected
						isGameDomStable = false;
					}
				}
				// isGameDomStable = true;
				showIframe();
			}, GAME_LOADING_GRACE_PERIOD_MS);
		}
	}, 200);

	// ⛑️ Final timeout fallback
	hardFallbackTimeoutId = setTimeout(() => {
		console.warn("⚠️ Final timeout fallback.");
		clearInterval(checkDomIntervalId);
		clearInterval(visualPollId);
		observer.disconnect();
		isGameDomStable = true;
		isLogoAnimationDone = true;
		showIframe();
	}, FINAL_FALLBACK_TIMEOUT_MS);
};





const loadConfiguration = async () => {
	try {
		// Fetch the data from the server
		const response = await fetch(`${JSONPath}${launcherToken}.txt`);
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

		const hashedConfig = await response.text();

		const paramsKey = "params";
		const configKey = "config";

		if (window.sessionStorage) {
			window.sessionStorage.setItem(paramsKey, launcherToken);
			window.sessionStorage.setItem(configKey, hashedConfig);
		} else {
			document.cookie = `${paramsKey}=${encodeURIComponent(launcherToken)}; path=/`;
			document.cookie = `${configKey}=${encodeURIComponent(hashedConfig)}; path=/`;
		}

		console.log("launcherToken ", launcherToken);
		console.log("hashedConfig ", hashedConfig);

		// Decode the Base64 data
		const overallData = atob(hashedConfig);
		const overallDataJson = JSON.parse(overallData);
		let paramsData = atob(overallDataJson.params);
		let paramsParsedData = JSON.parse(paramsData);

		gameUrl = paramsParsedData['gamePath'];

		if (paramsParsedData['externalGame']) {
			const hasQuestionMark = gameUrl.includes('?');
			gameUrl += hasQuestionMark ? `&token=${launcherToken}` : `?token=${launcherToken}`;

			if (paramsParsedData['externalGameParams']) {
				const extraParams = paramsParsedData['externalGameParams'];
				for (const [key, value] of Object.entries(extraParams)) {
					gameUrl += `&${key}=${value}`;
				}
			}
		}

		isConfigLoaded = true;

		if (isShowLogo) {
			const iframe = document.getElementById("gameFrame");
			iframe.src = gameUrl;

			setupGameReadinessCheck(iframe);

		} else {
			loadGamePage();
		}


		// 
		// showIframe();
	} catch (error) {
		showErrorMessage(invalidToken);
		console.error("Error loading config:", error.message);
	}
};

const showErrorMessage = (msg) => {
	document.getElementById("logoAnimationId").style.display = "none";
	const errorContainer = document.getElementById("errorMessageId");
	errorContainer.innerHTML = `<div>${msg}</div>`;
	errorContainer.style.display = "block";
};

const launchInit = () => {
	if (isShowLogo) animateLogo();
	else isLogoAnimationDone = true;

	loadConfiguration();
};

launchInit();

