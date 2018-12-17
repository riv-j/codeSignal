function allLongestStrings(inputArray) {
    let longest 
    let newArr = []
    longest = inputArray[0]
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > longest.length){
            longest = inputArray[i]
        }
    }
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length === longest.length){
            newArr.push(inputArray[i])
        }
    }
    console.log(newArr)
}

allLongestStrings(["aba", "aa", "sad", "vcd", "aba"])