export default function deBounce(fn:(...arg) => any, delay = 500) {
  let time = null
  return function (...args) {
    time && clearTimeout(time)
    time = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
