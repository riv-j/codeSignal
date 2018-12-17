function commonCharacterCount(s1, s2) {
  let newObj = {}
  let newObj2 = {}

  let count = 0

  let first = s1.split('')
  let second = s2.split('')

  for (let i = 0; i < first.length; i++) {
    if (newObj[first[i]]) {
      newObj[first[i]]++
    } else {
      newObj[first[i]] = 1
    }
  }


  for (let i = 0; i < second.length; i++) {
    if (newObj2[second[i]]) {
      newObj2[second[i]]++
    } else {
      newObj2[second[i]] = 1
    }
  }

  for (let key in newObj) {
    if (newObj.hasOwnProperty(key) === newObj2.hasOwnProperty(key)) {
      if (newObj[key] < newObj2[key]) {
        count += newObj[key]
      } else {
        count += newObj2[key]
      }
    }
  }

  return count
}