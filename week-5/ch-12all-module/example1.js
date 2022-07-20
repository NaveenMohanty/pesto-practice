let i = 1

function inc() {
  i++
}

function print() {
  console.log(i)
}

// inc()
// inc()
// print()


// CommonJS format...this libarary was used before ES6 module to import and export

// module.exports = {
//   inc,
//   print,
//   i
// }

// OR

// module.exports.inc = inc
// module.exports.print = print

// ES6 file export systems are still not supports in node js so adding type:module in package.json

export { inc, print ,i}

// OR

// let all = { inc, print }
// export default all

// OR

// export const incs = inc
// export const prints = print
