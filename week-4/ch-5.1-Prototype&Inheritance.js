/**
 * MDN Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
 * 
 */

let obj = {
  name:'naveen'
}

console.log(obj.name)

console.log(obj.toString) // got this cuz of prototype cchaining

obj.toString = 'Mohanty'

console.log(obj.toString) // When we create, update or delete any key in object it affects the currect object (obj)
// it doesn't affects the parent objects

// we only have read access to parent prtotype objects of obj

