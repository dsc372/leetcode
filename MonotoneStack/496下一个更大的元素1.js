const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const nextGreaterElement = function(nums1, nums2) {
    const res=new Array(nums1.length).fill(-1)
    for(let i=0;i<nums1.length;i++){
        let j=nums2.indexOf(nums1[i])
        while(j<nums2.length){
            if(nums1[i]>=nums2[j]){
                j++
            }else{
                res[i]=nums2[j]
                break
            }
        }
    }
    return res
}

const lines = new Array()
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 2) {
        console.log(nextGreaterElement(lines[0].split(' ').map(Number), lines[1].split(' ').map(Number)))
        rl.close()
    }
})
rl.on('close', function () {
    process.exit(0)
})