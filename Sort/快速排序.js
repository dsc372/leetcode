const quickSort=function(nums){
    if(nums.length<=1)return nums
    let midVal=nums.splice(Math.floor(nums.length/2), 1)[0]
    const left=new Array()
    const right=new Array()
    for(i of nums)i<midVal?left.push(i):right.push(i)
    return quickSort(left).concat(midVal,quickSort(right))
}

console.log(quickSort([3,5,7,1,4,56,12,78,25,0,9,8,42,37]))