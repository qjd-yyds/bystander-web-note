# 模板字符串

## 传统的 JavaScript 语言写法

```js
$('#result').append(
  'There are <b>' +
    basket.count +
    '</b> ' +
    'items in your basket, ' +
    '<em>' +
    basket.onSale +
    '</em> are on sale!'
)
```

## 语法

上面这种写法相当繁琐不方便，ES6 引入了模板字符串解决这个问题。

```js
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`)
```
+ 在${}中可以放一切有返回值的js表达式
+ 不能放没有返回值的表达式
+ 不能放分支/判断，循环等程序结构