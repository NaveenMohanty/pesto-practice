/**
 * Linear Search
 * Time complexity: O(n)
 * Space Complexity: O(1)
 */

function LinearSearch(arr, num) {
  if (arr && Array.isArray(arr) && arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num)
        return true
    }
    return false
  } else {
    return false
  }
}

// console.log(LinearSearch([2, 23, 4, 56, 1, 9, 21], 9))


/**
 * Binary Search
 * Time complexity: O(log n))
 * Space Complexity: O(1)
 * !Imp: array should be sorted
 */

function BinarySearch(arr, num) {
  if (arr && Array.isArray(arr) && arr.length) {
    let s = 0
    let e = arr.length - 1
    while ((s <= e) && (s >= 0) && (e < arr.length)) {
      let mid = s + Math.floor((e - s) / 2)
      if (arr[mid] == num)
        return mid + 1
      else if (arr[mid] > num) {
        e = mid - 1
      } else {
        s = mid + 1
      }
    }
    return false
  } else {
    return false
  }
}

// Recursive

function BinarySearchRec(arr, num) {
  if (arr && Array.isArray(arr) && arr.length) {
    let s = 0
    let e = arr.length - 1
    function recur(s, e) {
      if ((s <= e) && (s >= 0) && (e < arr.length)) {
        let mid = s + Math.floor((e - s) / 2)
        if (arr[mid] == num)
          return mid + 1
        else if (arr[mid] > num) {
          return recur(s, mid - 1)
        } else {
          return recur(mid + 1, e)
        }
      } else {
        return false
      }
    }
    let result = recur(s, e)
    return result ? result : false
  } else {
    return false
  }
}

console.log(BinarySearchRec([11, 22, 33, 44, 55, 66, 77, 80], 22))