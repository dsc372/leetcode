const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const fn=function(nums){
    for(let i=1;i<nums.length;i++){
        if(nums[i]<nums[i-1])return false
    }
    return true
}
const monotoneIncreasingDigits = function(n) {
    let arr=n.toString().split('')
    for(let i=arr.length;i>=2;i--){
        if(fn(arr.slice(0,i)))break
        else{
            arr[i-1]=9
            arr[i-2]--
        }
    }
    return Number(arr.join(''))
}

rl.on("line", function (line) {
    console.log(monotoneIncreasingDigits(line))
    rl.close()
})
rl.on("close", function () {
    process.exit()
})