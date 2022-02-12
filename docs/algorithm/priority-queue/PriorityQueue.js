function PriorityQueue() {
  // 子元素构造函数
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }
  this.items = []
  // 插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority)
    // 判断队列是否空
    if (this.items.length === 0) {
      this.items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < this.items.length; i++) {
        // 如果优先级小于，添加到当前元素之前
        if (queueElement.priority < this.items[i].priority) {
          this.items.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      // 没有找到优先级比自己高的，在尾部添加
      if (!added) {
        this.items.push(queueElement)
      }
    }
  }
}