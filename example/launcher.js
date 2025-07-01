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

const isShowLogo = getQueryParam('loader')==="true"?true:false;
const launcherToken = getQueryParam('token');
const totalActionCount = isShowLogo ? 2 : 1;
let actionCount = 0;
let lanuncherId = null;
let gameUrl = "";

/**
 * This method will generate the logo animation
 */
const animateLogo = () => {
	let pos = 0.0;
	lanuncherId && clearInterval(lanuncherId);
	lanuncherId = setInterval(() => {
		if (pos >= 1.0) {
			clearInterval(lanuncherId);
			loadGamePage();
		}
		else {
			pos += 0.02;
		}
		var elem = document.getElementById("originalImg");
		elem.style.opacity = pos;
	}, 30);
};
//==================

/**
 * To launch the game once launcher process done 
 */
const loadGamePage = () => {
	// console.log("loadGamePage:", gameUrl, actionCount, totalActionCount);
	actionCount++;
	if (actionCount >= totalActionCount) {
		if (gameUrl) {
			let meta = document.createElement('meta');
			meta.httpEquiv = "Refresh";
			meta.content = `1; url=${gameUrl}`;
			document.getElementsByTagName('head')[0].appendChild(meta);
		}
		// console.log("gameURL", gameUrl);
	}
};



