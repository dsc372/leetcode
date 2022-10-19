const solveSudoku = function (board) {
  function isVaild(row, col, val) {
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === val) return false
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === val) return false
    }
    let startRow=Math.floor(row/3)*3
    let startCol=Math.floor(col/3)*3
    for(let i=startRow;i<startRow+3;i++){
        for(let j=startCol;j<startCol+3;j++){
            if(board[i][j]===val)return false
        }
    }
    return true
  }
  const backTrack=function(){
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]!=='.')continue
            for(let val=1;val<=9;val++){
                if(isVaild(i,j,val.toString(10))){
                    board[i][j]=val.toString(10)
                    if(backTrack())return true
                    board[i][j]='.'
                }
            }
            return false
        }
    }
    return true
  }
  backTrack()
}

