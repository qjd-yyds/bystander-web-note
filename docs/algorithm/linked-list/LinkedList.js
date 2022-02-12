function LinkedList() {
  // 节点类
  function Node(data) {
    this.data = data
    this.next = null
  }
  this.head = null
  this.length = 0
  // append(element) 尾部添加项
  LinkedList.prototype.append = function (data) {
    // 1.创建新节点
    var newNode = new Node(data)
    // 判断是否是第一个节点
    if (this.length === 0) {
      this.head = newNode
    } else {
      // 不是最后一个节点
      var current = this.head
      while (current.next) {
        // 找到最后一个节点
        current = current.next
      }
      // 这个时候的current是最后一个节点的next，且为空
      // 赋值为创建的节点
      current.next = newNode
    }
    this.length++
  }
  // insert(position,element) 特定的位置添加项
  LinkedList.prototype.insert = function (position, data) {
    // 边界判断
    if (position < 0 || position > this.length) return false
    var newNode = new Node(data)
    if (position === 0) {
      // 如果是0 插入首位
      newNode.next = this.head
      this.head = newNode
    } else {
      var index = 0
      var current = this.head
      var previous = null
      while (index++ < position) {
        // current赋值前的元素复制给previous
        previous = current
        current = current.next
      }
      newNode.next = current
      previous.next = newNode
    }
    this.length += 1
    return true
  }
  // get(position) 获取对应位置的元素
  LinkedList.prototype.get = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return null
    // 获取信息
    var current = this.head
    var index = 0
    while (index++ < position) {
      current = current.next
    }
    return current.data
  }
  // indexOf(element) 返回元素在列表的索引，没有返回-1
  LinkedList.prototype.indexOf = function (data) {
    // 当前的值
    var current = this.head
    // 当前的下标
    var index = 0
    // 开始查找
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
  // update(position,element) 修改某个位置的元素
  LinkedList.prototype.update = function (position, newData) {
    // 越界判断
    if (position < 0 || position >= this.length) return false
    var index = 0
    // 查找正确节点
    var current = this.head
    while (index++ < position) {
      current = current.next
    }
    current.data = newData
  }
  // removeAt(position) 移除特定位置元素
  LinkedList.prototype.removeAt = function (position) {
    // 边界处理
    if (position < 0 || position >= this.length) return null
    if (position === 0) {
      this.head = this.head.next
    } else {
      // 找到需要删除的元素
      var index = 0
      var current = this.head
      // 需要删除的元素的前一个
      var previous = null
      while (index++ < position) {
        previous = current
        current = current.next
      }
      previous.next = current.next
      this.length--
      return current.data
    }
  }
  // remove(element) 移除一项
  LinkedList.prototype.remove = function (data) {
    var position = this.indexOf(data)
    return this.removeAt(position)
  }
  // isEmpty()
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }
  // size()
  LinkedList.prototype.size = function () {
    return this.length
  }
  // toString()
  LinkedList.prototype.toString = function () {
    var current = this.head
    var listString = ''
    while (current) {
      listString += current.data
      current = current.next
    }
    return listString
  }
}
var list = new LinkedList()
// 测试append
list.append('a')
list.append('b')
list.append('c')
list.insert(0, 'aa')
list.insert(2, 'bb')
list.insert(5, 'cc')
alert(list.toString())
