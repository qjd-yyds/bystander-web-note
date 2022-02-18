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
  insertionSort() {
    // 先获取长度
    let len = this.array.length
    // 外层循环，从1开始，0被看成有序
    for (let i = 1; i < len; i++) {
      let prev = i
      // 保存当前元素
      const tem = this.array[i]
      while ((prev > 0) & (this.array[prev - 1] > tem)) {
        // 被审查的元素后移
        this.array[prev] = this.array[prev - 1]
        // 指针前移
        prev--
      }
      this.array[prev] = tem
    }
  }
  // 希尔排序
  shellSort() {
    // 先获取长度
    let len = this.array.length
    // 初始化增量
    let gap = Math.floor(len / 2)
    while (gap >= 1) {
      // 1.以gap作为间隔，进行分组
      for (let i = gap; i < len; i++) {
        // 保存需要交换的值
        const tem = this.array[i]
        let j = i
        while (this.array[j - gap] > tem && j > gap - 1) {
          this.array[j] = this.array[j - 1]
          j -= gap
        }
        this.array[j] = tem
      }
      // 结束循环后需要gap变成原来的一半
      gap = Math.floor(gap)
    }
  }
  // 快速排序
  quickSort() {
    this.#quick(0, this.array.length - 1)
  }
  #quick(left, right) {
    if (left >= right) return
    const pivot = this.median(left, right)
    // 记录当前找到的位置
    let i = left
    let j = right - 1
    while (i < j) {
      // 移动左边指针，如果小于枢纽，移动
      while (this.array[++i] < pivot) {}
      // 移动右边指针，如果大于枢纽，移动
      while (this.array[--j] > pivot) {}
      // 如果i在左边j在右边，互换
      if (i < j) {
        this.swap(i, j)
      } else {
        // 跳出循环
        break
      }
    }
    // 将枢纽移动到正确位置
    this.swap(i, right - 1)
    // 分而治之 继续递归调用
    this.#quick(left, i - 1)
    this.#quick(i + 1, right)
  }
  /*******
   * @description: 获取枢纽
   * @param {Number} left 最左边
   * @param {Number} right 最右边
   * @return {Number} 倒数第二个，返回的枢纽
   */
  median(left, right) {
    let center = Math.floor((left + right) / 2)
    // 排序这三个数
    if (this.array[left] > this.array[center]) {
      this.swap(left, center)
    }
    if (this.array[center] > this.array[right]) {
      this.swap(center, right)
    }
    if (this.array[left] > this.array[right]) {
      this.swap(left, right)
    }
    // 将center换到倒数第二个
    this.swap(center, right - 1)
    // 返回这个枢纽
    return this.array[right - 1]
  }
}
