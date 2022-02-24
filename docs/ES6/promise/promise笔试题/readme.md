# promise笔试题

## 解释下浏览器的 eventLoop 的机制

对于这个问题，需要从下面几个方面开始回答

1. 解释 eventLoop 是什么，它解决了什么问题
2. 解释实现机制，**线程和任务队列**，任务队列如何更新；然后解释微任务和宏任务的执行，把**loop 的循环**解释出来

## 考察执行顺序

@[code](./1.js)

## 考察 then 的参数不是函数的情况

@[code](./2.js)

## resolve 一个不规范的 thenable 情况

@[code](./3.js)

## 一个规范 thenable 的情况

@[code](./4.js)

## promise 的错误处理

@[code](./5.js)

## 使用 promise 实现顺序加载图片

使用 promise 实现顺序加载图片如果有图片加载失败，在图片位置显示加载失败的提示
@[code](./6.html)
