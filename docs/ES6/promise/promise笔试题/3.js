// 请问一下代码输出什么（resolve一个不规范的thenable情况）
// 如果传入的then是一个函数，会去决议，但是这里没有返回的是一个pending的promise
// 所以 下面的then不会执行，只会打印a
Promise.resolve({
  then: function () {
    console.log('a')
  }
}).then(() => {
  console.log('d')
})
