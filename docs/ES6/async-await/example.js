// 1.先分解成普通函数，传入一个generator函数
function example(params) {
  return spawn(function* () {
    // ...
  })
}
// spawn 返回一个promise
function spawn(genF) {
  return new Promise(function (resolve, reject) {
    // 创建一个生成器对象
    const gen = genF()
    // 执行step方法
    step(function () {
      return gen.next(undefined)
    })
    function step(nextF) {
      let next
      try {
        // 执行传入的函数，返回一个迭代器对象
        next = nextF()
      } catch (e) {
        return reject(e)
      }
      // 如果生成器结束,返回resolve状态
      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(
        function (v) {
          step(function () {
            return gen.next(v)
          })
        },
        function () {
          step(function (e) {
            return gen.throw(e)
          })
        }
      )
    }
  })
}
