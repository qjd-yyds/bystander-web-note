/*******
 * @description: 斐波那契数列
 * @param {*} n
 * @return {*}
 */
function fib(n) {
  if (!n || n <= 0) throw '不符合格式'
  if (n === 1 || n === 2) {
    return 1
  }
  let pre = 1
  let cur = 1
  for (let i = 3; i <= n; i++) {
    ;[pre, cur] = [cur, cur + pre]
  }
  return cur
}
/*******
 * @description: 求最长不重复长度
 * @param {*} str
 * @return {*}
 */
function longNoRepeatStr(str) {
  let max = -Infinity
  let pre = null
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== pre) {
      count++
    } else {
      count = 0
    }
    pre = str[i]
    if (count > max) max = count
  }
  return max
}

/*******
 * @description: 防抖
 * @param {*}
 * @return {*}
 */
function debounce(fn, wait = 200, immediate) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    if (immediate) {
      let callnow = !timer
      if (callnow) {
        fn(...args)
      }
      timer = setTimeout(() => {
        timer = null
      }, wait)
    }
    timer = setTimeout(() => {
      fn(...args)
    }, wait)
  }
}
/*******
 * @description: 节流
 * @param {*}
 * @return {*}
 */
function throttle(fn, wait = 200) {
  let now = Date.now()
  return function (...args) {
    if (Date.now() - now > wait) {
      fn.apply(this, args)
      now = Date.now()
    }
  }
}

console.log(1)
setTimeout(() => {
  console.log(2)
  process.nextTick(() => {
    console.log(3)
  })
  new Promise(resolve => {
    console.log(4)
    resolve()
  }).then(() => {
    console.log(5)
  })
})
new Promise(resolve => {
  console.log(7)
  resolve()
}).then(() => {
  console.log(8)
})
process.nextTick(() => {
  console.log(6)
})
setTimeout(() => {
  console.log(9)
  process.nextTick(() => {
    console.log(10)
  })
  new Promise(resolve => {
    console.log(11)
    resolve()
  }).then(() => {
    console.log(12)
  })
})

// 1,7,6,8,2,4,9,11,3,5,10,12

document.querySelectorAll('*').forEach(item => {
  if (
    item.tagName[0].toLowerCase() === 's' ||
    item.tagName[0].toLowerCase() === 'h'
  ) {
    console.log(item);
  }
})
