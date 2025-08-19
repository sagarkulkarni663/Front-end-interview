function worst(a, b) {
  for (let i = 0; i < 100000000; i++) {}
  return a * b;
}

// console.time("first call")
// console.log(worst(100,200));
// console.timeEnd("first call")

// console.time("second call")
// console.log(worst(100,200));
// console.timeEnd("second call")

function memoizeFuntion(fn, context) {
  let cache={}
  return function (...args) {
    let argsCache = JSON.stringify(args);
    if (!cache[argsCache]) {
      cache[argsCache] = fn.call(context || this, ...args);
    }
    return cache[argsCache];
  };
}

const memoized = memoizeFuntion(worst);

console.time("first call")
console.log(memoized(100,200));
console.timeEnd("first call")

console.time("second call")
console.log(memoized(100,200));
console.timeEnd("second call")