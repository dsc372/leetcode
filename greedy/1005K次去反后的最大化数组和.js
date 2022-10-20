const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>{return Math.abs(b)-Math.abs(a)})
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0&&k>0){
            nums[i]=-nums[i]
            k--
        }
    }
    if(k>0&&k%2===1)nums[nums.length-1]*=-1
    return nums.reduce((a,b)=>{
        return a+b
    })
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(largestSumAfterKNegations(lines[0].split(' ').map(Number),parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})