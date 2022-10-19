const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const generateMatrix = function(n) {
    let res=new Array(n)
    for(let i=0;i<n;i++){
        res[i]=new Array(n);
    }
    let count=1,row=0,col=0
    for(let i=n;i>=1;i-=2){
        if(i===1){
            res[row][col]=count
        }else{
            for(let j=i-1;j>0;j--){
                res[row][col++]=count++
            }
            for(let j=i-1;j>0;j--){
                res[row++][col]=count++
            }
            for(let j=i-1;j>0;j--){
                res[row][col--]=count++
            }
            for(let j=i-1;j>0;j--){
                res[row--][col]=count++
            }
            row++
            col++
        }
    }
    return res
}
rl.on('line',function(line){
    console.log(generateMatrix(parseInt(line)))
    rl.close()
})
rl.on('close',function(){
    process.exit(0)
})