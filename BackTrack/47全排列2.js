const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let res = new Array()
let path = new Array()
const backTrack = function (nums,used) {
    if(path.length===nums.length){
        res.push([...path])
        return
    }
    for(let i=0;i<nums.length;i++){
        if(used[i]){
            continue
        }else{
            path.push(nums[i])
            used[i]=true
            backTrack(nums,used)
            used[i]=false
            path.pop()
        }
        while(nums[i]==nums[i+1])i++
    }
}
const permuteUnique = function(nums) {
    res=new Array()
    let used=new Array()
    nums=nums.sort()
    backTrack(nums,used)
    return res
};

rl.on("line", function (line) {
  console.log(permuteUnique(line.split(' ')))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})
