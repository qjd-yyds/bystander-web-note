// 请问一下代码输出什么（考察then的参数不是函数的情况）
// 打印a
Promise.resolve('a').then('b').then(Promise.resolve('c')).then(console.log)
