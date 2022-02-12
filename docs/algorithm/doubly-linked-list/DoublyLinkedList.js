function DoublyLinkedList() {
  // 节点
  function Node(data) {
    this.data = data
    this.next = null
    this.prev = null
  }
  this.head = null // 头部
  this.tail = null // 尾部
  this.length = 0
  // - append(element) 尾部添加项

  DoublyLinkedList.prototype.append = function (data) {
    var newData = new Node(data)
    if (this.length === 0) {
      this.head = newData
      this.tail = newData
    } else {
      // 新创建的节点前一个指向之前的尾部的引用
      newData.prev = this.tail
      // 之前的尾部的下一个指针的引用指向新创建的
      this.tail.next = newData
      // 创建的节点赋值给最后一个
      this.tail = newData
    }
    this.length++
  }
  // - insert(position,element) 特定的位置添加项
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 越界判断
    if (position < 0 || position > this.length) return
    // 创建新节点
    var newData = new Node(data)
    // 判断列表是否空
    if (this.length === 0) {
      this.head = newData
      this.tail = newData
    } else {
      if (position === 0) {
        // 如果插入的是第一个
        this.head.prev = newData
        newData.next = this.head
        this.head = newData
      } else if (position === this.length) {
        // 如果是加到最后一个
        newData.prev = this.tail
        this.tail.next = newData
        this.tail = newData
      } else {
        // 插入到中间
        var current = this.head
        var index = 0
        while (index++ < position) {
          current = current.next
        }
        newData.prev = current.prev
        newData.next = current
        current.prev.next = newData
        current.prev = newData
      }
    }
    this.length++
  }
  // - get(position) 获取对应位置的元素
  DoublyLinkedList.prototype.get = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return

    var index = 0
    var current = this.head
    if (this.length / 2 > position) {
      while (index++ < position) {
        current = current.next
      }
    } else {
      index = this.length - 1
      while (index++ < position) {
        current = current.prev
      }
    }

    return current.data
  }
  // - indexOf(element) 返回元素在列表的索引，没有返回-1
  DoublyLinkedList.prototype.indexOf = function (data) {
    if (this.length === 0) return -1
    var index = 0
    var current = this.head
    while (current) {
      if (current.data === data) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
  // - update(position,element) 修改某个位置的元素
  DoublyLinkedList.prototype.update = function (position, newData) {
    if (position < 0 || position >= this.length) return false
    var current = this.head
    var index = 0
    // 找到需要修改的元素
    while (index++ < position) {
      current = current.next
    }
    // 修改
    current.data = newData
    return true
  }
  // - removeAt(position) 移除特定位置元素
  DoublyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.length) return null
    var current = this.head
    // 如果只有一个节点
    if (this.length === 1) {
      this.tail = null
      this.head = null
    } else {
      // 判断是否删除的是第一个节点
      if (position === 1) {
        this.head.next.prev = null
        this.head = this.head.next
      } else if (position === this.length - 1) {
        // 让之前尾部的上一个节点的next指向null
        current = this.tail
        this.tail.prev.next = null
        // 将尾部指向之前尾部的前一个
        this.tail = this.tail.prev
      } else {
        var index = 0
        while (index++ < position) {
          current = current.next
        }
        current.prev.next = current.next
        current.next.prev = current.prev
      }
    }
    this.length--
    return current.data
  }
  // - remove(element) 移除一项
  DoublyLinkedList.prototype.remove = function (data) {
    var index = this.indexOf(data)
    return this.removeAt(index)
  }
  // - getHead 返回链表首部
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data
  }
  // - getHead 返回链表尾部
  DoublyLinkedList.prototype.gettail = function () {
    return this.gettail.data
  }
  // - isEmpty() 判断链表是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0
  }
  // - size() 返回链表的大小
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }
  // - toString() 返回链表内容
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString()
  }

  // - forwardString() 返回向前遍历的节点字符串形式
  DoublyLinkedList.prototype.forwardString = function () {
    var current = this.tail
    var resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.prev
    }
    return resultString
  }
  // - backwardString()返回向后遍历的节点字
  DoublyLinkedList.prototype.backwardString = function () {
    var current = this.head
    var resultString = ''
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }
}
