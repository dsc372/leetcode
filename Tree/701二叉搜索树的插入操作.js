function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val)
  else if (root.val > val && root.left === null) root.left = new TreeNode(val)
  else if (root.val > val && root.left !== null)
    root.left = insertIntoBST(root.left, val)
  else if (root.val < val && root.right === null) root.right = new TreeNode(val)
  else if (root.val < val && root.right !== null)
    root.right = insertIntoBST(root.right, val)
  return root
}
