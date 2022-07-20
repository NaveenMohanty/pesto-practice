// const all = require('./example1') // CommonJS


// console.log(all)
// all.inc()
// all.inc()
// all.print()

// import { inc, print } from './example1.js'

// inc()
// inc()
// print()

// import all from './example1.js'

// all.inc()
// all.inc()
// all.print()

// import { inc as ins, print as pri } from './example1.js' // can change imported name

// ins()
// ins()
// pri()

// import './example1.js' // BY this the file example1.js get exected on call

// import * as all from './example1.js'

// all.incs()
// all.incs()
// all.prints()


// re-export
// export * from './example1.js' // re-export
// export { inc as default } from './example1.js'
// export * as default from './example1.js' // re-export as default

// Dynamic import

// let modu = './example1.js'
// if (true)
//   import(modu).then((module) => (console.log(module))) // it return promise so can be used with conditions

// live connection of ES6 import and not of commonJS import export

// const all = require('./example1') // CommonJS
// console.log(all.i) // 1
// all.inc()
// console.log(all.i) // 1 no value increment

// import { inc, i } from './example1.js'  // ES6
// console.log(i) // 1
// inc()
// console.log(i) // 2 it kept live connection with file module


