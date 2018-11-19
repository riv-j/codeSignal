function matrixElementsSum(matrix) {
  let count = 0
  let index = matrix[0].indexOf(0)
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++){
      if(i <= 0 && matrix[i][j] > 0) {
        count += matrix[i][j]
      } else if (matrix[i][j] > 0 && j != index){
        if(matrix[i - 1][j] > 0){
          count += matrix[i][j]
        }
      }
    }  
  }
  return count        
}           

            // [[1, 1, 1, 0],
            //  [0, 5, 0, 1],
            //  [2, 1, 3, 10]]
matrixElementsSum([[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]])