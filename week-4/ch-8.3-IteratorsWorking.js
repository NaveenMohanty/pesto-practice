/**
 * Custom Iterators
 */

// Objects are not iterators

// let obj = { // Here i is in clouser of [Symbol.iterator]() so if it is interupted it wont keep i value track
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next() {
//         return {
//           value: i++,
//           done: i > 10
//         }
//       }
//     }
//   }
// }

let objIter = { // Here i is in part of Object(objIter). this is the usual implementation
  i: 0,
  [Symbol.iterator]() {
    return this
  },
  next() {
    return {
      value: this.i++,
      done: this.i > 10
    }
  }
}

for (const i of objIter) {
  console.log(i)
  if (i > 5)
    break;
}

console.log('===After break===')

for (const i of objIter) { // it keeps the track of iteration on objIter but in case ob obj this won't happen
  console.log(i)
}