/**
 * Symbols are new primitive dataType used in ES6 JS
 */

let sym = Symbol()
let sym1 = Symbol.for('sym1')
let sym12 = Symbol.for('sym1')

let obj = {
  name: 'Naveen'
}

obj[sym] = 'Mohanty'
obj[sym1] = 'kumar'


console.log(obj)

obj[sym12] = 'kumar2' // here sym1 && sym12 are pointing to same Symbol so 

console.log(obj) // cuz sym1 === sym12

console.log(sym1 === sym12)

console.log(Object.keys(obj)) // Symbols act as a weak encapsulation that hides keys from some iterators



