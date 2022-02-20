;(function (root) {
  var _ = function (data) {
    if (!(this instanceof _)) {
      return new _(data)
    }
    this.wrapper = data
  }
  _.unique = function (source, callback) {
    var result = []
    for (var i = 0; i < source.length; i++) {
      var target = callback ? callback(source[i]) : source[i]
      if (result.indexOf(target) === -1) {
        result.push(target)
      }
    }
    return result
  }
  // 获取可枚举属性
  _.possess = function (target) {
    var result = []
    for (var key in target) {
      result.push(key)
    }
    return result
  }
  // 开启管道
  _.chain = function (source) {
    // 返回特殊的实例
    var instacne = _(source)
    instacne._chain = true
    return instacne
  }
  _.qjd = function (source) {
    source.push('qjd')
    return source
  }
  // 循环执行属性方法
  var beforHook = function (keys, callback) {
    for (var i = 0; i < keys.length; i++) {
      callback(keys[i])
    }
  }
  // 判断是否是流式调用，是的话返回新的实例
  var model = function (instacne, outcome) {
    if (instacne._chain) {
      instacne.wrapper = outcome
      return instacne
    }
    return outcome
  }
  // 结束链式方法
  _.prototype.value = function () {
    return this.wrapper
  }
  _.mixin = function (target) {
    // 将_的可枚举对象全部扩展到原型上
    beforHook(target.possess(target), function (key) {
      // 需要执行的函数
      var func = target[key]
      _.prototype[key] = function () {
        var decon = [this.wrapper]
        Array.prototype.push.apply(decon, arguments)
        return model(this, func.apply(this, decon))
      }
    })
  }
  _.mixin(_)
  root._ = _
})(this)
