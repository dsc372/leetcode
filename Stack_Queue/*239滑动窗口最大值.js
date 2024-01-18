const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

class MyQueue{
    constructor(){
      this.que=new Array()  
    }
    push(x){
        while(this.que.length&&this.que[this.que.length-1]<x){
            this.que.pop()
        }
        this.que.push(x)
    }
    pop(x){
        if(this.que.length&&x===this.que[0]){
            this.que.shift()
        }
    }
    front(){
        return this.que[0]
    }
}
const maxSlidingWindow = function(nums, k) {
    const que= new MyQueue()
    const res=new Array()
    for(let i=0;i<k;i++){
        que.push(nums[i])
    }
    res.push(que.front())
    for(let i=k;i<nums.length;i++){
        que.pop(nums[i-k])
        que.push(nums[i])
        res.push(que.front())
    }
    return res
};

const lines =new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        console.log(maxSlidingWindow(lines[0].split(' ').map(Number),parseInt(lines[1])))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit(0)
})