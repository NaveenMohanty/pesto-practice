/**
 * Closure: Function's ability to remember its laxical parent variables.
 * Example:👇
 */

// Ex:1
function iter() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
// iter();

// Ex:2
function parent() {
  let x = 2; // Comment this and check the ans
  function child() {
    console.log(x);
  }
  child();
}
let x = 1;
// parent();

// Ex:3
let count = 0;

setTimeout(() => {
  count++;
  console.log(`In setTimeout = ${count}`);
}, 1000);

console.log(`${count}`);
function ex3() {}

// ex3();

// Example from 2.2 vdo
console.log("====Example from 2.2 vdo====");

//  Ex:1

function ex1() {
  // change var and let ans will change
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log("1::", i);
    }, 1000);
  }
  // how to get let functionality using var
  for (var j = 0; j < 3; j++) {
    setTimeout(
      (function (x) {
        return () => {
          console.log("2::", x);
        };
      })(j),
      1000
    );
  }
}

// ex1();

function ex6() {
  function mainFunc() {
    let x = 0;
    function incr() {
      x++;
    }
    let msg = `this is x:${x}`;
    function print() {
      console.log(msg, x);
    }

    return { incr, print };
  }
  let { incr, print } = mainFunc();
  incr();
  incr();
  incr();
  print();
}
// ex6();
