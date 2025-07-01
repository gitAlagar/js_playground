let x = 20;
let promise = new Promise(
    function (resolve, reject) {
        setTimeout(() => {
            if (x > 20) {
                resolve("hi alagar");
            } else {
                reject("failure");
            }
        }, 4000);
    }
).then((resVal) => {
    console.log(resVal);
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(" done")
            }, 5000);
        }
    )
}).catch((rejVal) => {
    console.log(rejVal);
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                reject("fail");
            }, 3000)
        }
    )
}

).then((secResolve) => console.log(secResolve)).catch((secReject) => console.log(secReject));

//--------------Promise.all() method--------------------

const resolved = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!")
    }, 1000);
})

const rejected = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error");
    }, 2000);
})

// 1 Promise.all method return if any failure total failure
Promise.all([resolved,rejected]).then(console.log).catch(console.log);

// 2 Promise.allSettled return resolve & reject:
Promise.allSettled([resolved,rejected]).then(console.log).catch(console.log);


//--------------Promise.any()-------------

const first = new Promise((resolve) => {
    setTimeout(resolve, 1000, "first Promise");
})

const second = new Promise((resolve) => {
    setTimeout(resolve, 2000, "second Promise")
})

Promise.any([first, second]).then(console.log).catch(console.log)

//Promise.any() method returns first promise that fullfils, it will not wait for other promises to complete.

const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected"); //always rejected
});

Promise.any([Rejection])
    .catch((err) => {
        console.log(err);
    });

// expected output: "AggregateError: No Promise in Promise.any was resolved"
// Promise.any() rejects with an AggregateError if no promise fulfils.

// ----------------promise.race()-------------------

Promise.race([first,second]).then(console.log).catch(console.log)

// Promise.race return  first response resolved or rejected



