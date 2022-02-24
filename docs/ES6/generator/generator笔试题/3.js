// 生成器结合promise
function genP(d1, d2) {
  return new Promise(function (resolve, reject) {
    if (+new Date() > 0) {
      resolve(d1)
    } else {
      reject(d2)
    }
  })
}

function* gen() {
  yield genP('yes', 'no') // 返回{ value： Promise(<fulfilled>:"yes"),done:false}
  yield genP('y', 'n') // 返回{ value： Promise(<fulfilled>:"y"),done:false}
}

function run(fn) {
  var g = fn()
  function next() {
    var result = g.next()
    console.log(result.value) // Promise(<fulfilled>:"yes") ， Promise(<fulfilled>:"y")
    if (result.done) return
    result.value.then(next)
  }
  next()
}
run(gen)
