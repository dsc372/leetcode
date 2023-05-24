const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const nextPermutation = function(nums) {
  for(let i=nums.length-1;i>0;i--){
      if(nums[i-1]<nums[i]){
          for(let j=nums.length-1;j>=i;j--){
              if(nums[j]>nums[i-1]){
                  let tmp=nums[j]
                  nums[j]=nums[i-1]
                  nums[i-1]=tmp
                  break
              }
          }
          nums.push(...nums.splice(i,nums.length-i).sort((a,b)=>a-b))
          return
      }
  }
  nums.reverse()
  return
};

rl.on('line',function(line){
  console.log(nextPermutation(line.split(' ').map(Number)))
  rl.close()
})
rl.on('close',function(){
  process.exit()
})