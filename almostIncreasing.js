function almostIncreasingSequence(sequence) {
  let a = []
  let b = []
  for (let i = 0; i < sequence.length - 1; i++) {
    console.log((i + 1) + ' > ' + i)
    if (sequence[i + 1] > sequence[i]) {
      console.log(sequence[i + 1] + ' > ' + sequence[i])
      a.push(1)
    } else {
      b.push(1)
    }
  }
  if (b.length > 1) {
    console.log(false)
  } else {
    console.log(true)
  }
}

almostIncreasingSequence([40, 60, 80, 10, 20, 30])