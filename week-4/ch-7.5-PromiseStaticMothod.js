// let value = 2
// let value = "Naveen"
// let value = [1, 2, 3]
// let value = { // the object which contains then are called thenable object. Promices are thenable objects
//   then(resolve, reject) {
//     setTimeout(() => {
//       resolve("resolve in thenable")
//       // reject("reject in thenable")
//     }, 1000)
//   }
// }
let value = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("resolve in value")
    reject("reject in value")
  }, 1000)
})


Promise.resolve(value).then((v) => console.log(`From then:${v}`)).catch((v) => console.log(`From catch:${v}`))

