const readline= require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const lemonadeChange = function(bills) {
    let five=0,ten=0
    for(i of bills){
        if(i===5){
            five++
        }else if(i===10){
            if(five>0){
                five--
                ten++
            }else{
                return false
            }
        }else if(i===20){
            if(five>0&&ten>0){
                five--
                ten--
            }else if(five>=3){
                five-=3
            }else{
                return false
            }
        }
    }
    return true
};

rl.on('line',function(line){
    console.log(lemonadeChange(line.split(' ')))
    rl.close()
})
rl.on('close',function(){
    process.exit()
})