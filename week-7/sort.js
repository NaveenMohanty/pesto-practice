/**
 * Bubble Sort(Sinking Sort)
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function BubbleSort(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    let end = arr.length
    let didSwap = false
    while (end > 1) {
      for (let i = 1; i < end; i++) {
        let b = i - 1
        if (arr[b] > arr[i]) {
          let temp = arr[b]
          arr[b] = arr[i]
          arr[i] = temp
          didSwap = true
        }
      }
      if (didSwap)
        end--
      else
        return arr
    }
    return arr
  } else {
    return false
  }
}

// console.log(BubbleSort([1, 2, 3, 9, 8, 7, 6]))


/**
 * Selection Sort(Sinking Sort)
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function SelectionSort(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    let sidx = 0
    while (sidx < arr.length) {
      let minIdx = sidx
      for (let i = sidx + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIdx])
          minIdx = i
      }
      if (minIdx > sidx) {
        let temp = arr[minIdx]
        arr[minIdx] = arr[sidx]
        arr[sidx] = temp
      }
      sidx++
    }
    return arr
  } else {
    return false
  }
}

// console.log(SelectionSort([1, 2, 3, 9, 8, 7, 6]))

/**
 * Insertion Sort
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function InsertionSort(arr) {
  if (arr && Array.isArray(arr) && arr.length) {
    for (let i = 1; i < arr.length; i++) {
      let seleItem = arr[i]
      let backIdx = i - 1
      while (backIdx >= 0 && arr[backIdx] > seleItem) {
        arr[backIdx + 1] = arr[backIdx]
        backIdx--
      }
      arr[backIdx + 1] = seleItem
    }
    return arr
  } else {
    return false
  }
}

// console.log(SelectionSort([2, 1, 3, 9, 8, 7, 6]))


function merg(arr, s, mid, e) {

  let leftArr = []
  for (let i = s; i <= mid; i++)
    leftArr.push(arr[i])

  let rightArr = []
  for (let i = mid + 1; i <= e; i++)
    rightArr.push(arr[i])

  let i = 0, j = 0, k = s

  while ((i < leftArr.length) && (j < rightArr.length)) {
    if (leftArr[i] < rightArr[j]) {
      arr[k] = leftArr[i]
      i++
    } else {
      arr[k] = rightArr[j]
      j++
    }
    k++
  }

  while (i < leftArr.length && k <= e) {
    arr[k] = leftArr[i]
    i++
    k++
  }

  while (j < rightArr.length && k <= e) {
    arr[k] = rightArr[j]
    j++
    k++
  }
  return arr
}


function mergSort(arr, s, e) {
  if (arr && Array.isArray(arr) && arr.length && (s < e)) {
    let mid = s + Math.floor((e - s) / 2)
    mergSort(arr, s, mid)
    mergSort(arr, mid + 1, e)
    return merg(arr, s, mid, e)
  } else {
    return arr
  }
}

// console.log(mergSort([9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 8))