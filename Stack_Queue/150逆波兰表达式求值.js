const readline =require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//可用map优化
const evalRPN = function(tokens) {
    const st=new Array()
    for(i of tokens){
        if(i==='+'||i==='-'||i==='*'||i==='/'){
            let num1=st.pop()
            let num2=st.pop()
            if(i==='+'){
                st.push(parseInt(num1)+parseInt(num2))
            }else if(i==='-'){
                st.push(parseInt(num2)-parseInt(num1))
            }else if(i==='*'){
                st.push(parseInt(num1)*parseInt(num2))
            }else{
                st.push(parseInt(num2/num1))
            }
        }else{
            st.push(i)
        }
    }
    return st.pop()
};

rl.on('line',function(line){
    console.log(evalRPN(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit(0)
})