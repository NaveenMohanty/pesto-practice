/**
 * Primitive values are Booleans, Numbers, String, Null and Undefined.
 * All other values are objects
 */

/**
 * Undefined means "no value"
 * Example:👇
 */

console.log("==============Undefined==================");

// Ex:1
let x;
console.log("x:", x);

// Ex:2
function sum(a) {
  console.log("a:", a);
}
sum();

// Ex:3
let obj = {};
console.log("obj.name:", obj.name);

/**
 * null means "no Object"
 * Example:👇
 */

console.log("==============null==================");

let y = null;
console.log("y:", y);

let obj2 = {
  a: null,
};
console.log("obj2:", obj2, "  obj2.a:", obj2.a);

console.log("==============Type Of==================");

let a;
console.log("typeof a:", typeof a);

// Exception null is considered as object.
let b = null;
console.log("typeof b:", typeof b);

let d = true;
console.log("typeof d:", typeof d);

let e = 2;
console.log("typeof e:", typeof e);
console.log("typeof NaN:", typeof NaN);

let f = "Naveen";
console.log("typeof f:", typeof f);

let func = () => {
  return true;
};
console.log("typeof func:", typeof func);

// All other normal values are "Object"
let prom = new Promise(() => {
  //
});
console.log("typeof prom:", typeof prom);
let date = new Date();
console.log("typeof date:", typeof date);
