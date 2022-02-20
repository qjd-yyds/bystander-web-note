export default function deBounce(fn: (...arg: any[]) => any, delay = 500) {
  let time: NodeJS.Timeout = null
  return function (...args: any[]) {
    time && clearTimeout(time)
    time = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
