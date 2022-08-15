function Node(value, left, right) {
  this.value = value ? value : null;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(value, root = this.root) {
    if (this.root === null) {
      let newNode = new Node(value)
      this.root = newNode;
      return;
    } else if (root.value > value) {
      if (!root.left) {
        let newNode = new Node(value)
        root.left = newNode
        return;
      } else {
        this.insert(value, root.left)
      }
    } else if (root.value < value) {
      if (!root.right) {
        let newNode = new Node(value)
        root.right = newNode
        return;
      } else {
        this.insert(value, root.right)
      }
    } else {
      throw "This value already Inserted"
    }
  }

  find(value, root = this.root) {
    if (root) {
      if (root.value === value) {
        return true
      } else if (root.value > value) {
        return this.find(value, root.left)
      } else if (root.value < value) {
        return this.find(value, root.right)
      }
    } else {
      return false
    }
  }
}


let biTree = new BinaryTree()

biTree.insert(10)
biTree.insert(5)
biTree.insert(50)
biTree.insert(20)
biTree.insert(80)
biTree.insert(70)
biTree.insert(100)
biTree.insert(60)

// console.log(biTree.find(8))

// console.log(JSON.stringify(biTree.root))


// Tree Traversal

function Inorder(root, arr = []) {
  if (root === null) return arr;

  Inorder(root.left, arr)
  arr.push(root.value)
  Inorder(root.right, arr)
  return arr
}

// console.log(Inorder(biTree.root))

function PreOrder(root, arr = []) {
  if (root === null) return arr;

  arr.push(root.value)
  PreOrder(root.left, arr)
  PreOrder(root.right, arr)
  return arr
}

// console.log(PreOrder(biTree.root))

function PostOrder(root, arr = []) {
  if (root === null) return arr;

  PostOrder(root.left, arr)
  PostOrder(root.right, arr)
  arr.push(root.value)
  return arr
}

// console.log(PostOrder(biTree.root))

function LevelOrderTraversal(root) {

  // this is O(n^2) approch for tree traversal
  function nSquareApproch(root) {
    function levelOrder(root, level, arr = []) {
      if (root === null)
        return arr;
      else if (level === 1)
        arr.push(root.value);
      else if (level > 1) {
        levelOrder(root.left, level - 1, arr)
        levelOrder(root.right, level - 1, arr)
      }
      return arr;
    };
    let arr = []
    for (let i = 1; i <= 5; i++) {
      let temp = levelOrder(root, i)
      arr = [...arr, ...temp]
    }
    return arr
  }
  // return nSquareApproch(root);

  // This is O(n) approch for levelorder traversal

  function levelOrderLinear(root) {
    if (!root)
      return root;

    let queue = []
    queue.push(root)
    let arr = []

    while (queue.length) {
      let top = queue.shift()
      if (top.left) queue.push(top.left)
      if (top.right) queue.push(top.right)
      arr.push(top.value)
    }
    return arr;
  }

  return levelOrderLinear(root);
}

// console.log(LevelOrderTraversal(biTree.root))

// Delete node from BST

const findMin = (root) => {
  let min = root.value
  while (root.left !== null) {
    min = root.left.value;
    root = root.left;
  }
  return min;
}

function DeleteNode(root, key) {
  if (root === null)
    return root;

  if (key < root.value) {
    root.left = DeleteNode(root.left, key);
  } else if (key > root.value) {
    root.right = DeleteNode(root.right, key);
  } else {
    if (root.left === null)
      return root.right;
    else if (root.right === null)
      return root.left;
    let min = findMin(root.right);
    root.value = min;
    root.right = DeleteNode(root.right, min);
  }
  return root;
}

// console.log(JSON.stringify(DeleteNode(biTree.root,50)))

// Construct Tree from traversal array

// From Level Order traversal to a tree
function treeFromlevelOder(arr) {
  let attachNode = (root, value) => {
    if (root === null)
      root = new Node(value)
    else if (value < root.value)
      root.left = attachNode(root.left, value)
    else
      root.right = attachNode(root.right, value)
    return root;
  }
  let root = null
  for (let ele of arr)
    root = attachNode(root, ele)
  return root;
}

// let arr = LevelOrderTraversal(biTree.root)
// console.log(arr)
// console.log(JSON.stringify(treeFromlevelOder(arr)))

// From Inorder traversal to a tree--> This will give us balanced BST

function treeFromInorder(arr, s, e) {
  if (s > e)
    return null

  let mid = s + Math.floor((e - s) / 2)
  let newNode = new Node(arr[mid])
  if (s === e)
    return newNode;

  newNode.left = treeFromInorder(arr, s, mid - 1)
  newNode.right = treeFromInorder(arr, mid + 1, e)
  return newNode;
}

// let arr = Inorder(biTree.root)
// console.log(arr)
// console.log(JSON.stringify(treeFromInorder(arr, 0, (arr.length - 1))))

// Construct BT from Postfix Expression

function TreeFromPostfix(exprs) {

  let stack = []
  let op = ['+', '-', '*', '/']

  for (let char of exprs) {
    if (op.includes(char)) {
      let right = stack.pop()
      let left = stack.pop()
      let newNode = new Node(char)
      if (!(right instanceof Node))
        right = new Node(right)
      if (!(left instanceof Node))
        left = new Node(left)
      newNode.right = right
      newNode.left = left
      stack.push(newNode)
    } else {
      stack.push(char)
    }
  }

  return stack.pop()
}

console.log(JSON.stringify(TreeFromPostfix("4572+-*")))






