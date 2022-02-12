// 栈封装
function Stack() {
  // 栈中的属性
  this.items = []
}
// 相关操作
// 1.元素压栈
Stack.prototype.push = function (element) {
  this.items.push(element)
}
// 2.弹栈
Stack.prototype.pop = function () {
  return this.items.pop()
}
// 3.查看栈顶
Stack.prototype.peek = function () {
  return this.items[this.items.length - 1]
}
// 4.判断是否空
Stack.prototype.isEmpty = function () {
  return this.items.length === 0
}
// 5.返回栈个数
Stack.prototype.size = function () {
  return this.items.length
}
// 6.tostring方法
Stack.prototype.toString = function () {
  var result = ''
  for (var i = 0; i < this.items.length; i++) {
    result += this.items[i]
  }
  return result
}

var s = new Stack()
