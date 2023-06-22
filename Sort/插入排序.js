const insertionSort=function(nums){
    let index,cur
    for(let i=1;i<nums.length;i++){
        index=i-1
        cur=nums[i]
        while(index>=0&&nums[index]>cur){
            nums[index+1]=nums[index--]
        }
        nums[index+1]=cur
    }
    return nums
}

console.log(insertionSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37]))