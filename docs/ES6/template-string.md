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

- 在${}中可以放一切有返回值的 js 表达式
- 不能放没有返回值的表达式
- 不能放分支/判断，循环等程序结构

## 开头可以传入函数

```js
const name = 'qjd'
const age = 18
function prevString(strings, presonExp, ageExp) { 
  let string1 = strings[0] // 'my name is '
  let string2 = strings[1] // ' ,i am a '
  let ageStr = ''
  if (ageExp > 99) {
    ageStr = '老年人'
  } else {
    ageStr = '年轻小伙'
  }
  return string1 + presonExp + string2 + ageStr
}
let out = prevString`my name is ${name} ,i am a ${age}`
// 'my name is qjd ,i am a 年轻小伙'
```
## 原始字符串值
tag函数的第一个值，还有一个raw属性，他的值是模板字符串被转义之前的值，可以使用内置String.raw
```js
const string1 = `multiline\nstring`
// multiline
// string
const string2 = String.raw`multiline\nstring`
// multiline\\nstring

```