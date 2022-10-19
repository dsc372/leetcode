//candidates中的数字均可使用无限次
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let res=new Array()
let path=new Array()
const backTrack=function(candidates, target,sum,index){
    if(sum>target)return
    if(sum===target){
        res.push([...path])
        return
    }
    if(sum<target){
        for(let i=index;i<candidates.length;i++){
            path.push(candidates[i])
            sum+=candidates[i]
            backTrack(candidates,target,sum,i)
            sum-=candidates[i]
            path.pop()
        }
    }

}
const combinationSum = function(candidates, target) {
    res=new Array()
    backTrack(candidates,target,0,0)
    return res
};


let lines = new Array()
rl.on("line", function (line) {
  lines.push(line)
  if (lines.length === 2) {
    const candidates=lines[0].split(' ').map(Number)
    console.log(combinationSum(candidates,parseInt(lines[1])))
    rl.close()
  }
})
rl.on("close", function () {
  process.exit()
})