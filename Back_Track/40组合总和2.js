const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let res=new Array()
let path=new Array()
const backTrack=function(candidates,target,index,sum){
    if(sum>target)return
    if(sum===target){
        res.push([...path])
        return
    }
    let i=index
    while(i<candidates.length){
        path.push(candidates[i])
        sum+=candidates[i]
        backTrack(candidates,target,i+1,sum)
        sum-=candidates[i]
        path.pop()
        while(i<candidates.length&&candidates[i]===candidates[i+1])i++
        i++
    }
}
const combinationSum2 = function(candidates, target) {
    res=new Array()
    candidates=candidates.sort()
    backTrack(candidates,target,0,0)
    return res
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        const candidates=lines[0].split(' ').map(Number)
        console.log(combinationSum2(candidates,parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})