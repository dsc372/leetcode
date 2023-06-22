const shellSort=function(nums){
    for(let gap=Math.floor(nums.length/2);gap>0;gap=Math.floor(gap/2)){
        for(let i=gap;i<nums.length;i++){
            let j=i-gap,tmp=nums[i]
            while(j>=0&&nums[j]>tmp){
                nums[j+gap]=nums[j]
                j-=gap
            }
            nums[j+gap]=tmp
        }
    }
    return nums
}

console.log(shellSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37]))