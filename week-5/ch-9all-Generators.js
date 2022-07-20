/**
 * Generators are iterators but with simple syntax
 * We can iterate over Generators once
 */

function* genFibbo(n) {
  let i = 0
  let a = 0
  let b = 1
  while (i < n) {
    let ans = 0
    if (i > 1) {
      ans = a + b
      a = b
      b = ans
      yield ans
    } else {
      yield ans
    }
    i++
  }
}

const First10Fib = genFibbo(10)


// for (const x of First10Fib) {
//   console.log(x)
// }

// console.log(First10Fib.next()) // can't be iterated over again

// ======================================================================

// Implementation of generators

function* range(iter) {
  for (let e of iter) {
    yield e
  }
}

// let Ranger = range([1,2,3])

// console.log(Ranger.next())
// console.log(Ranger.next())
// console.log(Ranger.next())
// console.log(Ranger.next()) // Undefined


function* circle(iter) {
  while (true) {
    for (let e of iter) {
      yield e
    }
  }
}

// let Circular = circle([1, 2, 3])

// console.log(Circular.next())
// console.log(Circular.next())
// console.log(Circular.next())
// console.log(Circular.next()) // Repeat
// console.log(Circular.next())
// console.log(Circular.next())
// console.log(Circular.next())
// console.log(Circular.next())
// console.log(Circular.next())

// =====================================================================

/**
 * Observer
 */


function* gen() {
  console.log("1st:", yield "1st")
  console.log("2nd:", yield "2nd")
  console.log("3rd:", yield "3rd")
  console.log("4th:", yield "4th")
  return "return"
}

let y = gen()

// console.log(y.next()) // At 1st we the value passed is of no use cuz it initializes it

// console.log(y.next(1)) // here 1 is pass as param so yield value is 1 at 1st and it return value 1st

// console.log(y.next(2))

// console.log(y.next(3))

// console.log(y.next(4)) // here 4 is pass as param so yield value is 4 at 2nd and it return value "Return"



function* Iter(iter) {
  yield* iter // It iterate over the iteratior or Generator
}

function* circle(iter) {
  while (true) // ciculate infinitly over iter
    yield* Iter(iter) // It iterate over the iteratior or Generator
}

// let it = Iter("abc")
let it = circle("abc")


// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.return("My Name"))
// console.log(it.throw(new Error("Its Error")))



