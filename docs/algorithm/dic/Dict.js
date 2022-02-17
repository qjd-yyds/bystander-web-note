class Dictionay {
  constructor() {
    this.items = {}
  }
  // 添加操作
  set(key, value) {
    this.items[key] = value
  }
  // 查询
  has(key) {
    return this.items.hasOwnProperty(key)
  }
  remove(key) {
    if (!this.has(key)) return false
    delete this.items[key]
    return true
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined
  }
  keys() {
    return Object.keys(this.items)
  }
  values() {
    return Object.values(this.items)
  }
  size() {
    return this.keys().length
  }
  clear() {
    this.items = {}
  }
}

export default Dictionay
