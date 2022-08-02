class Stack {
  constructor(arr, maxSize) {
    this.stackArr = arr && Array.isArray(arr) && arr.length ? arr : []
    this.maxSize = maxSize ? maxSize : 10
  }

  push(item) {
    let x = false
    if (this.stackArr && (this.stackArr.length < this.maxSize)) {
      x = (item || item == 0) ? this.stackArr.push(item) : null
    }
    return x ? true : false
  }

  pop() {
    if (this.stackArr && this.stackArr.length) {
      return this.stackArr.pop()
    } else {
      return null
    }
  }

  get top() {
    if (this.stackArr && this.stackArr.length) {
      return this.stackArr[0]
    } else {
      return null
    }
  }

  get size() {
    if (this.stackArr && this.stackArr.length) {
      return this.stackArr.length
    } else {
      return 0
    }
  }

  isEmpty() {
    return this.stackArr && this.stackArr.length ? false : true
  }

}

// let stack = new Stack([1, 2, 3], 3)

// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())

// console.log(stack)
// console.log(stack.isEmpty())


// console.log(stack.push('dd'))
// console.log(stack.push(3))
// console.log(stack.push(2))
// console.log(stack.push(1))

// console.log(stack.top)
// console.log(stack.size)
// console.log(stack.maxSize)


// console.log(stack)

/**
 Given a balanced expression string s
 return true if a redundant pair of parantheses is found, false otherwise
 ((a+b)+(c+d)) false
 (a + ((b))) true
 (((a+b))+(c+d))  true
 */

function findRedundant(str) {
  let stack = new Stack(null, 100)
  for (let char of str) {
    if (char == ')') {
      let top = stack.pop()
      let popCount = 0
      while (top !== '(') {
        popCount++
        top = stack.pop()
      }
      if (popCount < 1)
        return true
    } else {
      stack.push(char)
    }
  }
  return false
}

console.log(findRedundant('(((a+b))+(c+d))'))
