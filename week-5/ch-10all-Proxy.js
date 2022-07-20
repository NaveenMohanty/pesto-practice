/**
 * Peoxy is ES6 property which helps to change semantic of Object
 * There are various other property of Proxy like set, deleteProperty,ownKeys,defineProperty & etc
 * but it depends on the property of object keys what operation can be performed
 */

let obj1 = {
  name: 'Naveen',
}

let handler = {
  get(target, keyname) {
    console.log("KeyName:", keyname)
    return target && target[keyname] ? `Value: ${target[keyname]}` : undefined
  }
}

// let proxy = new Proxy(obj1, handler)

let { proxy, revoke } = Proxy.revocable(obj1, handler) // this create revokable proxy

// console.log(proxy.name)

// proxy.lastname = "Mohanty" // the property not defined in handler will work as usual with original object obj1

// console.log(obj1.lastname, "  obj1:", obj1)

// console.log(proxy.lastname, "  proxy:", proxy)

// // revoke() // won't be able to use proxy anymore

// // console.log(proxy.name)


// ==============================================================

let obj = {}
Object.defineProperty(obj, 'name', { value: 'naveen', enumerable: true })

let handle = {
  get(target, keyname) {
    // return `xyz ${target[keyname]}` // this will throw error as we are violating obj property as it is only readly not writable or editable
    // return `${target[keyname]}` // this will work as we are returning value as it is
    return Reflect.get(target,keyname) // same as
  }
}

let prox = new Proxy(obj, handle)

console.log(prox.name)
console.log(prox.lname)


/**
 * Use cases
 * Type Checking
 * Property lookup extensions
 * Value correction
 * Debugging
 */

