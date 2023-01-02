const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

let res=new Array()
let path=new Array()
const backTrack=function(s,index){
    if(index>=s.length&&path.length===4){
        res.push(path.join('.'))
        return
    }
    for(let i=index;i<s.length;i++){
        if(s[index]==='0'&&i!==index)continue//处理0开头，但不是0的数
        if(parseInt(s.slice(index,i+1))<=255&&parseInt(s.slice(index,i+1))>=0){
            path.push(s.slice(index,i+1))
        }else{
            continue
        }
        backTrack(s,i+1)
        path.pop()
    }
}
const restoreIpAddresses = function(s) {
    res=new Array()
    backTrack(s,0)
    return res
}

rl.on('line',function(line){
    console.log(restoreIpAddresses(line))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})