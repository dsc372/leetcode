const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const removeDuplicates = function(s) {
    const st=new Array()
    st.push(s[0])
    for(let i=1;i<s.length;i++){
        if(s[i]===st[st.length-1])st.pop()
        else st.push(s[i])
    }
    return st.join('')
};

rl.on('line',function(line){
    console.log(removeDuplicates(line))
    rl.close()
})
rl.on('close',function(){
    process.exit(0)
})