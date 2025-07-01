
async function maniFunction() {
    function awaitFunction() {
        return new Promise((resolve, reject) => {
            fetch("http://jsonplaceholder.typicode.com/posts")
                .then(res => {
                    if (res.ok) {
                        resolve(res.json())
                    } else {
                        reject(" rejected")
                    }
                })                                          
        }
        ).then((resolve) => console.log(resolve)).catch((rej) => console.log(rej))
    }
    await awaitFunction()
    function nameFunction() {
        console.log(" Hi Alagar")
    }
    nameFunction();
}
maniFunction();
