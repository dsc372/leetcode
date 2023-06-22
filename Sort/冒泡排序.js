const bubbleSort=function(nums){
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums
}

console.log(bubbleSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37]))