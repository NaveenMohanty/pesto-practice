const delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved😉 in"+ms)
      // reject("Rejected😢 in"+ms)
    },ms)
  })
}

// delay(200).then((value) => { // value returned by 1st then is get by 2nd and so on... 
//   return `${value} -> 1st-then`
// }).then((value) => {
//   return `${value} -> 2nd-then`
// }).then((value) => {
//   return `${value} -> 3rd-then`
// }).then((value) => {
//   console.log(`${value} -> 4th-then`)
// })


// delay(200).then((value) => { // If not resolved will go to 1st catch then 3rd then
//   return `${value} -> 1st-then`
// }).then((value) => {
//   return `${value} -> 2nd-then`
// }).catch((value) => {
//   return `${value} -> 1st-catch`
// }).then((value) => {
//   console.log(`${value} -> 3rd-then`)
// })


// delay(200).then((value) => {
//   return `${value} -> 1st-then`
// }).then((value) => {
//   // throw new Error("Error at 2nd-then")
//   return `${value} -> 2nd-then`
// }).catch((value) => {
//   return `${value} -> 1st-catch`
// }).then((value) => {
//   throw new Error("Error at 3rd-then")
//   // return `${value} -> 3rd-then`
// }).catch((value) => {
//   return `${value} -> 2nd-catch`
// }).then((value) => {
//   console.log(`${value} -> 4th-then`)
// })


delay(100).then((value) => {
  console.log(`${value} -> 1st-then`)
  return delay(1000)
}).then((value) => {
  console.log(`${value} -> 2nd-then`)
  return delay(1000)
}).then((value) => {
  console.log(`${value} -> 3rd-then`)
  return delay(1000)
}).then((value) => {
  console.log(`${value} -> 4th-then`)
})

