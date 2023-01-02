const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let res=new Array()
let path=new Array()
const backTrack=function(nums,index){
    if(index>=nums.length){
        res.push([...path])
        return
    }
    path.push(nums[index])
    backTrack(nums,index+1)
    path.pop()
    while(nums[index+1]===nums[index])index++
    backTrack(nums,index+1)
}
const subsetsWithDup = function(nums) {
    res=new Array()
    nums=nums.sort()
    backTrack(nums,0)
    return res
}

rl.on('line',function(line){
    console.log(subsetsWithDup(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})