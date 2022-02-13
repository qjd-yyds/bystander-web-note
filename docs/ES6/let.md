# let

## var 的问题

- 声明提前（hoist）
- 没有"块级作用域"
  > 代码中的变量会超出括号返回，影响外围变量  
  > if 的花括号，对象的花括号

## let 的优点

:::tip 提示
如果在变量声明之前使用，报错 ReferenceError:cannot acces 'b' before initialization

其实这个只有在新版谷歌浏览器才会报错，旧的浏览器报错ReferenceError: b is not defined
:::

- 不会被声明提前
- 生成"块级作用域"
- 在全局中创建变量 window访问不到
- 不能被重复声明
## 本质

匿名函数自调