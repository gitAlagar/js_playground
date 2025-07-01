// Throttling is a technique that ensure a function is executedat most once in a given time interval, 
// no matter how many times the event is triggered.

function throttling(fn,delay){
    let lastTime = 0;
    return function(...args){
        let now =Date.now();
        if(now-lastTime>=delay){
            lastTime=now;
            fn.apply(this,args);
        }
    }
}

function onScroll(){
    console.log("Scroll event at",new Data().toISOString());
}

const throttledScrollHAndler= throttling(onScroll,1000);

window.addEventListener("scroll",throttledScrollHAndler);

// Use Case: Useful for actions that should be performed at regular intervals, such as:
// Scroll events
// Mouse move
// Button spamming