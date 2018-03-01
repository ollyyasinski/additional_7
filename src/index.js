module.exports = 
function solveSudoku(matrix) {
  var output = true;
  function isSudokuSolved(matrix){
    for (var row = 0; row < 9; row++){
      for (var col = 0; col < 9; col++){
        if (matrix[row][col] === 0){
          for(var number = 1; number <= 9; number++){
            if (isValid(row, col, number) === true){
            matrix[row][col] = number;
            if(isSudokuSolved(matrix)){
              return true;
            }
            else{
              matrix[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
  
  //check that number present in row
  function presentInRow(row, number){
    for (var i = 0; i <  9; i++){
      if(matrix[row][i] === number){
        return true;
      }
    }
    return false;    
  }
  
  //check that number present in column
  function presentInCol(col, number){
    for (var i = 0; i <  9; i++){
      if(matrix[i][col] === number){
        return true;
      }
    }
    return false;    
  }

  //check that number present in subgrid
  function presentInGrid(row, col, number){
    var subRow = row - row % 3;
    var subCol = col - col % 3;
    for (var i = subRow; i < subRow + 3; i++){
      for (var j = subCol; j < subCol + 3; j++){
        if (matrix[i][j] === number){
          return true;
        }
      }
    }
    return false;
  }

  function isValid(row, col, number){
    if (presentInRow(row, number) || presentInCol(col, number) || presentInGrid(row, col, number)) {
      return false;
    }
    return true;
  }
  isSudokuSolved(matrix);
  return matrix;
}
