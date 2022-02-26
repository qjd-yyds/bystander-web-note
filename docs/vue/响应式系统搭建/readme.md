---
title: 响应式的实现
# icon: note
category: vue
# star: 9
# sticky: 9
---

## 问题思考

当我们使用 effect 这个副作用函数的时候，页面呈现 1。但是当我们修改 obj.a，如果要让页面呈现修改后的数据，就必须重新执行 effect 函数。有没有可能在 obj 变换的时候，自动执行 effect 函数呢

```js
const obj = {
  a: 1
}
function effect() {
  document.body.innerText = obj.a
}
effect() // 页面呈现1
obj.a = 2
// 这个时候页面还是1
// 只有重新执行effect才会更新页面
```

## 响应式基本实现

- 通过观察我们发现，当执行 effect 副作用函数的时候，会触发 obj.a 的读取
- 当修改 obj.text 的时候，会触发 obj.text 的设置操作

如果我们能拦截一个对象读取和设置操作，事情就变的简单了。当数据读取的时候，我们可以把副作用函数 effect 存储到一个 bucket 中。当数据设置的时候触发桶内的副作用函数

:::tip 提示
在 es6 之前，只能通过 Object.defineproperty 函数实现。这也是 vue2 采用的方式。在 es6 中我们采用代理对象 proxy 来实现
:::

让我们来改造下之前的逻辑

```js
// 创建一个桶来存储effect函数
const bucket = new Set()
const data = {
  a: 1
}
function effect() {
  document.body.innerText = obj.a
}

const obj = new Proxy(data, {
  get(target, key) {
    bucket.add(effect)
    return target[key]
  },
  set(target, key, newval) {
    target[key] = newval
    // 循环执行bucket里的副作用函数
    bucket.forEach(fn => fn())
    return true // 返回true表示设置成功
  }
})
```

## 如何去除 effect 硬编码机制

现在我们已经实现了一个最简单的响应系统，但是这个实现存在非常多的缺陷，

- 直接通过 effect 来获取副作用函数，这个硬编码方式不是很灵活
- 我们可以设置这个副作用函数为另外的名字，甚至可以是匿名函数，所以必须想方法去除这个硬编码机制

为了解决这一点，我们需要提供一个注册副作用函数的机制

```js
// 增加一个的全局变量来存储当前执行的副作用函数
let activeEffect
// 再调用effect的时候，注册副作用函数
function effect(fn) {
  activeEffect = fn
  fn()
}
```

修改之前的 proxy 的逻辑

```js
const obj = new Proxy(data, {
  get(target, key) {
    // 在获取的时候，把存储的副作用函数收集到bucket中
    if (activeEffect) {
      bucket.add(activeEffect)
    }
    return target[key]
  },
  set(target, key, newval) {
    target[key] = newval
    // 循环执行bucket里的副作用函数
    bucket.forEach(fn => fn())
    return true // 返回true表示设置成功
  }
})
```

现在我们解决了 effect 的硬编码问题。但是我们对这个系统稍微增加测试，例如设置不存在的属性的时候，也是会执行副作用函数。理论上不应该触发副作用函数，因为这个属性没有和副作用函数建立联系。

## 如何在副作用函数和被操作的目标字段建立联系

在上一节中，我们发现当设置不存在的属性的时候，也会触发副作用函数。导致该问题的根本原因是没有对副作用函数和操作对象之间建立正确的联系。所以我们需要重新设计 bucket 的数据结构

我们可以通过树结构来建立这些连接，现在让我们重新改造下这个新的 bucket

:::tip 为什么使用 WeakMap
WeakMap 和 Map 其实两者的功能类似，两者的区别是 WeakMap 是 ==弱引用== , Map 是 ==强引用== 。
如果创建两个对象 obj，foo，并且分别赋值给 weakmap 和 map。对应对象 foo 被 Map 的 key 引用着，不会被垃圾回收释放。而对于 obj 来说，weakMap 是弱引用，他不会影响垃圾回收。当表达式被执行完成，被垃圾回收机制剔除，我们无法获取 weakmap 的 key，就无法同构 weakMap 获取对象 obj。如果使用 map 代替的话，会造成 target 不会被回收，最终可能导致 ==内存溢出==
:::

```js
const bucket = new WeakMap()
const obj = new Proxy(data, {
  get(target, key) {
    if (!activeEffect) return
    // 先根据target获取桶
    const depsMap = bucket.get(target)
    if (!depsMap) {
      // 如果不存在就创建一个
      target.set(target, (depsMap = new Map()))
    }
    // 再根据key去获取对应的deps,他是一个set
    const deps = depsMap.get(key)
    if (!deps) {
      depsMap.set(key, (deps = new Set()))
    }
    deps.add(activeEffect) // 将副作用加入
    return target[key]
  },
  set(target, key, newval) {
    target[key] = newval
    // 从bucket中获取的对应的target
    const depsMap = bucket.get(target)
    if (!depsMap) return
    const deps = depsMap.get(key)
    // 循环执行bucket里的副作用函数
    deps && deps.forEach(fn => fn())
    return true // 返回true表示设置成功
  }
})
```

