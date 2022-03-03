---
title: 浏览器缓存
category: 计算机网络
---

## 缓存

存储被用到的数据，让数据访问的更快

1. 命中缓存：在缓存中拿到数据
2. 没有命中/穿透：缓存中没有数据，进行穿透
3. 命中率：命中次数和总次数
4. 缓存大小：缓存中可以缓存多少数据（每一个域下面的缓存数据大小有限制）
5. 清空策略：如果缓存空间不够数据，清空一些数据

## 优化斐波那契数列

常规的斐波那契数列数据，使用递归实现，如果没有进行一些缓存策略，会十分耗时

```js
function memory(fn, maxLength = 10) {
  const cache = [] // {}

  return (...arg) => {
    const hash = arg.join(',')
    const item = cache.find(item => item.hash === hash)
    if (item) {
      return item.value
    }
    const value = fn(...arg)
    cache.push({
      hash,
      value
    })
    if (cache.length > maxLength) {
      cache.shift()
    }
    return value
  }
}
function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return mfib(n - 1) + mfib(n - 2)
}
const mfib = memory(fib)
console.log(mfib(99))
```

## Cache-Control

定义所有缓存都要遵守的行为

| 值       | 含义                           |
| -------- | ------------------------------ |
| public   | 所有方缓存（经历了多个服务器） |
| private  | 只允许客户端缓存               |
| no-cache | 协商缓存                       |
| no-store | 不缓存                         |

---

定义缓存的时间

| 值       | 含义         |
| -------- | ------------ |
| max-age  | 秒(终端缓存) |
| s-maxage | 秒(代理缓存) |

## 强制缓存
