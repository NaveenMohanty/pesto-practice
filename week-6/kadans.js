// greatest sub array

function kadans(arr) {
  let max_global = Number.NEGATIVE_INFINITY
  let max_local = 0

  for (let ele of arr) {
    max_local += ele
    if (max_global < max_local) {
      max_global = max_local
    }
    if (max_local < 0)
      max_local = 0
  }

  return max_global
}

console.log(kadans([5, -4, -3, 0, -2, -1]))
