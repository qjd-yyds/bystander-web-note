---
title: watch
# icon: note
category: vue
# star: 9
# sticky: 9
---

## 本质

- 所谓 watch，本质就是就是观测一个响应式数据，当数据发生变化的时候，通知并执行相应的回调函数。
- 实际上，watch 的实现是利用了 effect 和 options.scheduler 选项来实现

```js
effect(
  () => {
    obj.a
  },
  {
    scheduler() {
      // 当obj.a数据发生变化，会执行scheduler函数
    }
  }
)
```

简单实现

```js
function watch(source, cb) {
  // 当触发读取foo的时候，建立联系
  effect(() => source.foo, {
    scheduler() {
      // 当数据变化触发cb回调函数
      cb()
    }
  })
}
```

:::warning
上面的实现，只是对 obj.foo 的硬编码读取操作，为了让 watch 函数具有通用性，需要封装一个读取操作
:::

## 通用读取

```js
function watch(source, cb) {
  // 当触发读取foo的时候，建立联系
  effect(() => traverse(source), {
    scheduler() {
      // 当数据变化触发cb回调函数
      cb()
    }
  })
}
function traverse(value, seen = new Set()) {
  // 如果读取的是原始类型，或者已经被读取过，什么都不做
  if (typeof value !== 'object' || typeof value === null || seen.has(value)) {
    return
  }
  // 数据添加到seen
  seen.add(value)
  // 假设value是一个对象，使用forin读取每一个值
  // 递归调用traverse
  for (let i in value) {
    traverse(value[i], seen)
  }
  return value
}
```

## 接受一个 getter

watch 可以接受一个 getter，在 getter 内部可以指定该 watch 需要依赖哪些响应数据

```js
function watch(source, cb) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => {
      traverse(source)
    }
  }
  // 当触发读取foo的时候，建立联系
  effect(() => getter(), {
    scheduler() {
      // 当数据变化触发cb回调函数
      cb()
    }
  })
}
function traverse(value, seen = new Set()) {
  // 如果读取的是原始类型，或者已经被读取过，什么都不做
  if (typeof value !== 'object' || typeof value === null || seen.has(value)) {
    return
  }
  // 数据添加到seen
  seen.add(value)
  // 假设value是一个对象，使用forin读取每一个值
  // 递归调用traverse
  for (let i in value) {
    traverse(value[i], seen)
  }
  return value
}
```

## 获得新值和旧值

如何获得新值和旧值呢，这里需要用到`lazy`这个属性

```js
function watch(source, cb) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => {
      traverse(source)
    }
  }
  let oldValue, newValue
  // 当触发读取foo的时候，建立联系
  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler() {
      // 重新执行副作用得到的是新值
      newValue = effectFn()
      // 当数据变化触发cb回调函数
      cb(oldValue, newValue)
      oldValue = newValue // 更新旧值
    }
  })
  // 手动调用，拿到的是旧值
  oldValue = effectFn()
}
function traverse(value, seen = new Set()) {
  // 如果读取的是原始类型，或者已经被读取过，什么都不做
  if (typeof value !== 'object' || typeof value === null || seen.has(value)) {
    return
  }
  // 数据添加到seen
  seen.add(value)
  // 假设value是一个对象，使用forin读取每一个值
  // 递归调用traverse
  for (let i in value) {
    traverse(value[i], seen)
  }
  return value
}
```

## 立即执行的 watch

当`immediate`选项为 true 的时候，回调函数会在 watch 创建的时候执行一次。现在把 scheduler 提取出去

```js
function watch(source, cb, options = {}) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => {
      traverse(source)
    }
  }

  let oldValue, newValue
  const obj = () => {
    // 重新执行副作用得到的是新值
    newValue = effectFn()
    // 当数据变化触发cb回调函数
    cb(oldValue, newValue)
    oldValue = newValue // 更新旧值
  }
  // 当触发读取foo的时候，建立联系
  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler: obj
  })
  if (options.immediate) {
    // 第一次执行oldvalue肯定是undefined
    obj()
  } else {
    // 手动调用，拿到的是旧值
    oldValue = effectFn()
  }
}
function traverse(value, seen = new Set()) {
  // 如果读取的是原始类型，或者已经被读取过，什么都不做
  if (typeof value !== 'object' || typeof value === null || seen.has(value)) {
    return
  }
  // 数据添加到seen
  seen.add(value)
  // 假设value是一个对象，使用forin读取每一个值
  // 递归调用traverse
  for (let i in value) {
    traverse(value[i], seen)
  }
  return value
}
```

## 回调执行时机

`flush`本质是调度函数的执行时机

