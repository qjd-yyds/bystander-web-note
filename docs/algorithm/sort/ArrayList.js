class ArrayList {
  constructor() {
    this.array = []
  }
  insert(item) {
    this.array.push(item)
  }
  toString() {
    return this.array.join('-')
  }
  // 交换两个位置数据
  swap(m, n) {
    const tem = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = tem
  }
  // 冒泡排序
  bubbleSort() {
    const len = this.array.length
    // 反向循环，每次循环少一次
    for (let j = len - 1; j >= 0; j--) {
      // 每次循环换位置
      for (let i = 0; i < j; i++) {
        if (this.array[i] > this.array[i + 1]) {
          // 交换
          this.swap(i, i + 1)
        }
      }
    }
  }
  // 选择排序
  selectionSort() {
    const len = this.array.length
    for (let j = 0; j < len - 1; j++) {
      // 记录最小项的下标
      let min = j
      // 每次循环 向右移动，即下标0->下标1
      for (let i = min + 1; i < len; i++) {
        // 取出最小的那个下标
        if (this.array[min] > this.array[i]) {
          min = i
        }
      }
      // 交换数据
      this.swap(min, j)
    }
  }
  // 插入排序
  // 希尔排序
  // 快速排序
}
