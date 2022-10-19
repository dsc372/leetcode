class MyQueue {
  constructor() {
    this.stack1 = new Array()
    this.stack2 = new Array()
  }
  push(x) {
    this.stack1.push(x)
  }
  pop() {
    if (this.stack2.length) {
      return this.stack2.pop()
    } else {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2.pop()
    }
  }
  peek() {
    const x = this.pop()
    this.stack2.push(x)
    return x
  }
  empty() {
    return !this.stack1.length && !this.stack2.length
  }
}
