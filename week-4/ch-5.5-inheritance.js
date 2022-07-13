// ES5 way of inhertance


function Parent(id) {
  this.id = id
}

Parent.prototype.ReturnId = function () {
  return this.id
}

function Child(name, id) {
  Parent.call(this, id)
  this.name = name
}



Child.prototype.ReturnName = function () {
  return this.ReturnId() + this.name
}

Object.setPrototypeOf(Child.prototype, Parent.prototype)


let e = new Child('Naveen', 25)


// console.log(e.ReturnName())

// ==============================================================================

// ES6 way of Class and inhertance


class parent {
  constructor(id) {
    this.id = id
  }
  ReturnId() {
    return this.id
  }
}

class child extends parent {
  constructor(name, id) {
    super(id)
    this.name = name
  }

  ReturnName() {
    return this.ReturnId() + this.name
  }
}

let x = new child('Jateen', 18)

console.log(x.ReturnName())