const readline=require('readline')
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const isVaild=function(row,col,chessBoard,n){
    for(let i=0;i<row;i++){
        if(chessBoard[i][col]==='Q')return false
    }
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(chessBoard[i][j]==='Q')return false
    }
    for(let i=row-1,j=col+1;i>=0&&j<n;i--,j++){
        if(chessBoard[i][j]==='Q')return false
    }
    return true
}
const totalNQueens = function(n) {
    let res=0
    const backTrack=function(n,row,chessBoard){
        if(n===row){
            res++
            return
        }
        for(let col=0;col<n;col++){
            if(isVaild(row,col,chessBoard,n)){
                chessBoard[row][col]='Q'
                backTrack(n,row+1,chessBoard)
                chessBoard[row][col]='.'
            }
        }
    }
    const chessBoard=new Array(n).fill([]).map(()=>new Array(n).fill('.'))
    backTrack(n,0,chessBoard)
    return res
}

rl.on('line',function(line){
    console.log(totalNQueens(parseInt(line)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})