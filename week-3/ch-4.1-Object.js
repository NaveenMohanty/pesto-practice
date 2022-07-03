/**
 * Circular reference of object
 */

let obj ={
    a:1,
    b:2,
}
obj.c = obj
// console.log(obj)
// console.log(obj.c)
// console.log(obj.c.c)

let obj2={
    xzy:23,
    'abc.xyz':22
}

console.log(obj2.xzy)
console.log(obj2['abc.xyz'])
console.log(obj2.abc.xyz) // this will show error


