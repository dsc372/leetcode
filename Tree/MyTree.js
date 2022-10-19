class MyTree {
  constructor(val, left, right) {
    this.val = val === undefined ? null : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
  static createTree(arr) {
    if (arr.length === 0) return null
    let index = 0
    const root = new MyTree(arr[index++], null, null)
    const que = new Array()
    que.push(root)
    while (index < arr.length) {
      if (arr[index] !== null && arr[index] !== "#") {
        let left = new MyTree(arr[index++], null, null)
        que[0].left = left
        que.push(left)
      } else {
        index++
      }
      if (index < arr.length && (arr[index] !== null && arr[index] !== "#")) {
        let right = new MyTree(arr[index++], null, null)
        que[0].right = right
        que.push(right)
      } else {
        index++
      }
      que.shift()
    }
    return root
  }
}

module.exports = MyTree
