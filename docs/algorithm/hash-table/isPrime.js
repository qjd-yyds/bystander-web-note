// 判断是否是质数(素数) 能被1或者自己本身整除 并且大于1
function isPrime(num) {
  if (num <= 1) {
    return false
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

// 高效算法
// 一个数字进行因数分解，一个肯定小于等于sqrt(num) 一个大于等于sqrt(num)
function isPrime(num) {
  if (num <= 1) {
    return false
  }
  var temp = parseInt(Math.sqrt(num))
  // 循环判断
  for (var i = 2; i <= temp; i++) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}
