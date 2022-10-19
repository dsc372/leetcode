const MyTree= require('./MyTree')
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const invertTree = function(root) {
    if(root===null)return root
    let right=root.left
    root.left=invertTree(root.right)
    root.right=invertTree(right)
    return root
}

rl.on('line',function(line){
    const root=MyTree.createTree(line.split(' '))
    console.log(invertTree(root))
    rl.close()
})
rl.on('close',function(){
    process.exit(0)
})