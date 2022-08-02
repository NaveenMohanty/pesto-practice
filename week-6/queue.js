class Queue {
  constructor(arr, maxSize) {
    this.queueArr = arr ? arr : []
    this.maxSize = maxSize ? maxSize : 100
  }
  enqueue(item) {
    if (this.queueArr && (this.queueArr.length < this.maxSize)) {
      return this.queueArr.push(item)
    } else {
      return false
    }
  }
  dequeue() {
    if (this.queueArr && this.queueArr.length) {
      let [x, ...rest] = this.queueArr
      this.queueArr = rest
      return x
    } else {
      return null
    }
  }
  get peek() {
    if (this.queueArr && this.queueArr.length) {
      return this.queueArr[0]
    } else {
      return null
    }
  }
  get size() {
    return this.queueArr && this.queueArr.length ? this.queueArr.length : 0
  }
  isEmpty() {
    return this.queueArr && this.queueArr.length ? false : true
  }
}

// let queue = new Queue([1, 2, 3], 10)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(7)
// queue.enqueue(8)
// queue.enqueue(9)
// console.log(queue.size)
// console.log(queue.enqueue(10))
// console.log(queue.enqueue(11))
// console.log(queue.enqueue(12))
// console.log(queue.maxSize)
// console.log(queue.peek)
// console.log(queue.dequeue())
// console.log(queue.peek)
// console.log(queue.dequeue())
// console.log(queue.size)


/**
 * Problem 1
 * Queue ProblemGiven n, generate binary versions of the numbers from 1 to n. Return an array with all the numbers generated.
 * 1: ["1"]
 * 7: ["1", "10", "11", "100", "101", "110", "111", "1000"]
 */

function generateBinary(n) {
  if (n == 0)
    return []
  else if (n == 1)
    return ['1']
  else if (n == 2)
    return ['1', '10']
  else {
    let binQueue = new Queue(['1', '10'], 10)
    let binArr = ['1', '10']
    let isOne = true
    while (binArr.length < n) {
      let top = isOne ? binQueue.dequeue() : binQueue.peek
      let num = isOne ? (top + '1') : (top + '0')
      binArr.push(num)
      binQueue.enqueue(num)
      isOne = !isOne
    }
    return binArr
  }
}

// console.log(generateBinary(7))

function generateBinary2(n) {
  if (n > 0) {
    let binQueue = new Queue(['1'])
    let binArr = []
    for (let i = 0; i < n; i++) {
      let x = binQueue.dequeue()
      let n1 = x + '0'
      let n2 = x + '1'
      binArr.push(x)
      binQueue.enqueue(n1)
      binQueue.enqueue(n2)
    }
    return binArr
  }
}

// console.log(generateBinary2(7))

/**
 * Problem 2
 * implement Queue using two stack
 * !! Will be using arr as stack
 */

class TwoStackQueue {
  constructor() {
    this.input = []
    this.output = []
  }

  enqueue(item) {
    return this.input.push(item) ? true : false
  }
  dequeue() {
    if (this.output && this.output.length) {
      return this.output.pop()
    } else if (this.input && this.input.length) {
      while (this.input.length > 0) {
        let top = this.input.pop()
        this.output.push(top)
      }
      return this.output.pop()
    } else {
      return null
    }
  }
  get size() {
    return (this.input.length + this.output.length)
  }
}

// let stkQueue = new TwoStackQueue()

// console.log(stkQueue.size)
// console.log(stkQueue)
// console.log(stkQueue.enqueue(1))
// console.log(stkQueue.enqueue(2))
// console.log(stkQueue.enqueue(3))
// console.log(stkQueue.size)
// console.log(stkQueue)
// console.log(stkQueue.dequeue())
// console.log(stkQueue.dequeue())
// console.log(stkQueue)

/**
 * Problem 3
 * Priority Queue
 * Item with higher value will be given priority
 */

class PriorityQueue {
  constructor() {
    this.queue = []
  }
  enqueue(item) {
    if (this.queue && (this.queue.length == 0)) {
      this.queue.push(item)
      return true
    }
    else {
      this.queue.push(item)
      this.queue.sort((a, b) => (b - a))
      return true
    }
    return false
  }
  dequeue() {
    let [x, ...rest] = this.queue
    this.queue = rest
    return x
  }
  get size() {
    return this.queue.length
  }
}

// let Pqueue = new PriorityQueue()
// Pqueue.enqueue(1)
// Pqueue.enqueue(10)
// Pqueue.enqueue(4)
// Pqueue.enqueue(5)
// console.log(Pqueue.dequeue())
// console.log(Pqueue.dequeue())
// console.log(Pqueue.size)






