const searchInsert = function(nums, target) {
    let left=0,right=nums.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(nums[mid]<target)left=mid+1
        else right=mid-1
    }
    return left
}

console.log(searchInsert([1, 6, 6, 6, 6, 12], 6))