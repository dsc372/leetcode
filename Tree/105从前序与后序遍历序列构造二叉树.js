function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
const buildTree = function (preorder, inorder) {
  if (inorder.length === 0 || preorder.length === 0) return null
  let root = new TreeNode(preorder[0])
  if (preorder.length === 1) return root
  let index
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === root.val) {
      index = i
      break
    }
  }
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1, inorder.length)
  const leftPreorder = preorder.slice(1, index+1)
  const rightPreorder = preorder.slice(index+1, preorder.length)
  root.left = buildTree(leftPreorder, leftInorder)
  root.right = buildTree(rightPreorder, rightInorder)
  return root
}
