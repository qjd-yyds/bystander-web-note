# let

## var 的问题

- 声明提前（hoist）
- 没有"块级作用域"
  > 代码中的变量会超出括号返回，影响外围变量  
  > if 的花括号，对象的花括号

## let 的优点

:::tip 提示
如果在变量声明之前使用，报错 ReferenceError:cannot acces 'b' before initialization

其实这个只有在新版谷歌浏览器才会报错，旧的浏览器报错 ReferenceError: b is not defined
:::

- "不会被声明提前"
- 生成"块级作用域"
- 在全局中创建变量 window 访问不到
- 不能被重复声明

## 暂时性死区

let 或者 const 声明的语句会形成暂时性死区

在下面语句中 花括号内的所有代码无法访问x，因为js形成了暂时性死区
```js
var x = 1
if (true) {
  console.log(x) // x is not defind
  let x = 2
}
```

## 本质

匿名函数自调
