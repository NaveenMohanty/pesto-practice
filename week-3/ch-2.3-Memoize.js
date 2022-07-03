/**
 * Memoization is an optimization technique use to store output to a particular input of a computation
 * so that it can be used in future computation.
 */

function memoize(fuc) {
  const cach = {};
  return function (...args) {
    let key = args.toString();
    if (cach[key]) return cach[key];
    cach[key] = fuc(args);
    return cach[key];
  };
}

function fibo(num) {
  if (num < 2) return num;
  return fibo(num - 1) + fibo(num - 2);
}

function timer(func) {
  console.time();
  console.log(func());
  console.timeEnd();
}
let memoFibo = memoize(fibo);
console.log("====Before memo====");
timer(() => fibo(40));
timer(() => fibo(40));
console.log("====After memo====");
timer(() => memoFibo(40));
timer(() => memoFibo(40));
timer(() => memoFibo(40));
timer(() => memoFibo(40));
