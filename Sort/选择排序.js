const selectSort=function(nums){
	let index;
	for(let i=0;i<nums.length-1;i++){
		index=i;
		for(var j=i+1;j<nums.length;j++)index=nums[index]>nums[j]?j:index
		if(index!=i){
		    const temp =nums[i];
		    nums[i]=nums[index];
		    nums[index]=temp;
	    }
	}
	return nums;
}

console.log(selectSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37]))