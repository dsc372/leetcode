const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let res = new Array()
let path = new Array()
const backTrack = function (nums, index) {
  if (path.length>1) {
    res.push([...path])
  }
  let set=[]
  for(let i=index;i<nums.length;i++){
    if((path.length>0&&nums[i]<path[path.length-1])||set[nums[i]+100]){
      continue
    }
    set[nums[i]+100]=true
    path.push(nums[i])
    backTrack(nums,i+1)
    path.pop()
  }
}
const findSubsequences = function (nums) {
  res = new Array()
  backTrack(nums, 0)
  return res
}


rl.on("line", function (line) {
  console.log(findSubsequences(line.split(" ")))
  rl.close()
})
rl.on("close", function () {
  process.exit()
})
