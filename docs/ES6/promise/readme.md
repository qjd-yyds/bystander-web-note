# promise

## promiseA+ 规范

- 术语 promise 一个有 then 方法的对象或者函数，行为符合本规范
- thenable 定义 then 方法的对象或者函数
- value 任何 js 的合法值
- exception throw 语句抛出的值
- reason promise 被拒绝原因的值
- 状态
  - pending
  - fulfulled
  - rejected
- then 参数
  - 接受两个参数，分别是 onFulfulled，onRejected
  - onFulfulled 在 promise 完成后被调用，onRejected 在 promise 被拒绝后调用
  - 只能被调用一次
- then 方法的调用可以被多次调用
- then 方法返回值是一个 promise
  - 以 `const promise2 = promise1.then(onFulfilled,onRejected)`为例
  - onFulfilled 不是一个函数，且 promise1 的状态为 fulfilled，value 值同 promise1
  - onRejected 不是一个函数，且 promise1 的状态为 reason 值同 promise1
  - onFulfilled 或者 onRejected 返回 x，进入解析过程
- 解析过程

1. 如果 promise 和 x 指向相同值，抛错
2. 如果 x 是一个 promise
3. 如果 x 是一个对象或者函数
4. 如果 x 不是一个对象也不是一个函数

## API

:::tip 注意
then 和 catch 返回的 promise 不是原来的 promise
:::
| 方法 | 说明 |
| --------------------------- | ---------------------------------------------------------- |
| Promise.resolve(value) | 等同于 new promise((resolve) => {resolve(value)}) |
| Promise.reject(reason) | 等同于 new promise((resolve,reject) => {reject(reason)}) |
| Promise.all([p1,p2]) | 执行数组内的方法，全部是 fulfilled 状态才是 fulfilled 状态 |
| Promise.allSettled([p1,p2]) | 执行数组内的方法，所有 promise 改变状态后返回 |
| Promise.race([p1,p2]) | 返回第一个改变状态的 promise |

## 解决现实中的例子

3 秒以后亮一次红灯，再过 2 秒亮一次绿灯，再过 1 秒亮一次黄灯，用 promise 实现多次交替亮灯

@[code](./light.js)

## 小试牛刀

:::: code-group
::: code-group-item 第 1 题

```js
const promise = Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)
```

:::
::: code-group-item 第 2 题

```js
const bar = 'bar'
```

:::
::::
