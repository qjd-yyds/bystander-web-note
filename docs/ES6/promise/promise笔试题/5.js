// 考察点：promise的错误处理
// a b d
Promise.resolve(3)
  .then(() => {
    console.log('a')
    throw new Error('b') // 生成的promise是 rejected状态 reason是 new Error('b')
  })
  .then(
    () => {
      console.log('c')
    },
    err => {
      console.log(err.message)
      return 'd'
    }
  )
  .then(
    d => {
      console.log(d)
    },
    e => {
      console.log(e)
    }
  )
