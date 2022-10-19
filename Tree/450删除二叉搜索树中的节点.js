const MyTree=require('./MyTree')
const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const deleteNode = function(root, key) {
    if(root===null)return null
    if(root.val===key){
        if(root.left===null)return root.right
        if(root.right===null)return root.left
        else{
            let node=root.right
            while(node.left!==null)node=node.left
            node.left=root.left
            return root.right
        }
    }
    if(root.val>key)root.left=deleteNode(root.left,key)
    if(root.val<key)root.right=deleteNode(root.right,key)
    return root
};

const lines=new Array()
rl.on('line',function(line){
    lines.push(line)
    if(lines.length===2){
        const root =MyTree.createTree(lines[0].split(' '))
        console.log(deleteNode(root,lines[1]))
        rl.close()
    }
})
rl.on('close',function(){
    process.exit()
})