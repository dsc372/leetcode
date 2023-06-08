const minCameraCover = function(root) {
    let res=0
    const traversal=function(root){
        //三种状态记录：0 无覆盖 1 有监控 2 有覆盖
        if(root===null)return 2
        let left=traversal(root.left)
        let right=traversal(root.right)
        if(left===2&&right===2)return 0
        if(left===0||right===0){
            res++
            return 1
        }
        if(left===1||right===1){
            return 2
        }
    }
    if(traversal(root)===0)res++
    return res
};