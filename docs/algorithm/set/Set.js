function CSet() {
  this.items = {}
  // + add(value) 向集合添加新的项
  CSet.prototype.add = function (value) {
    // 判断是否包含该值
    if (this.has(value)) return false
    this.items[value] = value
    return true
  }
  // + remove(value) 从集合移除一个值
  CSet.prototype.remove = function (value) {
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }
  // + has(value) 判断值是否存在集合中
  CSet.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
  }
  // + clear() 移除集合中的所有项
  CSet.prototype.clear = function (value) {
    this.items = {}
  }
  // + size() 返回集合的长度
  CSet.prototype.size = function () {
    return Object.keys(this.items).length
  }
  // + values() 返回集合所有值的数组
  CSet.prototype.values = function () {
    return Object.keys(this.items)
  }
  // 集合间的操作
  // 并集
  CSet.prototype.union = function (otherSet) {
    var unionSet = new CSet()
    // 所有元素添加到集合
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    // 取出b元素
    values = otherSet.values()
    for (var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  // 交集
  CSet.prototype.intersection = function (otherSet) {
    var intersection = new CSet()
    // 从a拿出一个个元素，判断是否存在b中，存在放入新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (otherSet.has(item)) {
        intersection.add(item)
      }
    }
    return intersection
  }
  // 差集
  CSet.prototype.difference = function (otherSet) {
    var difference = new CSet()
    // 从a拿出一个个元素，判断是否存在b中，不存在放入新集合中
    var values = this.values()
    for (var i = 0; i < values.length; i++) {
      var item = values[i]
      if (!otherSet.has(item)) {
        difference.add(item)
      }
    }
    return difference
  }
  // 子集
  CSet.prototype.subset = function (otherSet) {
    // 遍历如果全部包含，那么就是子集
    var values = this.values
    return values.every(item => {
      otherSet.has(item)
    })
  }
}
