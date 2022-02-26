---
title: computed和lazy
# icon: note
category: vue
---

## computed 计算属性

- 接受一个 getter 函数，并根据 getter 的返回值返回一个不可变的响应式 ref 对象。

```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // 错误
```

- 或者，接受一个具有 get 和 set 函数的对象，用来创建可写的 ref 对象。

```js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
```

## lazy 懒执行

`effect`函数会立即执行其传入的函数，如果不希望他立即执行，我们可以使用`lazy`来达到目的

```js
effect(
  () => {
    console.log(1)
  },
  {
    lazy: true
  }
)
```

有 lazy，我们就可以实现 effect 的逻辑了

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
  // 只有lazy的时候才执行副作用
  if (!options.lazy) {
    effectFn()
  }
  return effectFn // 将副作用函数作为返回值返回
}
```

现在我们实现了 lazy 的懒执行，因为返回了副作用函数，当我们需要执行的时候，只需要手动执行。如果只是手动执行那么意义不大，我们需要获得执行后的返回值

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
    // 保存执行的fn返回值
    const res = fn()
    // 执行完成以后出栈,并把activeEffect还原
    activeEffect = effectStack.pop()
    return res // 返回执行结果
  }
  effectFn.options = options // 新增一个选项
  // 用来存储所有与该副作用的依赖集合
  effectFn.deps = []
  // 只有lazy的时候才执行副作用
  if (!options.lazy) {
    effectFn()
  }
  return effectFn // 将副作用函数作为返回值返回
}
```

现在我们已经能够实现懒加载副作用函数，并且得到返回值

## 实现计算属性

在上一步我们已经实现懒加载副作用函数，并且得到返回值。接下来就是实现计算属性了

```js
function computed(getter) {
  const effectfn = effect(getter, {
    lazy: true
  })
  const obj = {
    get value() {
      return effectfn()
    }
  }
  return obj
}
const data = { foo: 1, bar: 2 }
const obj = new Proxy(data, {
  // ...
})
const sumres = computed(() => obj.foo + obj.bar)
console.log(sumres.value) // 3
```

现在我们实现了 computed 函数，但是无法做到缓存，当我们每次访问 sumres，会造成多次调用 effectfn

## 增加缓存

当我们多次访问 sumres，会造成多次调用 effect，即使数据没有变化。为了解决这个问题，我们需要缓存上一次的值

增加 scheduler，当数据变化的时候将 dirty 变为 true，当获取的时候重新计算

```js
function computed(getter) {
  let value // 缓存上一次的值
  let dirty = true // 一个状态，如果是true，意味着是脏的，需要进行重新计算
  const effectfn = effect(getter, {
    lazy: true,
    // 增加一个调度器，当数据变化的时候，将dirty变成true
    scheduler() {
      dirty = false
    }
  })
  const obj = {
    get value() {
      // 只有脏的时候才要处理
      if (dirty) {
        // 保存值
        value = effectfn()
        // 将dirty设置成false
        dirty = false
      }
      return value
    }
  }
  return obj
}
```

## effect 中引用 computed

虽然我们上面的实现近乎完美，但是当另外一个 effect 也引用了这个计算数据，当修改关联对象的时候，我们期望计算数据触发更新，但是没有发生变化。
:::tip
在 effect 中引用 computed，本质上还是 effect 嵌套 effect。一个 computed 拥有自己的 effect，并且是懒加载。只有读取的时候才会执行。
:::
为了计算属性没有触发副作用函数，只需要手动去追踪依赖，并且手动触发就可以了

```js
function computed(getter) {
  let value // 缓存上一次的值
  let dirty = true // 一个状态，如果是true，意味着是脏的，需要进行重新计算
  const effectfn = effect(getter, {
    lazy: true,
    // 增加一个调度器，当数据变化的时候，将dirty变成true
    scheduler() {
      dirty = false
      // 当数据发生变化手动调用
      trigger(obj,'value')
    }
  })
  const obj = {
    get value() {
      // 只有脏的时候才要处理
      if (dirty) {
        // 保存值
        value = effectfn()
        // 将dirty设置成false
        dirty = false
      }
      // 当获取value的时候手动调用track触发追踪
      track(obj, 'value')
      return value
    }
  }
  return obj
}
```
