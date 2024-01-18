const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const dailyTemperatures = function(temperatures) {
    const res=new Array(temperatures.length).fill(0)
    const st=[]
    for(let i=0;i<temperatures.length;i++){
        while(st.length&&temperatures[i]>temperatures[st[st.length-1]]){
            res[st[st.length-1]]=i-st[st.length-1]
            st.pop()
        }
        st.push(i)
    }
    return res
}

rl.on('line',function(line){
    console.log(dailyTemperatures(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})