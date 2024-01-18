function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
const buildTree = function (preorder, inorder) {
  if(preorder.length===0&&inorder.length===0)return null
    if(preorder.length===1&&inorder.length===1)return new TreeNode(preorder[0])
    const midIndex=inorder.indexOf(preorder[0])
    return new TreeNode(preorder[0],buildTree(preorder.slice(1,1+midIndex),inorder.slice(0,midIndex)),buildTree(preorder.slice(1+midIndex),inorder.slice(midIndex+1)))
}
