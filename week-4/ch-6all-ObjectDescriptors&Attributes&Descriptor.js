/**
 * Accessor Property: It associates a key value with one or two accessor functions.
 */

let desToBi = {
  value: 0,
  get name() {
    return this.value.toString(2) // It will convert decimal to binary
  },
  set name(num) {
    return this.value = num
  }
}

desToBi.name = 10
// console.log(desToBi.name)


// =====================================================================================

/**
 * Property Attribute and Descriptors
 */

let obj = {
  num: 2,
  str: "Naveen",
  arr: [1, 2, 3],
  ob: { a: 1, b: 2 },
  func: function () {
    //
  },
  cb: () => { },
  value: 0,
  get name() {
    return this.value.toString(2) // It will convert decimal to binary
  },
  set name(num) {
    return this.value = num
  }
}

// console.log(Object.getOwnPropertyDescriptors(obj)) // It get description of all the keys in the object
// console.log(Object.getOwnPropertyDescriptor(obj, 'num')) // It get description of particular keys in the object
// console.log(Object.getOwnPropertyDescriptor(obj, 'str'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'ob'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'cb'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'))

// ======================================================================================

/**
 * How to change property attributes manualy
 * {
    value: 'Naveen',
    writable: true,
    enumerable: true,
    configurable: true
  }
 */

let obj1 = {}

Object.defineProperty(obj1, 'name', {
  value: 'naveen',
  // writable: true,
  // enumerable: true,
  // configurable: true
})

// console.log(obj1) // We can't see empty object cuz for key name no attributes are define
// console.log(obj1.name) // we can access value cuz its value is defined but enumerable attribut is not defined
// obj1.name = 'Mohanty' // will throw error if writable attribut is not defined
// console.log(obj1.name) // we can't update value at 👆 line cuz writable attribut is not defined
// console.log(delete obj1.name) // we can't delete name key cuz configurable attribut is not defined

// ======================================================================================================

/**
 * iteration on object
 */

// adding mname in Object.prototye or we can say parent of obj3
Object.prototype.mname = 'kumar'

let obj3 = {
  fname: 'Naveen'
}

Object.defineProperty(obj3, 'lname', {
  value: 'Mohanty',
  enumerator: false,
})

// console.log('lname:', obj3.lname)

// can iterate over own value of obj3 and should have attribute enumerator:true
// console.log(Object.keys(obj3))
// console.log(Object.values(obj3))
// console.log(Object.entries(obj3))

// function iterObj(obj) {
//   let result = []
//   for (let key in obj) // It iterates on  parent keys also
//     result.push(key)
//   return result
// }

// console.log(iterObj(obj3))

// can iterate over own value of obj3 and should have attribute enumerator:(true || false)
// console.log(Object.getOwnPropertyNames(obj3))

// to access all keys which is its own, enumerator:false and parents we have to make custome funtion

function getAllKeys(obj) {
  let result = []
  while (obj) {
    result = result.concat(Object.getOwnPropertyNames(obj))
    obj = Object.getPrototypeOf(obj)
  }
  return result
}

// console.log(getAllKeys(obj3))

// ================================================================================

/**
 * there Descriptors just prevent some or all CRUD opertation on object
 * 
 * Object.preventExtensions : It prevent C only
 * Object.seal : It prevent C & D only
 * Object.freeze It prevent C, U & D only
 */

// Use funtion to use strict
function descriptor() {
  'use strict'

  let obj4 = {
    id: 20
  }

  // Object.preventExtensions(obj4)
  // Object.seal(obj4)
  Object.freeze(obj4)

  // try Create
  // obj4.name = 'naveen'

  // try Read
  // console.log(obj4.id)

  // try Update
  // obj4.id = 30
  // console.log(obj4.id)

  // try Update
  // console.log(delete obj4.id)
}

descriptor()












