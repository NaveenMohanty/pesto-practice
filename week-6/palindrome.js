function palindrome(str) {
  let s = 0
  let e = (str.length - 1)
  str = str.toLowerCase()
  while (s < e) {
    if (str[s] === str[e]) {
      s++
      e--
    } else {
      return false
    }
  }
  return true
}

console.log(palindrome('assa'))