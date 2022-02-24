// 考察点：resolve 一个规范thenable的情况
// 打印 b a
Promise.resolve({
  then: function (fulfill) {
    fulfill('a')
    console.log('b')
    throw new Error('c') // 不会执行，因为thenable只会执行一次修改状态
    console.log('d')
  }
}).then(
  d => {
    console.log(d) 
  },
  err => {
    console.log(err)
  }
)
