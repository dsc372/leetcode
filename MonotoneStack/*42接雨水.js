const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const trap = function(height) {
    const st=new Array()
    let sum=0
    st.push(0)
    for(let i=1;i<height.length;i++){
        if(height[i]<height[st[st.length-1]]){
            st.push(i)
        }else if(height[i]===height[st[st.length-1]]){
            st.pop()
            st.push(i)
        }else{
            while(st.length&&height[i]>height[st[st.length-1]]){
                let mid=st[st.length-1]
                st.pop()
                if(st.length){
                    let h=Math.min(height[i],height[st[st.length-1]])-height[mid]
                    let w=i-st[st.length-1]-1
                    sum+=h*w
                }
            }
            st.push(i)
        }
    }
    return sum
}

rl.on('line',function(line){
    console.log(trap(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})