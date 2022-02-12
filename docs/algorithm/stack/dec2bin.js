// 使用栈封装十进制转二进制
function dec2bin(decNumer) {
  var stack = new Stack()
  while (decNumer > 0) {
    // 获取他的余数，压栈
    stack.push(decNumer % 2)
    decNumer = Math.floor(decNumer / 2)
  }
  let result = ''
  // 依次弹栈，获取到值为二进制
  while (stack.size()) {
    result += stack.pop()
  }
  var prevNum = (4 - (result.length % 4)) % 4
  var prevString = ''
  // 前面补0
  for (var i = 0; i < prevNum; i++) {
    prevString += '0'
  }

  return prevString + result
}
