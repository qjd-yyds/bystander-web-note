export default function throttle(fn: (...arg: any[]) => any, delay = 500) {
  let flag = true
  return function (...args: any[]) {
    if (!flag) return
    flag = false
    setTimeout(() => {
      flag = true
      fn(...args)
    }, delay)
  }
}
