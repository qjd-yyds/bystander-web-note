// 1.了解promiseA+规范
// 2.根据规范实现
// 3.测试
const STATUS = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled'
}
// 改变promise状态为fulfilled状态
function fulfilledPromise(promise, value) {
  // 只能从pending状态转换
  if (promise.status !== STATUS.PENDING) {
    return
  }
  // 改变promise的状态
  promise.status = STATUS.FULFILLED
  // 修改value值
  promise.value = value
  // 执行promise回调函数fulfilled队列
  runCbs(promise.fulfilledCbs, value)
}
// 改变promise状态为reject状态
function rejectedPromise(promise, reason) {
  // 只能从pending状态转换
  if (promise.status !== STATUS.PENDING) {
    return
  }
  promise.status = STATUS.REJECTED
  // 修改reason
  promise.reason = reason
  // 执行promise回调函数rejected队列
  runCbs(promise.rejectedCbs, reason)
}
// 判断是不是一个promise
function isPromise(p) {
  return p instanceof MyPromise
}
// 决议x过程
function resolvePromise(promise, x) {
  // 1.promise和x指向相同的值 报错
  if (promise === x) {
    rejectedPromise(promise, new TypeError('相同的值'))
  }
  // 2.x是一个promise
  if (isPromise(x)) {
    // 三种状态
    if (x.status === STATUS.FULFILLED) {
      fulfilledPromise(promise, x.value)
    }
    if (x.status === STATUS.REJECTED) {
      rejectedPromise(promise, x.reason)
    }
    if (x.status === STATUS.PENDING) {
      x.then(
        () => {
          fulfilledPromise(promise, x.value)
        },
        () => {
          rejectedPromise(promise, x.reason)
        }
      )
    }
  }
  // 3.x是一个对象或者函数
  if (isObject(x) || isFunction(x)) {
    let then
    let called = false
    try {
      // 1.将x.then赋值给then，
      then = x.then
    } catch (error) {
      // 如果赋值出现报错，这个异常作为promise的拒绝
      rejectedPromise(promise, error)
    }
    if (isFunction(then)) {
      // 以x为this调用这个方法,y为参数执行resolvePromise
      // 以x为this调用这个方法,r为参数执行rejectedPromise
      try {
        then.call(
          x,
          y => {
            // 只能被调用一次
            if (called) return
            called = true
            resolvePromise(promise, y)
          },
          r => {
            if (called) return
            called = true
            rejectedPromise(promise, r)
          }
        )
      } catch (error) {
        if (called) return
        called = true
        rejectedPromise(promise, error)
      }
    } else {
      // 不是一个函数，以x为值的fulfilled
      fulfilledPromise(promise, x)
    }
  } else {
    // 4.x不是一个对象也不是一个函数，以x为值的fulfilled
    fulfilledPromise(promise, x)
  }
}
// 判断是否是函数
function isFunction(fn) {
  return typeof fn === 'function'
}
// 判断是不是一个对象
function isObject(obj) {
  return (
    Object.prototype.toString.call(obj).toLocaleLowerCase() ===
    '[object object]'
  )
}
// 执行回调队列
function runCbs(cbs, value) {
  cbs.forEach(cb => cb(value))
}
class MyPromise {
  constructor(fn) {
    this.status = STATUS.PENDING
    this.value = undefined
    this.reason = undefined
    this.fulfilledCbs = [] // fulfilled的回调函数队列
    this.rejectedCbs = [] // rejected的回调函数队列
    fn(
      value => {
        resolvePromise(this, value)
      },
      reason => {
        rejectedPromise(this, reason)
      }
    )
  }
  // 两个参数 onfulfilled和onrejected
  then(onfulfilled, onrejected) {
    // 当前的promise
    const promise1 = this
    // 需要返回的promise
    const promise2 = new MyPromise(() => {})
    // 1.promise1 是fulfilled状态
    if (promise1.status === STATUS.FULFILLED) {
      // onfulfilled参数不是一个函数,忽略
      if (!isFunction(onfulfilled)) {
        return promise1
      }
      // 模拟异步任务
      queueMicrotask(() => {
        try {
          // 参数是上一个promise的value
          const x = onfulfilled(promise1.value)
          // 决议这个promise2,通过x决定promise返回的值
          resolvePromise(promise2, x)
        } catch (error) {
          rejectedPromise(promise2, error)
        }
      })
    }
    // 2.promise1 是rejected状态
    if (promise1.status === STATUS.REJECTED) {
      // rejected参数不是一个函数,忽略
      if (!isFunction(onrejected)) {
        return promise1
      }
      // 模拟异步任务
      queueMicrotask(() => {
        try {
          // 参数是上一个promise的value
          const x = onrejected(promise1.reason)
          // 决议这个promise2,通过x决定promise返回的值
          resolvePromise(promise2, x)
        } catch (error) {
          rejectedPromise(promise2, error)
        }
      })
    }
    // 3.promise1是pending状态
    if (promise1.status === STATUS.PENDING) {
      onfulfilled = isFunction(onfulfilled) ? onfulfilled : value => value
      onrejected = isFunction(onrejected)
        ? onrejected
        : err => {
            throw err
          }
      // 把then的回调传入回调队列里
      this.fulfilledCbs.push(
        // 每个回调都是异步的
        () => {
          queueMicrotask(() => {
            try {
              const x = onfulfilled(promise1.value)
              resolvePromise(promise2, x)
            } catch (error) {
              rejectedPromise(promise2, error)
            }
          })
        }
      )
      this.rejectedCbs.push(() => {
        queueMicrotask(() => {
          try {
            const x = onrejected(promise1.reason)
            resolvePromise(promise2, x)
          } catch (error) {
            rejectedPromise(promise2, error)
          }
        })
      })
    }
    return promise2
  }
}
//  测试用例用到的钩子   promises-aplus-tests
MyPromise.deferred = function () {
  const deferred = {}
  deferred.promise = new MyPromise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })
  return deferred
}
module.exports = MyPromise
