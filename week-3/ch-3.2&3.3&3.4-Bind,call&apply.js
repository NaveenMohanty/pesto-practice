/**
 * ->Bind helps to bind a function with a specific object
 * ->Syntax:bind(thisArg)
            bind(thisArg, arg1)
            bind(thisArg, arg1, arg2)
            bind(thisArg, arg1, ... , argN)
 */

a = 3;
b = 7;

function add() {
  return this.a + this.b;
}
// It takes global a & b value for this
// console.log("Before bind:", add());

let add2 = add.bind({ a: 1, b: 2 });
// It takes binded object value for a & b value for this
// console.log("after bind:", add2());

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let obj = {
  a: 1,
  b: 2,
  add() {
    return this.a + this.b;
  },
};

// It takes a & b value from obj object which add() is part of
// console.log("Before bind:", obj.add());

let objAdd = obj.add;
// It takes global a & b value for this
// console.log("Witout bind:", objAdd());

let objAdd2 = obj.add.bind(obj);
// It takes binded object value for a & b value for this
// console.log("after bind:", objAdd2());

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function mul(a, b) {
  return a * b;
}

// console.log(mul(2, 3));

// here we have bind null as object but pass a parameter of mul(a,b) if we pass param to double it will be b.
let double = mul.bind(null, 2);

// console.log(double(3));
// console.log(double(10));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/**
 * Call is similar to bind but it calls the function along binding it with an object.
 * syntax: call()
          call(thisArg)
          call(thisArg, arg1)
          call(thisArg, arg1, arg2)
          call(thisArg, arg1, ... , argN)
 */
let obj2 = {
  x: "xyz",
  y: "yz",
};
function func(a, b) {
  return `x:${this.x} y:${this.y} a:${a} b:${b}`;
}

// console.log(func(1, 2));

// console.log(func.call(obj2));

// console.log(func.call(obj2, "abc"));

// console.log(func.call(obj2, "abc", "bcd"));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/**
 * apply is similar to call but it takes the positional args in as array.
 * syntax: apply()
          apply(thisArg)
          apply(thisArg, [arg1])
          apply(thisArg, [arg1, arg2])
          apply(thisArg, [arg1, ... , argN])
 */
// max takes args numbers separated by comma(,)
console.log(Math.max(10, 20, 1, 2, 4));
let nums = [10, 20, 1, 2, 4, 30];
console.log(Math.max.apply(null, nums));
