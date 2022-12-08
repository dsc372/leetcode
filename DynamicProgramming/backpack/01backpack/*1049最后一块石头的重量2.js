const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const lastStoneWeightII = function(stones) {
    stones.sort((a,b)=>{
       return a-b
    })
    let sum=stones.reduce((start,current)=>{
        return start+current
    },0)
    let target=Math.floor(sum/2)
    const dp=new Array(target+1).fill(0)
    for(let i=0;i<stones.length;i++){
        for(let j=target;j>=stones[i];j--){
            dp[j]=Math.max(dp[j],dp[j-stones[i]]+stones[i])
        }
    }
    return sum-2*dp[target]
};

rl.on('line',function(line){
    console.log(lastStoneWeightII(line.split(' ').map(Number)))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})