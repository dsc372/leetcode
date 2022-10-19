function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
const buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null
  let root = new TreeNode(postorder[postorder.length - 1])
  if (postorder.length === 1) return root
  let index
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === root.val) {
      index = i
      break
    }
  }
  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1, inorder.length)
  const leftPostorder = postorder.slice(0, index)
  const rightPostorder = postorder.slice(index, postorder.length - 1)
  root.left = buildTree(leftInorder, leftPostorder)
  root.right = buildTree(rightInorder, rightPostorder)
  return root
}
