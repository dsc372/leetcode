const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const largestRectangleArea = function(heights) {
    const st=new Array()
    heights.unshift(0)
    heights.push(0)
    st.push(0)
    let res=0
    for(let i=1;i<=heights.length;i++){
        if(heights[i]>=heights[st[st.length-1]]){
            st.push(i)
        }else{
            while(heights[i]<heights[st[st.length-1]]){
                let mid=st[st.length-1]
                st.pop()
                let w=i-st[st.length-1]-1
                let h=heights[mid]
                res=Math.max(res,w*h)
            }
            st.push(i)
        }
    }
    return res
}

rl.on('line',function(line){
    console.log(largestRectangleArea(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})