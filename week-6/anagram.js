function anagram(a, b) {
  if (a.length != b.length)
    return false

  a = a.toLowerCase()
  b = b.toLowerCase()

  let charMap = new Map()

  for (let ele of a) {
    if (charMap.has(ele))
      charMap.set(ele, charMap.get(ele) + 1)
    else
      charMap.set(ele, 1)
  }

  for (let ele of b) {
    if (charMap.has(ele)) {
      let count = charMap.get(ele)
      if ((count - 1) == 0)
        charMap.delete(ele)
      else
        charMap.set(ele, count - 1)
    } else {
      return false
    }
  }

  return charMap.size == 0
}

console.log(anagram('qwerty', 'ytrewQ'))