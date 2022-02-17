import Queue from '../queue/Queue'
import Dictionay from '../dic/Dict'
// 图
class Graph {
  constructor() {
    this.vertexes = [] // 顶点
    this.edges = new Dictionay() // 边
  }
  // 添加顶点方法
  addVertexes(v) {
    this.vertexes.push(v)
    this.edges.set(v, [])
  }
  addEdge(v1, v2) {
    // 因为是无项
    this.edges.get(v1).push(v2)
    // 对称添加
    this.edges.get(v2).push(v1)
  }
  toString() {
    // 1.定义一个字符串保存结果
    let resultString = ''
    // 遍历所有的顶点
    this.vertexes.forEach(vertex => {
      resultString += vertex + '->'
      // 拿到当前顶点对应的边
      const vEdges = this.edges.get(vertex)
      vEdges.forEach(edge => {
        resultString += edge
      })
      resultString += '\n'
    })
    return resultString
  }
  // 初始化状态颜色
  initializeColor() {
    const colors = []
    this.vertexes.forEach(item => {
      colors[item] = 'white'
    })
    return colors
  }
  // 广度优先搜索
  bfs(initV, handler) {
    // 初始化颜色
    const color = this.initializeColor()
    // 创建队列
    const queue = new Queue()
    // 把顶点加入队列
    queue.enqueue(initV)
    while (queue.isEmpty()) {
      // 取出队列里的顶点
      const v = queue.dequeue()
      // 获取相连的另外顶点
      const vList = this.edges.get(v)
      // v的颜色变成灰色
      color[v] = 'gray'
      vList.forEach(item => {
        if (color[item] === 'white') {
          color[item] = 'gray'
          queue.enqueue(item)
        }
      })
      // 访问顶点
      handler(v)
      color[v] = 'black'
    }
  }
  // 深度优先搜索
  dfs(initV, handler) {
    const color = this.initializeColor()
    this.dfsVisit(initV, color, handler)
  }
  dfsVisit(v, colors, handler) {
    colors[v] = 'gray'
    // 处理顶点
    handler(v)
    // 访问相邻的其他顶点
    const vList = this.edges.get(v)
    vList.forEach(item => {
      if (color[item] === 'white') {
        // 递归访问
        this.dfsVisit(item, colors, handler)
      }
    })
    // 把v设置成黑色
    colors[v] = 'black'
  }
}
