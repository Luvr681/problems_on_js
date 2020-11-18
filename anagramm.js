const buildCharObject = str => {
  const charObj = {}
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1
  }
  return charObj
}

const anagram = (strA, strB) => {
  const aCharObj = buildCharObject(strA)
  const bCharObj = buildCharObject(strB)

  if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
    return false
  }
  for (let char in aCharObj) {
    if (aCharObj[char] !== bCharObj[char]) {
      return false
    }
  }

  return true
}

console.log(anagram('finder', 'friend'))
console.log(anagram('hello', 'hella'))