## 将收集和触发逻辑抽离

现在我们实现了副作用函数和目标值之间的明确对应关系，但是上述的代码，我们可以把部分逻辑抽离到一个`track`函数中。对于触发依赖，我们也可以抽离成一个`trigger`函数

### track（追踪）

```js
function track(target, key) {
  if (!activeEffect) return
  // 先根据target获取桶
  const depsMap = bucket.get(target)
  if (!depsMap) {
    // 如果不存在就创建一个
    target.set(target, (depsMap = new Map()))
  }
  // 再根据key去获取对应的deps,他是一个set
  const deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect) // 将副作用加入
}
```

### trigger（触发）

```js
function trigger(target, key) {
  // 从bucket中获取的对应的target
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  // 循环执行bucket里的副作用函数
  deps && deps.forEach(fn => fn())
}
```

现在我们把收集和触发的逻辑，分别抽离到了 track 和 trigger 中，这为我们带来了非常多的便利

## 分支切换和 cleanup

到现在为止，我们实现了 track 和 trigger 的抽离。但是我们的响应系统还是存在很多问题。
:::tip 分支切换
下述副作用函数中，存在一个分支切换，所谓分支切换，就是 obj.ok 会根据值不同产生不同的效果，当 ok 发生变化的时候，代码执行的分支也会产生变化
:::

```js
const data = {
  ok: true,
  text: 'hello world'
}
const obj = new Proxy(data, {
  // ...
})
effect(() => {
  document.body.innerText = obj.ok ? obj.text : 'not'
})
```

可以看到 effect 函数分别被 obj.ok 和 obj.text 所依赖收集，所以当触发更新的时候，我们需要重新执行 effect。当`obj.ok`为 false，我们试着改变`obj.text`，虽然页面最终还是 not，可是 effect 函数还是执行了

- 为了解决这个问题，我们可以把之前的所有与之关联的依赖集合在执行 effect 副作用之前删除。
- 要将一个副作用函数剔除，需要了解到哪些依赖集合包含了他

```js
// 增加一个的全局变量来存储当前执行的副作用函数
let activeEffect
// 再调用effect的时候，注册副作用函数
function effect(fn) {
  const effectFn = () => {
    // 在这之前清空deps队列
    cleanup(effectFn)
    activeEffect = effectFn
    fn()
  }
  // 用来存储所有与该副作用的依赖集合
  effectFn.deps = []
  effectFn()
}
```

在 track 中，将与当前副作用函数存在联系的集合放入`activeEffect.deps`中

```js
function track(target, key) {
  if (!activeEffect) return
  // 先根据target获取桶
  const depsMap = bucket.get(target)
  if (!depsMap) {
    // 如果不存在就创建一个
    target.set(target, (depsMap = new Map()))
  }
  // 再根据key去获取对应的deps,他是一个set
  const deps = depsMap.get(key)
  if (!deps) {
    depsMap.set(key, (deps = new Set()))
  }
  deps.add(activeEffect) // 将副作用加入
  // 在这里吧依赖集合放入deps
  activeEffect.deps.push(deps)
}
```

`cleanup` 主要将依赖删除

```js
function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    // 拿到一个依赖集合
    const deps = effectFn.deps[i]
    // 从依赖中将effectFn去除
    deps.delete(effectFn)
  }
  // 重置effectFn.deps的数组
  effectFn.deps.length = 0
}
```

至此，我们解决了副作用的遗留问题，但是在执行代码的时候会进入无限循环执行
:::tip
在 effect 执行的时候，会首先调用 cleanup 剔除，但是这个时候副作用的执行会重新添加依赖。而对于 deps 的遍历正在继续。规范中有明确规定，`forEach` 遍历`Set`时，如果该值被访问过，但是该值被删除并重新添加到集合，如果此时 foreach 没有结束，该值会被 ==重新访问==
:::

为了解决这个问题，我们可以构造一个新的 Set 集合并且遍历他

```js
function trigger(target, key) {
  // 从bucket中获取的对应的target
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  // 循环执行bucket里的副作用函数
  const effectsToRun = new Set(deps)
  // deps && deps.forEach(fn => fn())
  effectsToRun && effectsToRun.forEach(fn => fn())
}
```

## effect 嵌套

effect 是可以发生嵌套的，vuejs 的渲染函数是在 effect 中被触发的，当组件发生嵌套的时候，会出现嵌套问题，例如

```js
effect(function effect1() {
  var temp1 = obj.a // 读取了obj.a
  Foo.render()
  effect(function effect2() {
    var temp2 = obj.b // 读取了obj.b
    Bar.render()
  })
})
```

上述代码中，我们希望 obj.a 触发 effect1 更新，obj.b 触发 effect2 更新，但是在执行的时候，只会触发 effect2 更新。问题出在 activeEffect 这个函数上。我们用全局存储的这个函数，在执行 effect1 时，执行到 effect2，内层副作用覆盖外层的，收集的是内层函数。

如何解决这个问题呢，我们可以使用栈的数据结构来解决这个问题,在执行的时候，将当前栈压入，当内层执行完了，将其弹栈

