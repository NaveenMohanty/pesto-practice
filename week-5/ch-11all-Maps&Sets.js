/**
 * Maps
 */

//  imp::*weakMap or weakSet are same but it automatically remove the value for ex object obj if it is destoryed due
// garbage collection

let obj = {}

let map = new Map([['name', 'Naveen'], [1, 123], [obj, [1, 2, 3]]]) // we can set few value 

// console.log(map.get('name'))
// console.log(map.get(1))
// console.log(map.get(obj)) // objects can be also used as key
// map.set('set','value seted') // add new value pair
// console.log(map.get('set'))
// console.log(map.has('set')) // check if value of a key is persent
// console.log(map.delete('set')) // returns true if operaton is success
// console.log(map.has('set'))

// console.log("Size:",map.size)
// map.clear() // clear whole map
// console.log(map.has('name')) // will now not be present

// console.log("entries:", map.entries())
// console.log("forEach:")
// map.forEach((v, k, c) => console.log({ v, k, c }))
// console.log("keys:", map.keys())
// console.log("values:", map.values())

// let mapIter = map[Symbol.iterator]() // can be defined as iterator

// console.log("===Iter start===")

// console.log(mapIter.next())
// console.log(mapIter.next())
// console.log(mapIter.next())

// =================================================


let obj1 = {}

let set = new Set(["naveen", 12, obj1]) // we can set few value 

// console.log(set.has('naveen')) // check if value of a value is persent
// console.log(set.delete('naveen')) // returns true if operaton is success
// console.log(set.has('naveen'))

// console.log("Size:",set.size)
// set.clear() // clear whole set
// console.log(set.has('naveen')) // will now not be present

console.log("entries:", set.entries())
console.log("forEach:")
set.forEach((v, k, c) => console.log({ v, k, c }))
console.log("keys:", set.keys())
console.log("values:", set.values())

let setIter = set[Symbol.iterator]() // can be defined as iterator

console.log("===Iter start===")

console.log(setIter.next())
console.log(setIter.next())
console.log(setIter.next())







