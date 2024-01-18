function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
const buildTree = function (inorder, postorder) {
  if (!inorder.length && !postorder.length) return null
  else if (postorder.length === 1 && inorder.length === 1)
    return new TreeNode(postorder[postorder.length - 1])
  else {
    const index = inorder.indexOf(postorder[postorder.length - 1])
    return new TreeNode(
      postorder[postorder.length - 1],
      buildTree(inorder.slice(0, index), postorder.slice(0, index)),
      buildTree(
        inorder.slice(index + 1),
        postorder.slice(index, postorder.length - 1)
      )
    )
  }
}
