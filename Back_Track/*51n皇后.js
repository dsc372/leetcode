const readline=require('readline')
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const solveNQueens = function(n) {
    let res=new Array()
    let chessBoard=new Array(n).fill([]).map(()=>new Array(n).fill('.'))
    const transformChessBoard=function(chessBoard){
        let temp=new Array()
        chessBoard.forEach(row=>{
            let rowStr=''
            row.forEach(item=>{
                rowStr+=item
            })
            temp.push(rowStr)
        })
        return temp
    }
    const isVaild=function(row,col,n){
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
    const backTrack=function(n,row){
        if(row===n){
            res.push(transformChessBoard(chessBoard))
            return
        }
        for(let col=0;col<n;col++){
            if(isVaild(row,col,n)){
                chessBoard[row][col]='Q'
                backTrack(n,row+1)
                chessBoard[row][col]='.'
            }
        }
    }
    res=new Array()
    backTrack(n,0)
    return res
};

rl.on('line',function(line){
    console.log(solveNQueens(parseInt(line)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})