function gcd(a, b) {
  if (a > 0 && b > 0) {
    let small = Math.min(a, b)
    let big = Math.max(a, b)
    return gcd(small, big % small)
  } else {
    if (a > 0)
      return a
    else
      return b
  }
}

console.log(gcd(0, 100))