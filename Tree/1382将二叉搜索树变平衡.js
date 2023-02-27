const traversal = function (root, arr) {
  if (root === null) return
  traversal(root.left, arr)
  arr.push(root.val)
  traversal(root.right, arr)
}
const creatTree=function(arr){
    if(arr.length===0)return null
    let mid=Math.floor(arr.length/2)
    const newRoot=new TreeNode(arr[mid])
    newRoot.left=creatTree(arr.slice(0,mid))
    newRoot.right=creatTree(arr.slice(mid+1))
    return newRoot
}
const balanceBST = function(root) {
    const arr=new Array()
    traversal(root,arr)
    return creatTree(arr)
}
