/**
 * [[Prototype]] and prototype explained: https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8#:~:text=__proto__%20is%20a,and%20setting%20an%20object's%20prototype.
 * -> {} Creater is Object so it inherits from Object.prototype
 * -> [] Creater is Array so it inherits from Array.prototype
 * -> let obj = new Person() here creater is Person so it inherits from Person.prototype
 */


function Person() {
  this.message = "Hello I'm Person"
}

const p = new Person()

console.log(Object.getPrototypeOf(p) == Person.prototype)
console.log(Object.getPrototypeOf(Person) == Function.prototype)
console.log(Object.getPrototypeOf(Object) == Function.prototype)
console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype)
console.log(Object.getPrototypeOf(Object.prototype) == null)
console.log(Object.getPrototypeOf(Function) == Function.prototype)

