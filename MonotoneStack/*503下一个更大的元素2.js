const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const nextGreaterElements = function(nums) {
    const res=new Array(nums.length).fill(-1)
    const st=new Array()
    nums=nums.concat(nums)
    st.push(0)
    for(let i=1;i<nums.length;i++){
        if(nums[i]<=nums[st[st.length-1]]){
            if(i<res.length){
                st.push(i)
            }
        }else{
            while(st.length&&nums[st[st.length-1]]<nums[i]){
                res[st[st.length-1]]=nums[i]
                st.pop()
            }
            if(i<res.length){
                st.push(i)
            }
        }
    }
    return res
}

rl.on('line',function(line){
    console.log(nextGreaterElements(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})