```js
// 增加一个的全局变量来存储当前执行的副作用函数
let activeEffect
// 新增一个栈
const effectStack = []
// 再调用effect的时候，注册副作用函数
function effect(fn) {
  const effectFn = () => {
    // 在这之前清空deps队列
    cleanup(effectFn)
    activeEffect = effectFn
    // 在fn执行之前压栈
    effectStack.push(effectFn)
    fn()
    // 执行完成以后出栈,并把activeEffect还原
    activeEffect = effectStack.pop()
  }
  // 用来存储所有与该副作用的依赖集合
  effectFn.deps = []
  effectFn()
}
```

## 无限递归循环

当自增操作的时候，该操作会引起栈溢出。该函数可以看成 obj.foo = obj.foo + 1

- obj.foo 获取的时候触发 track
- obj.foo+ 1 的时候触发 trigger，但是这个时候本函数还未执行完，下一个就要开始
- 如此造成栈溢出

```js
const data = { foo: 1 }
const obj = new Proxy(data, {
  //...
})
effect(() => {
  obj.foo++
  // obj.foo = obj.foo + 1
})
```

为了解决这个问题，我们需要在 trigger 的操作上增加一个守卫，判断执行的副作用函数和正在执行的副作用函数是否一致

```js
function trigger(target, key) {
  // 从bucket中获取的对应的target
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  // 循环执行bucket里的副作用函数
  const effectsToRun = new Set()
  deps &&
    deps.forEach(fn => {
      // 判断是否相同，不相同在加入
      if (fn !== activeEffect) {
        effectsToRun.add(fn)
      }
    })
  effectsToRun && effectsToRun.forEach(fn => fn())
}
```

## 调度执行（scheduler）

### 什么是可调度

可调度是响应系统的重要特性，所谓可调度其实是 trigger 函数触发副作用函数时，有能力触发函数执行的时机和次数方式

### 使用场景

```js
const data = { foo: 1 }
const obj = new Proxy(data, {
  //...
})
effect(() => {
  console.log(obj.foo)
})
obj.foo++
console.log('over')
```

上述代码执行顺序是`1=>2=>over`。如果想要执行`1=>over=>2`。我们可以为其设置调度器

### 实现

```js
// 增加一个的全局变量来存储当前执行的副作用函数
let activeEffect
// 新增一个栈
const effectStack = []
// 再调用effect的时候，注册副作用函数
function effect(fn, options = {}) {
  const effectFn = () => {
    // 在这之前清空deps队列
    cleanup(effectFn)
    activeEffect = effectFn
    // 在fn执行之前压栈
    effectStack.push(effectFn)
    fn()
    // 执行完成以后出栈,并把activeEffect还原
    activeEffect = effectStack.pop()
  }
  effectFn.options = options // 新增一个选项
  // 用来存储所有与该副作用的依赖集合
  effectFn.deps = []
  effectFn()
}
```

有了调度器，我们可以在调用 trigger 的时候，把控制权交给用户

```js
function trigger(target, key) {
  // 从bucket中获取的对应的target
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const deps = depsMap.get(key)
  // 循环执行bucket里的副作用函数
  const effectsToRun = new Set()
  deps &&
    deps.forEach(fn => {
      // 判断是否相同，不相同在加入
      if (fn !== activeEffect) {
        effectsToRun.add(fn)
      }
    })
  effectsToRun &&
    effectsToRun.forEach(fn => {
      // 在这里判断是否传入调度器
      if (fn.options.scheduler) {
        fn.options.scheduler(fn)
      } else {
        fn()
      }
    })
}
```

### 使用

在这里我们使用调度器来实现开头的需求

```js
const data = { foo: 1 }
const obj = new Proxy(data, {
  //...
})
effect(
  () => {
    console.log(obj.foo)
  },
  {
    scheduler(fn) {
      // 把操作交给宏任务
      setTimeout(fn)
    }
  }
)
obj.foo++
console.log('over')
```

现在打印，我们实现了想要的效果打印了`1,over,2`

### 控制次数

在连续自增中打印了 1，2，3。但是 2 只是执行的过渡状态，我们关注的是结果，不是过程，所以 2 是多余的

```js
const data = { foo: 1 }
const obj = new Proxy(data, {
  //...
})
effect(() => {
  console.log(obj.foo)
})
obj++
obj++
```

使用调度器可以很方便的实现上述需求

```js
const jobQueue = new Set() // 利用set去重
const p = Promise.resolve() // 使用promise来创建一个微任务
let isFlushing = false // 创建一个标志是否正在刷新
function flushJob() {
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    // 在微任务里执行
    jobQueue.forEach(job => job())
  }).finally(() => {
    // 结束以后重置
    isFlushing = false
  })
}

const data = { foo: 1 }
const obj = new Proxy(data, {
  //...
})
effect(
  () => {
    console.log(obj.foo)
  },
  {
    scheduler(fn) {
      jobQueue.add(fn)
      flushJob()
    }
  }
)
obj.foo++
obj.foo++
```
