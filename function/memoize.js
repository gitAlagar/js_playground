const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        let key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

const square =memoize((n)=>n*n);

console.log(square(5));
console.log(square(5));

// Memoization is caching function results to avoid recomputation. 
// You wrap a function, store results in a cache keyed by its arguments, and return cached results on future calls.