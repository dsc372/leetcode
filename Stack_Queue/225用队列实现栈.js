class MyStack {
  constructor() {
    this.queue1 = new Array()
    this.queue2 = new Array()
  }
  push(x) {
    this.queue1.push(x)
  }
  pop() {
    while (this.queue1.length > 1) this.queue2.push(this.queue1.shift())
    const x = this.queue1.shift()
    while (this.queue2.length > 0) this.queue1.push(this.queue2.shift())
    return x
  }
  top() {
    const x = this.pop()
    this.queue1.push(x)
    return x
  }
  empty() {
    return !this.queue1.length && !this.queue2.length
  }
}
