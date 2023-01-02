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
    backTrack(nums,index+1)
}
const subsets = function(nums) {
    res=new Array()
    backTrack(nums,0)
    return res
};

rl.on('line',function(line){
    console.log(subsets(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})