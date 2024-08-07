const lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // if(left!==null&&right!==null)return root
  // else if(left!==null&&right===null)return left
  // else if(left===null&&right!==null)return right
  // else return null
  return left && right ? root : left || right
}
