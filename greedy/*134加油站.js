const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const canCompleteCircuit = function(gas, cost) {
    let curSum=0,totalSum=0,start=0
    for(let i=0;i<gas.length;i++){
        curSum+=gas[i]-cost[i]
        totalSum+=gas[i]-cost[i]
        if(curSum<0){
            curSum=0
            start=i+1
        }
    }
    return totalSum<0?-1:start
}

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(canCompleteCircuit(lines[0].split(' ').map(Number),lines[1].split(' ').map(Number)))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})