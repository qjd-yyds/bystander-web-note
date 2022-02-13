// 1.字符串转成大数 hashCode
// 2.大数字压缩成数组范围内数组大小
// 获取下标
function hashFunc(str, size) {
  var hashCode = 0
  // 霍纳法则，计算hashcode的值
  for (var i = 0; i < str.length; i++) {
    hashCode = 37 * hashCode + str.charCodeAt(i) //转成大数
  }
  // 取余
  var index = hashCode % size
  return index
}

// hash函数
function HashTable() {
  this.storage = [] // 存储的数组
  this.count = 0 // 记录当前存放的元素
  this.limit = 7 // 当前的总长度
}
// 挂载hash函数
HashTable.prototype.hashFunc = hashFunc
// 插入&修改操作，如果存在就修改如果不存在就插入
HashTable.prototype.put = function (key, value) {
  // 1.根据key获取索引值
  var index = this.hashFunc(key, this.limit)
  // 2.根据索引值，取出bucket
  var bucket = this.storage[index]
  // 3.不存在就创建bucket，并且放置在的对应索引位置
  if (bucket == null) {
    bucket = []
    this.storage[index] = bucket
  }
  // 判断是新增还是修改
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (tuple[0] === key) {
      tuple[1] = value
      return
    }
  }
  // 新增
  bucket.push([key, value])
  // 计数
  this.count++
}

// 获取方法
HashTable.prototype.get = function (key) {
  // 1.更具key获取index
  var index = this.hashFunc(key, this.limit)
  // 2.根据index获取对应的bucket
  var bucket = this.storage[index]
  // 3.判断bucket为null，如果是null返回null
  if (bucket == null) {
    return null
  }
  // 有值
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (tuple[0] == key) {
      return tuple[1]
    }
  }
  // 没有找到
  return null
}
// 删除
HashTable.prototype.remove = function (key) {
  // 1.更具key获取index
  var index = this.hashFunc(key, this.limit)
  // 2.根据index获取对应的bucket
  var bucket = this.storage[index]
  // 3.判断bucket为null，如果是null返回false
  if (bucket == null) {
    return null
  }
  // 线性查找，并且删除
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i]
    if (tuple[0] == key) {
      bucket.splice(i, 1)
      this.count--
      return bucket[1]
    }
  }
  // 没有找到
  return null
}
// 判断是否为空
HashTable.prototype.isEmpty = function () {
  return this.count === 0
}
// 获取hash表中的元素个数
HashTable.prototype.size = function () {
  return this.count
}
