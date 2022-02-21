# Symbol

## 属性

es6 新增了 11 个 symbol，叫做 well-known symbol,他们都是 symbol 属性，指向语言内部使用的方法或者属性。他们可以更改语言的原生行为
| 名称 | 作用 |
| ----------- | ----------- |
| Symbol.hasInstance | instanceOf 操作符内部实现方法 |
| Symbol.isConcatSpreadable | 布尔值，Array.prototype.concat()是否选择拉平 |
| Symbol.interator | 返回 interator 方法 |
| Symbol.match | String.prototype.match() 用来比较字符串的方法 |
| Symbol.replace | String.prototype.replace() 用来替换字符串的方法 |
| Symbol.search | String.prototype.search() 用来定位字符串的方法 |
| Symbol.split | String.prototype.search() 用来切割字符串的方法 |
| Symbol.species | 用来创建衍生对象(derived object) 方法 |
| Symbol.toPrimitive | 返回对象原始值表示的方法 |
| Symbol.toStringTag | Object.prototype.toString() 创建对象时描述的字符串 |
| Symbol.unscopables | 一个对象，指定在使用 with 语句时，不应遍历的属性名称集合 |

## Symbol.hasInstance

每个函数都有 Symbol.hasInstance 方法，用来判断给定对象是否是该函数的实例，他是原型上的方法

在 js 中的 instanceof 可以判断该对象的原型,但是不能判断原始类型的原型，始终返回 **false**

```js
1 instanceof Number // false
'1' instanceof String // false
null instanceof Object // false
true instanceof Boolean // false

// 使用 symbol.hasInstance 来解决这个问题
Object.defineProperty(Number, Symbol.hasInstance, {
  value: function (n) {
    return typeof n === 'number'
  }
})
```

## Symbol.isConcatSpreadable

concat 用来合并两个或者多个数组，默认的数组元素是展开的，Symbol.isConcatSpreadable 的值为 undefined。如果不想展开可以使用把他的值置为 **false**

```js
let a = ['a', 'b']
let n = [1, 2]
a.concat(n, 3) // ['a','b',1,2,3]
a[Symbol.isConcatSpreadable] // undefined
n[Symbol.isConcatSpreadable] // undefined
n[Symbol.isConcatSpreadable] = false // 不让n展开
a.concat(n, 3) // ['a', 'b', [1, 2], 3]
```

:::tip 扩展
该方法对类数组也适用。

合并的时候会根据 length 的值超找 obj[0]至 obj[length - 1] 的值进行合并，所以 obj 也要有 0 到 length - 1 的数据
:::

```js
let c = {
  0: 'a',
  1: 'b',
  2: 'c', // 该值不会被合并
  length: 2,
  [Symbol.isConcatSpreadable]: true
}
let r = ['abc'].concat(c)
console.log(r.length) // 3
console.log(r) // ["abc",'a','b']
```
