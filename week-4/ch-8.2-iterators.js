/**
 * Iterators in JS
 */

// let x = "ab😂😄😃😀😊😉😝😝cd" // For string having emoji or other special char the usual iterator won't work
// let x = [1,2,3,4]
let x = new Map([['fname','naveen'],['lname','mohanty'],['age',24],['mname','kumar'],['school','svcs']]) // This can't be iterated in Normal for loop

// console.log("===Other Normal for loop===")

// for (let i = 0; i < x.length; i++) {
//   const e = x[i];
//   console.log(e)
// }

// console.log("===Other Iterator for loop===")

// for (let e of x) {
//   console.log(e)
// }

// console.log("===Spread and Rest ===")

// let [a, b, c, ...rest] = x

// console.log(a, b, c, "   Rest:", rest)

console.log("===Symbol Iterators===")

let iter = x[Symbol.iterator]() // Arrays, String, maps, ets and DOM are iterables using symbols...DOM are still in progress
 
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())




