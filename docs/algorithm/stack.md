# 栈（Stack）

## 认识栈结构

这是受限的线性结构，后进先出（LIFO）

- 其限制是仅允许在表的一端进行插入和删除操作。这一端称为**栈顶**，另外一端称为**栈底**
- LIFO（last in fist out）表示后进入的元素，先弹出栈空间，像托盘一样，最后放上去的托盘往往最先拿出去使用
- 向一个栈插入元素称为**压栈，入栈，进栈**
- 从一个栈删除元素称为**出栈，退栈**

![栈图解](./images/Stack.png)
## js 中的函数调用栈

- A 调用了 B B 调用了 C C 调用了 D
- A 压入栈，A 没有执行完，所以不会弹栈
- A 调用了 B，B 被压入栈，这个时候 B 在栈顶，A 在栈底
- 这个时候如果 B 执行完了，会弹栈，但是他调用了 C
- C 压栈，并且在栈顶，而 C 调用了 D，D 被压入栈顶
- 所以当前执行栈是 栈底 A => B => C => 栈顶 D
- D 执行完，C B A 依次弹栈
- 所以我们有函数调用栈的称呼，来源于内部机制

## 小试牛刀

有一组数 6,5,4,3,2,1 顺序入栈，下列哪个不是合法出栈序列
:::tip
只是按顺序入栈，不是一次性全部顺序入栈，可以边入栈边出栈
:::

- A. 5=>4=>3=>6=>1=>2
- B. 4=>5=>3=>2=>1=>6
- C. 3=>4=>6=>5=>2=>1
- D. 2=>3=>4=>1=>5=>6
## 栈的常见方法
+ push(element) 压栈，往栈中添加元素
+ pop() 弹栈,将栈顶的元素删除，返回改元素
+ peek() 查看当前栈顶元素
+ isEmpty() 判断是否空
+ size() 返回栈大小
+ toString() 返回栈内容
## 栈结构实现

```js
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
```

## 十进制转二进制

### 如何转换十进制 100 成二进制

要把十进制转成二进制，需要将十进制和 2 整除。直到结果为 0

- 100 / 2 余数 0
- 50 / 2 余数 0
- 25 / 2 余数 1
- 12 / 2 余数 0
- 6 / 2 余数 0
- 3 / 2 余数 1
- 1 / 2 余数 1
- 最终结果 1100100

### 使用栈封装

```js
function dec2bin(decNumer) {
  var stack = new Stack()
  while (decNumer > 0) {
    // 获取他的余数，压栈
    stack.push(decNumer % 2)
    decNumer = Math.floor(decNumer / 2)
  }
  let result = ''
  // 依次弹栈，获取到值为二进制
  while (stack.size()) {
    result += stack.pop()
  }
  var prevNum = (4 - (result.length % 4)) % 4
  var prevString = ''
  // 前面补0
  for (var i = 0; i < prevNum; i++) {
    prevString += '0'
  }

  return prevString + result
}
```
