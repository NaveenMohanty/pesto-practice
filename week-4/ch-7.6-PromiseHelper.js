function Prom(ms, isResolve, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isResolve)
        resolve(value)
      else
        reject(value)
    }, ms)
  })
}

console.time()

// Promise.all([ // will return array of all resolved value or if any one is rejected it will return that
//   Prom(1000, true, "1st"),
//   Prom(2000, true, "2nd"),
//   Prom(3000, false, "3st")
// ]).then((v) => { console.log(v); console.timeEnd(); })
//   .catch((err) => { console.log(err); console.timeEnd() })

// Promise.race([ // it will return 1st setted value(either resolved or reject)
//   Prom(1000, false, "1st"),
//   Prom(2000, true, "2nd"),
//   Prom(3000, true, "3st")
// ]).then((v) => { console.log(v); console.timeEnd(); })
//   .catch((err) => { console.log(err); console.timeEnd() })

// Promise.allSettled([ // it will return all setted value(either resolved or reject) in form of object ({ status: 'fulfilled', value: '1st' }) array
//   Prom(1000, true, "1st"),
//   Prom(2000, false, "2nd"),
//   Prom(3000, true, "3st")
// ]).then((v) => { console.log(v); console.timeEnd(); })
//   .catch((err) => { console.log(err); console.timeEnd() })

// Promise.any([ // It will return the 1st fulfiled promise if all promise gets rejected it will throw "AggregateError: All promises were rejected"   
//   Prom(1000, true, "1st"),
//   Prom(2000, false, "2nd"),
//   Prom(3000, true, "3st")
// ]).then((v) => { console.log(v); console.timeEnd(); })
//   .catch((err) => { console.log(err); console.timeEnd() }) 