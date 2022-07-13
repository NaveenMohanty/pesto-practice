// Accessing the Prototype

const prototypeObj = { name: 'naveen', getname() { return this.name } }
// const obj = Object.create(prototypeObj)

// OR

// const obj = {}
// Object.setPrototypeOf(obj,prototypeObj)

// console.log(Object.getPrototypeOf(obj)) // here we get parent ob obj which is prototypeObj

// console.log(Object.getPrototypeOf(obj) === prototypeObj) 

// console.log(prototypeObj.isPrototypeOf(obj)) //It give same result as code at line 8 here prototypeObj is parent prototype of obj


// console.log(obj.__proto__) // Not supported by every browser

// console.log(obj.__proto__ === prototypeObj)

// ==============================================================================

// Modifying Existing Prototypes

const obj = {}
// console.log(obj.toString) // It will find from its parent prototypes
// Object.setPrototypeOf(obj, null) //seting prototype to null
// console.log(obj.toString) // We have set parent prototype to null

obj.__proto__ = prototypeObj // similar to line 9 but not recommended as __proto__ not supported by much browser
console.log(obj)
console.log(obj.getname())
obj.name = 'Mohanty' // Overriding the parent property. But it won't affet parent obj rather add name key in obj
console.log(obj)
console.log(obj.getname())




