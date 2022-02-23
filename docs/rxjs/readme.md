# Rxjs(reactiveX)

## 介绍

- reactiveX 是 Reactive Extensions 的缩写，**响应式编程**，一种编程模型
- Rxjs 是 JavaScript 的实现
- 使用可观察序列(Observable) 数据和时间的一个抽象 来编写异步和基于事件的程序
- 优点
  - 函数式风格
  - 轻松并发
  - 简化代码
  - 异步错误处理

## 用法

`npm install rxjs`
订阅 document 的鼠标移动

```js
import * as Rx from 'rxjs'
const docele = document.documentElement
const mousemove$ = Rx.Observable.fromEvent(docele, 'mousemove')
mousemove$.subscribe(event => {
  docele.innerHTML = `${event.clientX},${event.clientY}`
})
```

创建 observable

```js
import * as Rx from 'rxjs'
const observable = Rx.Observable.create(function (observer) {
  try {
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.complete()
    observer.next(4)
  } catch {}
})
observable.subscribe(x => {
  console.log(x) // 1,2,3
})
```

取消 observable
`unsubscribe`
Observable

- 创建
- 订阅
- 执行
- 清理

## 使用场景

observable 成为 ECMAScript 提案

- 可以取消
- 可以发送多个值
- 学习曲线陡峭
- 有工具函数对结果处理

聊天室优化，支持 3 万人直播

1. 使用定时器，每隔 1s 刷新
2. 维护一个队列，支持终止等操作

```js
// 每隔一秒更新数据
Rx.Observable.fromEvent(chatRoomIns, 'message')
  .bufferTime(1000)
  .subscribe(message => {
    console.log(message)
  })
// 每隔5ms出来一个数据，1s后处理
Rx.Observable.interval(5)
  .bufferTime(1000)
  .subscribe(message => {
    console.log(message)
  })
```
