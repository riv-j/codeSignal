function allLongestStrings(inputArray) {
    let longest = []
    let num = 0
    let answer = []
    for(let i = 0; i < inputArray.length; i++){
        longest.push(inputArray[i].length)
    }
    console.log(longest)
    longest.max = (arr) => Math.max.apply(Math, arr)
    console.log(longest)
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length === num){
            answer.push(inputArray[i])
        }
    }
    console.log(answer)
}

allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])