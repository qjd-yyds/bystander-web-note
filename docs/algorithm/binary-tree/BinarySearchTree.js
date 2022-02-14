// 子节点
function Node(key) {
  this.left = null
  this.key = key
  this.right = null
}
// 封装二叉搜索树
function BinarySearchTree() {
  this.root = null
  // - serach(key) 查找指定键，没找到返回 false 找到返回 true
  // - inOrderTraverse 通过中序遍历所有节点
  // - preOrderTraverse 先序
  // - postOrderTraverse 后序
  // - min 返回最小的值/键
  // - max 返回最大值/键
  // - remove 移除某个键
}
// - insert(key) 插入新的键 对外暴露方法
BinarySearchTree.prototype.insert = function (key) {
  // 1.创建子节点
  var node = new Node(key)
  // 2.判断根节点是否有值
  if (this.root == null) {
    this.root = node
  } else {
    // 执行插入
    this.insertNode(this.root, node)
  }
}
// 插入node
BinarySearchTree.prototype.insertNode = function (node, newNode) {
  if (newNode.key < node.key) {
    // 左查找，如果左边没有，就赋值
    if (node.left == null) {
      node.left = newNode
    } else {
      // 递归插入，如果左边有值，继续查找左边的子节点
      this.insertNode(node.left, newNode)
    }
  } else {
    // 右查找
    if (node.right == null) {
      node.right = newNode
    } else {
      // 递归插入
      this.insertNode(node.right, newNode)
    }
  }
}
