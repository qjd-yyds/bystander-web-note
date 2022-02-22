# generator 生成器

## 迭代器 iterator

产出一个 next 方法，执行返回结果对象
@[code](./iterator.js)

可迭代协议

- [Symbol.iterator] 属性
- 内置的可迭代对象 string array map set

## generator 函数

- es6 异步编程方案
- 使用 function\*
- 返回值：符合可迭代协议和迭代器协议的生成器对象
- 可以在执行处暂停，又能从暂停处执行 使用 yield 关键字

## 方法

- next(param)
  - 遇到 yield 暂停，将紧跟 yield 表达式的值作为返回对象的 value
  - 没有 yield 一直执行，将 return 的值作为返回对象的 value
  - 没有 return 返回对象的 value 为 undefined
  - next 可以携带一个参数，该参数会被当作**上一个 yield**的返回值
- return(param)

```js
function* createIterator() {
  yield 1
  yield 2
  yield 3
}
let iterator = createIterator()
iterator.next() // {value:1,done:false}
iterator.return() // {value:undefined,done:true}
iterator.next() // {value:undefined,done:true}
```

- throw(param)

## 关键词

- yield 作为返回对象的 value
- yield\* 生成器函数/可迭代对象，委托给其他可迭代方法，相当于交付控制权（复用生成器）

## generator 代码演示

```js
function* createIterator() {
  let first = yield 1
  let second = yield first + 2
  yield second + 3
}
let iterator = createIterator()
iterator.next() // {value:1,done:false}
iterator.next(4) // {value:6,done:false}
iterator.next(5) // {value:8,done:false}
iterator.next() // {value:undefined,done:true}
```

## 协程

- 一个线程存在多个协程，但是只能同时执行一个
- generator 是协程在 es6 的实现
- yield 挂起一个协程，next 唤醒一个协程

## thunk 函数

传名函数，更好的优雅的编写 generator 函数

```js
const fs = require('fs')
const Thunk = function (fn) {
  return function (...args) {
    return function (callback) {
      return fn.call(this, ...args, callback)
    }
  }
}
const readFileThunk = Thunk(fs.readFile)
function run(fn) {
  var gen = fn();
  function next(err,data) {
    var result = gen.next(data);
    if(result.done) return
    result.value(next)
  }
  next()
}
const g = function* () {
  const s1 = yield readFileThunk('../let.md')
  const s2 = yield readFileThunk('../rest.md')
  const s3 = yield readFileThunk('../symbol.md')
}
run(g)
```
