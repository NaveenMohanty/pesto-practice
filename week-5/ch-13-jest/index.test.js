/**
 * https://jestjs.io/docs/using-matchers
 * Zest Doc
 */

test('Test zest for number, ', () => {
  let value = 2 + 2
  let testNull = null
  let n;
  expect(value).toBe(4)
  expect(testNull).toBeNull()
  expect(value).toEqual(4)
  expect(value).not.toEqual(3)
  expect(value).toBeDefined();
  expect(n).toBeUndefined();
  expect(value).toBeTruthy();
  expect(value).not.toBeFalsy();

  //numbers
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  let x = 0.2 + 0.1
  expect(value).toBe(4);
  expect(value).toEqual(4);
  expect(x).toBeCloseTo(0.3);
})

test('Test zest for string, ', () => {
  expect('team').toMatch(/ea/) // Regular expression
  expect('team').toMatch("ea") // Match string

})

test('Test zest for iterables', () => {
  let arr = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]
  expect(arr).toContain('milk')
  expect(new Set(arr)).toContain('trash bags')
})

function exceptionThrow() {
  throw new Error('error for test')
}

test('Test zest for Exception', () => {
  expect(exceptionThrow).toThrow();
  expect(exceptionThrow).toThrow(Error);
  expect(() => exceptionThrow()).toThrow('error for test'); // To call with para we have to use callback
  expect(() => exceptionThrow()).toThrow(/test/); // To call with para we have to use callback
})

function testCb(cb) {
  setTimeout(() => { cb('text Done') }, 2000)
}

test('Test zest for Callback', (done) => {
  function cb(value) {
    expect(value).toBe('text Done')
    done()
  }
  testCb(cb)
})

function testPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => { res('text Done') }, 2000)
    // setTimeout(() => { rej('text Done') }, 2000)
  })
}

test('Test zest for Promise', () => {
  expect.assertions(1); // Make sure to add expect.assertions to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would not fail the test.
  return testPromise().then((value) => {
    expect(value).toBe('text Done')
  }).catch((err) => { expect(err).toBe('text Done') })
})

// Custom Matchers

expect.extend({
  toBeInRange(value, lowerV, upperV) {
    let pass = false
    let message = () => 'Error occured'
    if (!(value && Number.isInteger(value))) {
      message = () => 'Invalid value in expect param'
    } else if (!(upperV && Number.isInteger(upperV))) {
      message = () => 'Invalid value in toBeInRange first param'
    } else if (!(lowerV && Number.isInteger(lowerV))) {
      message = () => 'Invalid value in toBeInRange first param'
    } else if (value >= lowerV && value <= upperV) {
      pass = true
      message = () => `${value} is range of [${lowerV},${upperV}]`
    } else {
      message = () => `${value} is not in range of [${lowerV},${upperV}]`
    }

    return {
      pass,
      message
    }
  }
})

test('Test Custome matchers', () => {
  expect(5).toBeInRange(2, 10)
})