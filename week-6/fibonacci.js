let memo = new Map()
function fibonacciMemo(n) {
  if (n == 0)
    return 0
  if (n <= 3)
    return 1
  let a;
  let b;
  if (memo.has(n - 1))
    a = memo.get(n - 1)
  else {
    a = fibonacciMemo(n - 1)
    memo.set(n - 1, a)
  }
  if (memo.has(n - 2))
    b = memo.get(n - 2)
  else {
    b = fibonacciMemo(n - 2)
    memo.set(n - 2, b)
  }
  return a + b
}

function fibonacci(n) {
  if (n == 0)
    return 0
  if (n <= 3)
    return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.time()
console.log(fibonacciMemo(30), memo)
console.timeEnd()

console.time()
console.log(fibonacci(30))
console.timeEnd()

