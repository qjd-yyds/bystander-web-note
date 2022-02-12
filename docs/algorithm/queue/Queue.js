// 队列封装
function Queue() {
  this.items = []
}
// 添加 enqueue
Queue.prototype.enqueue = function (element) {
  this.items.push(element)
}
// 删除 dequeue 返回删除的元素
Queue.prototype.dequeue = function () {
  return this.items.shift()
}
// 返回队列第一个元素 front
Queue.prototype.front = function () {
  return this.items[0]
}
// isEmpty 判断是否为空
Queue.prototype.isEmpty = function () {
  return this.items.length === 0
}
// size 返回队列长度
Queue.prototype.size = function () {
  return this.items.length
}
// toString
Queue.prototype.toString = function () {
  var result = ''
  for (var i = 0; i < this.items.length; i++) {
    result += this.items[i]
  }
  return result
}
