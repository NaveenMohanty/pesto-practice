function Node(value, next, prev) {
  this.value = value ? value : null;
  this.next = next ? next : null;
  this.prev = prev ? prev : null;
}

class DoubleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  push(value) {
    let newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    this.size++;
    return newNode;
  }

  pop() {
    if (this.size) {
      let Node = null;
      if (this.size === 1) {
        Node = this.head
        this.head = null;
        this.tail = null;
      } else {
        Node = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
      }
      this.size--;
      return Node;
    } else {
      return null;
    }
  }

  unshift(value) {
    let newNode = new Node(value)
    if (this.size) {
      newNode.next = this.head
      this.head = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }
    this.size++
    return newNode;
  }

  shift() {
    let Node = null;
    if (this.size === 1) {
      Node = this.head
      this.head = null
      this.tail = null
      this.size--
    } else if (this.size) {
      Node = this.head
      this.head = this.head.next
      this.head.prev = null
      this.size--
    }
    return Node;
  }

  insert(value, idx) {
    if (idx === (this.size - 1)) {
      return this.push(value);
    } else if (idx === 0) {
      return this.unshift(value);
    } else if (this.size <= idx) {
      throw "Linked List is size overflow"
    } else if (idx) {
      let newNode = new Node(value)
      let i = 0;
      let current = this.head;
      while (current && (i < (idx - 1))) {
        i++;
        current = current.next;
      }
      newNode.next = current.next
      newNode.prev = current
      current.next = newNode
      this.size++;
      return newNode;
    }
    return null;
  }

  remove(idx) {
    if (idx === (this.size - 1)) {
      return this.pop()
    } else if (idx === 0) {
      return this.shift()
    } else if (idx < this.size) {
      let current = this.head;
      let prev = this.head
      let i = 0;
      while (current && (i < idx)) {
        i++;
        prev = current;
        current = current.next;
      }
      prev.next = current.next
      return current;
    } else {
      throw "Index out of range"
    }
  }


  get peek() {
    let current = this.head;
    let list = '';
    while (current) {
      list = list + current.value + (current.next ? ' <--> ' : '');
      current = current.next;
    }
    return list;
  }

}


let linkedList = new DoubleLinkList()

console.log('Push:', linkedList.push(1))
console.log('Push:', linkedList.push(2))
console.log('Push:', linkedList.push(3))
console.log('Peek:', linkedList.peek)

console.log('Pop:', linkedList.pop())
console.log('Peek:', linkedList.peek)

console.log('Unshift:', linkedList.unshift(4))
console.log('Peek:', linkedList.peek)

console.log('Shift:', linkedList.shift())
console.log('Peek:', linkedList.peek)

console.log('Push:', linkedList.push(6))
console.log('Push:', linkedList.push(7))
console.log('Push:', linkedList.push(8))

console.log('Insert:', linkedList.insert(9, 3))
console.log('Insert:', linkedList.insert(10, 0))
console.log('Insert:', linkedList.insert(11, 6))

console.log('Peek:', linkedList.peek)

console.log('Insert:', linkedList.remove(3))
console.log('Peek:', linkedList.peek)