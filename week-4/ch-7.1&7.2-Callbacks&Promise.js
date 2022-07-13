/**
 * ->We use promise to prevent Callback hell/Pyramid of Doom
 * ->Non-sequential execution
 * ->Callback is exectuted much late so the stack tace is different.
 */

function cbTest(cb) {
  console.log("cbTest() called")
  setTimeout(() => { cb() }, 1000)
}

let cb = () => {
  console.log("cb() called")
  setTimeout(() => { throw new Error("can't trace error") }, 1000) // can't where error happent so difficult to debbug
}

// cbTest(cb)

let xyz = 7
// xyz() // we can trace this error and fix it

// ===================================================================================

let prom = new Promise(function (resolve, reject) {
  // setTimeout(() => { resolve("Resolved😉") }, 2000)
  setTimeout(() => { reject("Rejected😢") }, 2000)
})

// console.log(prom) // promise will be in pending state

// setTimeout(()=>console.log(prom),3000) // promise will be in either FULFILLED or REJECTED state

// prom.then(
//   (value) => console.log(value), // When promise is FULFILLED
//   (value) => console.log(value) // When promise is REJECTED
// ) 


// prom.then((value) => console.log("then:", value)) // When promise is FULFILLED
//   .catch((value) => console.log('catch:', value)) // When promise is REJECTED
//   .finally(() => console.log('finally')) // This will be called at any state

// prom.then((value) => console.log("then:", value)) // When promise is FULFILLED
//   .catch((value) => console.log('catch:', value)) // When promise is REJECTED
//   .then(() => console.log('finally then')) // This then act as finally will be called at any state
