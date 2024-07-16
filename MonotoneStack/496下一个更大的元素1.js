const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const nextGreaterElement = function(nums1, nums2) {
    const res=new Array(nums1.length).fill(-1)
    const st=[]
    const map=new Map()

    nums2.forEach(num=>{
        while(st.length&&num>st[st.length-1])
            map.set(st.pop(),num)
        st.push(num)
    })
    nums1.forEach((num,index)=>{
        if(map.has(num))
            res[index]=map.get(num)
    })
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