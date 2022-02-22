let list = [
  {
    color: '红',
    second: 3000
  },
  {
    color: '绿',
    second: 2000
  },
  {
    color: '黄',
    second: 1000
  }
]
function light(color, second) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(color + '亮了')
      resolve()
    }, second)
  })
}
function orderLights(list) {
  let promise = Promise.resolve()
  list.forEach(item => {
    promise = promise.then(() => {
      return light(item.color, item.second)
    })
  })
  promise.then(() => {
    orderLights(list)
  })
}
orderLights(list)
