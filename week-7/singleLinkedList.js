function Node(value, next) {
  this.value = value ? value : null;
  this.next = next ? next : null;
}

class singleLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  push(value) {
    let newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
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
      let current = this.head;
      this.size--;
      if (current) {
        let prevPrev = null
        let prev = null;
        while (current) {
          prevPrev = prev;
          prev = current;
          current = current.next;
        }
        if (prevPrev) {
          this.tail = prevPrev;
          this.tail.next = null;
        } else {
          this.tail = null;
          this.head = null;
        }
        return prev;
      } else {
        this.tail = null;
        this.head = null;
        return current;
      }
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

  reverse() {
    if (this.size === 1) {
      return this.head
    } else if (this.size) {
      let prev = this.head
      let current = this.head.next
      this.head.next = null
      this.tail = this.head
      while (current) {
        let temp = prev
        prev = current
        if (!current.next)
          this.head = current
        current = current.next
        prev.next = temp
      }
      return this.head
    } else {
      throw "Empty Linked List."
    }
  }

  get peek() {
    let current = this.head;
    let list = '';
    while (current) {
      list = list + current.value + (current.next ? ' -> ' : '');
      current = current.next;
    }
    return list;
  }

}

// let linkedList = new singleLinkList()

// console.log('push:', linkedList.push(1))
// console.log('push:', linkedList.push(2))
// console.log('push:', linkedList.push(3))
// console.log(linkedList.peek)

// console.log('pop:', linkedList.pop())
// console.log(linkedList.peek)

// console.log('push:', linkedList.push(4))
// console.log('push:', linkedList.push(5))
// console.log('push:', linkedList.push(6))
// console.log(linkedList.peek)

// console.log('unshift:', linkedList.unshift(7))
// console.log(linkedList.peek)

// console.log('shift:', linkedList.shift())
// console.log(linkedList.peek)

// console.log('insert:', linkedList.insert(8, 4))
// console.log(linkedList.peek)

// console.log('remove:', linkedList.remove(3))
// console.log(linkedList.peek)

// console.log('remove:', linkedList.remove(0))
// console.log(linkedList.peek)

// console.log('remove:', linkedList.remove(4))
// console.log(linkedList.peek)


/* Add to number as list */

function AddList(list1, list2) {
  let addList = new singleLinkList()
  list1.reverse()
  list2.reverse()
  let l1Head = list1.head
  let l2Head = list2.head
  let carry = 0
  while (l1Head && l2Head) {
    let add = l1Head.value + l2Head.value + carry
    if (add > 9) {
      let addStr = String(add)
      carry = Number(addStr[0])
      add = Number(addStr.substring(1, addStr.length))
    } else {
      carry = 0
    }
    l1Head = l1Head.next
    l2Head = l2Head.next
    addList.push(add)
  }

  while (l1Head) {
    let add = l1Head.value + carry
    if (add > 9) {
      let addStr = String(add)
      carry = Number(addStr[0])
      add = Number(addStr.substring(1, addStr.length))
    } else {
      carry = 0
    }
    l1Head = l1Head.next
    addList.push(add)
  }

  while (l2Head) {
    let add = l2Head.value + carry
    if (add > 9) {
      let addStr = String(add)
      carry = Number(addStr[0])
      add = Number(addStr.substring(1, addStr.length))
    } else {
      carry = 0
    }
    l2Head = l2Head.next
    addList.push(add)
  }

  if (carry)
    addList.push(carry)
  addList.reverse()

  return addList;
}


// let list1 = new singleLinkList()
// let list2 = new singleLinkList()

// list1.push(1)
// list1.push(7)
// list1.push(3)
// list1.push(4)
// list1.push(5)

// list2.push(6)
// list2.push(7)
// list2.push(8)
// list2.push(9)

// console.log(list1.peek)
// console.log(list2.peek)

// let addedList = AddList(list1, list2)

// console.log(addedList.peek)


/* Find Middle Node of Single linked list */


function FindMiddleNode(list) {
  let slow = list.head
  let fast = list.head
  while (fast) {
    let i = 0
    while (fast && (i < 2)) {
      fast = fast.next
      i++
    }
    if (fast)
      slow = slow.next
  }
  slow.next = null
  return slow
}

// let list = new singleLinkList()

// list.push(1)
// list.push(7)
// list.push(3)
// list.push(4)
// list.push(5)

// console.log(list.peek)
// console.log(FindMiddleNode(list))

/* Find Middle Node of Single linked list */


function FindLastNthNode(list, n) {
  let slow = list.head
  let fast = list.head
  let i = 0
  while (fast && (i < n)) {
    fast = fast.next
    i++
  }
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = null
  return slow
}

// let list = new singleLinkList()

// list.push(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// list.push(7)
// list.push(8)


// console.log(list.peek)
// console.log(FindLastNthNode(list, 4))


/* Detect loop in Linked list */


function DetectLoop(list) {
  let slow = list.head
  let fast = list.head
  while (fast) {
    let i = 0
    while (fast && (i < 2)) {
      fast = fast.next
      i++
    }
    if (fast === slow)
      return true
    if (fast)
      slow = slow.next
  }
  return false
}

let list = new singleLinkList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)

console.log(list.peek)

// Creating loop
list.tail.next = list.head.next.next.next

console.log(DetectLoop(list))