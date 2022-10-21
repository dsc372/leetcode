const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const candy = function(ratings) {
    let nums=[1]
    for(let i=1;i<ratings.length;i++){
        if(ratings[i]>ratings[i-1]){
           nums[i]=nums[i-1]+1 
        }else{
            nums[i]=1
        }
    }
    for(let i=ratings.length-1;i>=0;i--){
        if(ratings[i]>ratings[i+1]&&nums[i]<=nums[i+1]){
           nums[i]=nums[i+1]+1
        }
    }
    return nums.reduce((a,b)=>a+b)
}

rl.on('line',function(line){
    console.log(candy(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})