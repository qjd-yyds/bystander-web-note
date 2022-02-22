function createIterator(items) {
  var i = 0
  return {
    next: function () {
      var done = i >= items.length
      value = done ? undefind : items[i++]
      return {
        done,
        value
      }
    }
  }
}

function createIterator() {
  const keys = Object.keys(this)
  var i = 0
  let that = this
  return {
    next() {
      var done = i >= keys.length
      value = done ? undefind : that[keys[i++]]
      return {
        done,
        value
      }
    }
  }
}