const loadConfiguration = async () => {
	try {
		// Fetch the data from the server
		const response = await fetch(JSONPath + launcherToken + ".txt").then(response => {
			if (!response.ok) {
				showErrorMessage(invalidToken);
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.text(); // Parse the response as text
		})
			.then(data => {
				//console.log('File content:', data);
				// Get the Base64 encoded data as a string
				const hashedConfig = data;

				const paramsKey = "params";
				const configKey = "config";

				if (window.sessionStorage) {
					window.sessionStorage.setItem(paramsKey, launcherToken);
					window.sessionStorage.setItem(configKey, hashedConfig);
				} else {
					document.cookie = `${storageKey}=${encodeURIComponent(launcherToken)}; path=/`;
					document.cookie = `${configKey}=${encodeURIComponent(hashedConfig)}; path=/`;
				}

				console.log("launcherToken ",launcherToken);
				console.log("hashedConfig ",hashedConfig);

				// Decode the Base64 data
				const overallData = atob(hashedConfig);
				const overallDataJson = JSON.parse(overallData);
				let paramsData = atob(overallDataJson.params);
				let paramsParsedData = JSON.parse(paramsData);
				gameUrl = paramsParsedData['gamePath'];

				console.log("paramsParsedData:",paramsParsedData);
				console.log("externalGame:",paramsParsedData['externalGame']);
				console.log("externalGameParams:",paramsParsedData['externalGameParams']);
				if (paramsParsedData['externalGame']) {
					const hasQuestionMark = gameUrl.includes('?');
					if (!hasQuestionMark) {
						gameUrl = `${gameUrl}?token=${launcherToken}`;
					}
					else{
						gameUrl = `${gameUrl}&token=${launcherToken}`;
					}
					

					if (paramsParsedData['externalGameParams']) {
						const extraParams = paramsParsedData['externalGameParams'];
						for (const [key, value] of Object.entries(extraParams)) {
							gameUrl += `&${key}=${value}`;
						}
					}
				}
				console.log("gameUrl=>",gameUrl);

				loadGamePage();
			})
			.catch(error => {
				showErrorMessage(invalidToken);
				console.error('Error fetching the text file:', error);
			});
	} catch (error) {
		// Todo: need to show message("session is expired")
		showErrorMessage(invalidToken);
		console.error("Error fetching and decoding Base64 data:", error.message);
	}
};


const launchInit = () => {
	const gameParams = getQueryParam('token');

	isShowLogo && animateLogo();
	loadConfiguration();
};

const showErrorMessage = (errorMessage) => {
	lanuncherId && clearInterval(lanuncherId);
	let logoAnimationContainer = document.getElementById("logoAnimationId");
	let errorMessageContainer = document.getElementById("errorMessageId");
	logoAnimationContainer.style.display = "none";
	errorMessageContainer.innerHTML = `<div>${errorMessage}</div>`;
	errorMessageContainer.style.display = "block";
};

launchInit();





// const JSONPath = "../launcherconfig/";
// const invalidToken = "Invalid token. Kindly check with administrator!";
// /**
//  * To genrarate the Query params
//  * @param {paramsKey:string} param 
//  * @returns Value of respective params
//  */
// const getQueryParam = (param) => {
// 	const queryString = window.location.search;
// 	const regex = new RegExp(`[?&]${param}=([^&]*)`);
// 	const match = queryString.match(regex);
// 	return match ? decodeURIComponent(match[1]) : null;
// };

// const isShowLogo = getQueryParam('loader') === "true";
// const launcherToken = getQueryParam('token');

// let gameUrl = "";
// let isLogoAnimationDone = false;
// let isConfigLoaded = false;

// /**
//  * To launch the game once launcher process done 
//  */
// const loadGamePage = () => {
// 	if (isLogoAnimationDone && isConfigLoaded && gameUrl) {
// 		document.getElementById("logoAnimationId").style.display = "none";
// 		document.getElementById("gameFrame").style.display = "block";
// 		// document.getElementById("gameFrame").onload = () => {
// 		// 	document.getElementById("logoAnimationId").style.display = "none";
// 		// 	document.getElementById("gameFrame").style.display = "block";
// 		// };
// 	}
// };

// // const loadGamePage = () => {
// // 	// actionCount++;
// // 	// if (actionCount >= totalActionCount) {
// // 	if (gameUrl) {
// // 		let meta = document.createElement('meta');
// // 		meta.httpEquiv = "Refresh";
// // 		meta.content = `1; url=${gameUrl}`;
// // 		document.getElementsByTagName('head')[0].appendChild(meta);
// // 	}
// // 	// }
// // };

// /**
//  * This method will generate the logo animation
//  */
// const animateLogo = () => {
// 	let pos = 0.0;
// 	// const loaderFill = document.getElementById("loaderFill");
// 	const logo = document.getElementById("originalImg");

// 	const interval = setInterval(() => {
// 		if (pos >= 100) {
// 			clearInterval(interval);
// 			logo.style.opacity = 1;
// 			isLogoAnimationDone = true;
// 			loadGamePage();
// 		} else {
// 			pos += 0.1;
// 			loaderFill.style.width = `${pos}%`;
// 			logo.style.opacity = pos / 100;
// 		}
// 	}, 1); // 40ms * 100 = ~4 seconds
// };

// const loadConfiguration = async () => {
// 	try {
// 		// Fetch the data from the server
// 		const response = await fetch(`${JSONPath}${launcherToken}.txt`);
// 		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

// 		const hashedConfig = await response.text();

// 		const paramsKey = "params";
// 		const configKey = "config";

// 		if (window.sessionStorage) {
// 			window.sessionStorage.setItem(paramsKey, launcherToken);
// 			window.sessionStorage.setItem(configKey, hashedConfig);
// 		} else {
// 			document.cookie = `${paramsKey}=${encodeURIComponent(launcherToken)}; path=/`;
// 			document.cookie = `${configKey}=${encodeURIComponent(hashedConfig)}; path=/`;
// 		}

// 		console.log("launcherToken ", launcherToken);
// 		console.log("hashedConfig ", hashedConfig);

// 		// Decode the Base64 data
// 		const overallData = atob(hashedConfig);
// 		const overallDataJson = JSON.parse(overallData);
// 		let paramsData = atob(overallDataJson.params);
// 		let paramsParsedData = JSON.parse(paramsData);

// 		gameUrl = paramsParsedData['gamePath'];

// 		if (paramsParsedData['externalGame']) {
// 			const hasQuestionMark = gameUrl.includes('?');
// 			gameUrl += hasQuestionMark ? `&token=${launcherToken}` : `?token=${launcherToken}`;

// 			if (paramsParsedData['externalGameParams']) {
// 				const extraParams = paramsParsedData['externalGameParams'];
// 				for (const [key, value] of Object.entries(extraParams)) {
// 					gameUrl += `&${key}=${value}`;
// 				}
// 			}
// 		}


// 		isConfigLoaded = true;

// 		// loade the game in iframe
// 		if (isShowLogo) {
// 			document.getElementById("gameFrame").src = gameUrl;
// 		} else {
// 			loadGamePage();
// 		}
// 		loadGamePage();
// 	} catch (error) {
// 		showErrorMessage(invalidToken);
// 		console.error("Error loading config:", error.message);
// 	}
// };

// const showErrorMessage = (msg) => {
// 	document.getElementById("logoAnimationId").style.display = "none";
// 	const errorContainer = document.getElementById("errorMessageId");
// 	errorContainer.innerHTML = `<div>${msg}</div>`;
// 	errorContainer.style.display = "block";
// };

// const launchInit = () => {
// 	if (isShowLogo) animateLogo();
// 	else isLogoAnimationDone = true;

// 	loadConfiguration();
// };

// launchInit();

// // let gameIsReady = false;
// // let hasStartedAnimation = false;

// // if (isShowLogo) {
// // 	// let hasStartedAnimation = false;

// // 	window.addEventListener("message", (event) => {
// // 		const data = event.data;

// // 		if (data?.type === 'progress') {
// // 			if (isShowLogo) {
// // 				if (!hasStartedAnimation) {
// // 					hasStartedAnimation = true;
// // 					animateLogo(); // Start animation when first progress message comes
// // 				}

// // 				const percent = Math.floor(data.value * 100);
// // 				const loaderFill = document.getElementById("loaderFill");
// // 				if (loaderFill) {
// // 					loaderFill.style.width = percent + '%';
// // 				}
// // 			}
// // 		}

// // 		if (data?.type === 'gameReady') {
// // 			gameIsReady = true;

// // 			const tryFinish = () => {
// // 				if (isConfigLoaded && isLogoAnimationDone && gameIsReady) {
// // 					document.getElementById("logoAnimationId").style.display = "none";
// // 					document.getElementById("gameFrame").style.display = "block";
// // 					return true;
// // 				}
// // 				return false;
// // 			};

// // 			if (!tryFinish()) {
// // 				const interval = setInterval(() => {
// // 					if (tryFinish()) clearInterval(interval);
// // 				}, 100);
// // 			}
// // 		}
// // 	});

// // }



