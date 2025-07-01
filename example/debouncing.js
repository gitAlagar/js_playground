//Debouncing is a technique used to limit a number of time function is executed.
//it ensure the funtion called only after the specified delay has passed


function debouncing(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
       timer = setTimeout(()=>{
            fn.apply(this,args)
        },delay);
    }
}

function onInputChange(e){
    console.log("Input",e.target.value);
}

const debouncedInputHandler=debouncing(onInputChange,1000);

document.getElementById('search').addEventListener("input",debouncedInputHandler);


// Use Case: Useful for actions that should only happen after a user stops triggering an event, such as:

// Search input
// Resize window events
// Auto-saving