- 当 flush 为 post 的时候，代表调度函数需要将副作用函数放在一个微任务队列中去,等待 dom 更新完成后再执行

```js
function watch(source, cb, options = {}) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => {
      traverse(source)
    }
  }

  let oldValue, newValue
  const obj = () => {
    // 重新执行副作用得到的是新值
    newValue = effectFn()
    // 当数据变化触发cb回调函数
    cb(oldValue, newValue)
    oldValue = newValue // 更新旧值
  }
  // 当触发读取foo的时候，建立联系
  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler() {
      if (options.flush === 'post') {
        // 如果是post放入微任务队列
        const p = Promise.resolve()
        p.then(obj)
      } else {
        obj()
      }
    }
  })
  if (options.immediate) {
    // 第一次执行oldvalue肯定是undefined
    obj()
  } else {
    // 手动调用，拿到的是旧值
    oldValue = effectFn()
  }
}
function traverse(value, seen = new Set()) {
  // 如果读取的是原始类型，或者已经被读取过，什么都不做
  if (typeof value !== 'object' || typeof value === null || seen.has(value)) {
    return
  }
  // 数据添加到seen
  seen.add(value)
  // 假设value是一个对象，使用forin读取每一个值
  // 递归调用traverse
  for (let i in value) {
    traverse(value[i], seen)
  }
  return value
}
```

## 过期的副作用

竞态问题通常在多线程或者多进程被提及，但是在日常工作中可能会出现这样的场景

```js
let finalData
watch(obj, async () => {
  const res = await fetch('/api/xxx')
  finalData = res
})
```

:::tip
上述代码没有什么问题，但是在执行的时刻，别的地方修改了 obj 的值，这会导致二次请求。此时两个请求同时进行，哪一个先返回，我们无法确定
:::

- 由于 B 在后面发送请求，我们认为 B 是有效的。A 产生的结果应该是无效的。我们需要一个过期手段
- watch 的回调函数接受第三个参数`onInvalidate`,这个函数会在当前副作用过期执行

那么 vue 是如何实现的呢

在 watch 内部每次检测变更后，在副作用函数重新调用之前，先调用我们通过`oninvalidate`函数注册的回调

```js
function watch(source, cb, options = {}) {
  let getter
  if (typeof source === 'function') {
    getter = source
  } else {
    getter = () => {
      traverse(source)
    }
  }

  let oldValue, newValue, cleanup // 用来存储用户过期的回调
  function onInvalidate(fn) {
    // 将过期回调放入cleanup
    cleanup = fn
  }
  const obj = () => {
    // 重新执行副作用得到的是新值
    newValue = effectFn()
    // 在调用回调之前先调用注册的回调函数
    if (cleanup) {
      cleanup()
    }
    // 当数据变化触发cb回调函数
    cb(oldValue, newValue)
    oldValue = newValue // 更新旧值
  }
  // 当触发读取foo的时候，建立联系
  const effectFn = effect(() => getter(), {
    lazy: true,
    scheduler() {
      if (options.flush === 'post') {
        // 如果是post放入微任务队列
        const p = Promise.resolve()
        p.then(obj)
      } else {
        obj()
      }
    }
  })
  if (options.immediate) {
    // 第一次执行oldvalue肯定是undefined
    obj()
  } else {
    // 手动调用，拿到的是旧值
    oldValue = effectFn()
  }
}
function traverse(value, seen = new Set()) {
  // 如果读取的是原始类型，或者已经被读取过，什么都不做
  if (typeof value !== 'object' || typeof value === null || seen.has(value)) {
    return
  }
  // 数据添加到seen
  seen.add(value)
  // 假设value是一个对象，使用forin读取每一个值
  // 递归调用traverse
  for (let i in value) {
    traverse(value[i], seen)
  }
  return value
}
```

使用，第一次修改 foo，发送请求 A，在 200ms 后发送请求 B，假设请求 1000ms，200ms 以后，foo 变化，着会导致 watch 回调执行，在执行回调前会查看是否存在 onInvalidate，由于第一次的时候，我们注册过，所以执行。这个时候由于闭包的特性`expired`变为 true，这个时候当请求 A 返回的时候，其结果会被抛弃。从而避免过期的函数

```js
let finalData
watch(obj, async (newValue, oldValue, onInvalidate) => {
  let expired = false
  onInvalidate(() => {
    expired = true
  })
  const res = await fetch('/api/xxx')
  if (!expired) {
    finalData = res
  }
})
// 第一次修改
obj.foo++
setTimeout(() => {
  // 200ms后第二次修改
  obj.foo++
}, 200)
```
