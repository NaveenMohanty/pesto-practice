/**
 * ->This in JS depends on run time.
 * ->If there is no object assigned to a function implicitly
 * then deafualt global (for node js) or windows(for browser) get assigned explicitly.
 */

function foo() {
  if (this === global) console.log("this is global");
  else console.log("this is not global");
  console.log("num1:", this.num1);
  console.log("num2:", this.num2);
}

const obj = {
  num1: "obj",
  dsplay: foo,
};

// Eg: Implicit
// console.log("===Implicit===");
// foo(); //undefined
global.num2 = "global"; //we have assigned value to num2 in global
// foo();
// var num1 = "global"; // any gobal varibale get in the global object(this will work in browser)
num1 = "global";
// foo();

// Eg: Explicit
// console.log("===Explicit===");
// obj.dsplay();

// Eg: Explicit lost
// console.log("===Explicit lost===");
let fun = obj.dsplay;
// fun();
// setTimeout(obj.dsplay, 0);

/**
 * Arrow fuction doesn't bind to any this fuction. It look for it in its outer scope
 */
console.log("===Arrow function===");
global.name = "hello Global";
const obj2 = {
  name: "hello obj2",
  arr: [1, 2, 3, 4],
  func1() {
    if (this === global) console.log("This is global", this);
    else console.log("This is not global", this);
    console.log("name:", this.name);
  },
  func2: () => {
    if (this === global) console.log("This is global", this);
    else console.log("This is not global", this);
    console.log("name:", this.name);
  },
  func3() {
    if (this === global) console.log("This is global", this);
    else console.log("This is not global", this);
    console.log("By regular function");
    // here explicite loss of this took place
    this.arr.forEach(function (num, i) {
      console.log(`arr[${i}]:`, num, " name:", this.name);
    });
    console.log("By regular function but assign that = this");
    var that = this;
    // here explicite loss of this took place
    this.arr.forEach(function (num, i) {
      console.log(`arr[${i}]:`, num, " name:", that.name);
    });
    console.log("By arrow function");
    this.arr.forEach((num, i) => {
      console.log(`arr[${i}]:`, num, " name:", this.name);
    });
  },
};
// regular function binds to "this" to object obj2
// obj2.func1();
// Arrow function does not bind "this" to any object not even global
// obj2.func2();
obj2.func3();
let func3 = () => {
  if (this === global) console.log("This is global", this);
  else console.log("This is not global", this);
  console.log("name:", this.name);
};

// func3();
