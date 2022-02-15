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
// 插入node,
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
// 先序遍历，先处理，就叫先序
BinarySearchTree.prototype.preOrderTraversal = function (handler) {
  this.preOrderTraversalNode(this.root, handler)
}
// 第一次node=>11
// 第二次node =>7
// 第三次node =>5
// 第四次node =>3
// 第四次node =>null
BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
  // 递归处理子树
  if (node != null) {
    // 处理经过的节点
    handler(node.key)
    // 遍历所有左子树
    this.preOrderTraversalNode(node.left, handler)
    // 遍历所有右子树
    this.preOrderTraversalNode(node.right, handler)
  }
}
// 中序遍历
BinarySearchTree.prototype.midOrderTraversal = function (handler) {
  this.midOrderTraversalNode(this.root, handler)
}
BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
  if (node != null) {
    // 先遍历左子树
    this.midOrderTraversalNode(node.left, handler)
    // 处理经过的树
    handler(node.key)
    // 先遍历右子树
    this.midOrderTraversalNode(node.right, handler)
  }
}
// 后序遍历
BinarySearchTree.prototype.postOrderTraversal = function (handler) {
  this.postOrderTraversalNode(this.root, handler)
}
BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
  //  5
  // 3 6
  // 为例
  // 查询到最左侧3
  // 3 的左侧 为null 跳出
  // 3的右侧为null 跳出
  // 打印3
  // 3是5的左子树
  // 出栈 进入5的执行栈
  // 5的右子树
  // 进入6的执行栈
  // 6的左侧null
  // 6的右侧null
  // 打印6
  // 出栈,进入5的执行栈
  // 这个时候5的左右子树遍历完成
  // 打印5,出栈,进入上一级
  if (node != null) {
    // 先遍历左子树
    this.postOrderTraversalNode(node.left, handler)
    // 再遍历右子树
    this.postOrderTraversalNode(node.right, handler)
    // 再处理节点
    handler(node.key)
  }
}
// 最小值
BinarySearchTree.prototype.min = function () {
  // 思路是查询最后的左子树
  var node = this.root
  var key = null
  while (node != null) {
    key = node.key
    node = node.left
  }
  return key
}
// 最大值
BinarySearchTree.prototype.max = function () {
  //依次向右不断查找
  var node = this.root
  var key = null
  while (node != null) {
    key = node.key
    node = node.right
  }
  return key
}
// 搜索特定的值
BinarySearchTree.prototype.search = function (key) {
  // 1.获取根节点
  var node = this.root
  // 2.循环搜索key
  while (node != null) {
    if (node.key > key) {
      node = node.left
      // 遍历左子树
    } else if (node.key < key) {
      node = node.right
    } else {
      return true
    }
  }
  return false
}
// 删除操作
BinarySearchTree.prototype.remove = function (key) {
  // 1先找到需要删除的节点，没有找到就不删除
  // 1.1定义变量
  var current = this.root
  var parent = null
  var isLeftChild = true // 是否是左节点
  // 1.2查找
  while (current.key != key) {
    parent = current
    if (key < current.key) {
      // 向左移动
      isLeftChild = true
      current = current.left
    } else {
      // 向右移动
      isLeftChild = false
      current = current.right
    }
    // 到最后的节点，依然没有找到key，结束循环返回false
    if (current == null) return false
  }
  // 1.3找到了需要删除的节点
  // 2.根据对应情况删除节点
  // 2.1.删除的节点是叶节点，叶子节点的左子树和右子树都为空（没有子节点）
  if (current.left == null && current.right == null) {
    // 当前节点是根节点
    if (current == this.root) {
      this.root = null
    } else if (isLeftChild) {
      // 当前删除的是左叶节点，父级的左子树变为null
      parent.left = null
    } else {
      parent.right = null
    }
  } else if (current.right == null) {
    if (current == this.root) {
      // 当前节点是根节点，把左节点链接到根节点
      this.root = current.left
    } else if (isLeftChild) {
      // 2.2.删除的节点只有一个左子树（一个子节点）
      // 当前父节点左子树链接当前节点的左子树，并且当前删除的节点有没右子树
      parent.left = current.left
    } else {
      // 当前父节点右子树链接当前节点的左子树，并且当前删除的节点有没右子树
      parent.right = current.left
    }
  } else if (current.left == null) {
    // 2.2.删除的节点只有一个右子树（一个子节点）
    if (current == this.root) {
      // 当前节点是根节点
      this.root = current.right
    } else if (isLeftChild) {
      // 当前父节点左子树链接当前节点的右子树
      parent.left = current.right
    } else {
      // 当前父节点右子树链接当前节点的右子树
      parent.right = current.right
    }
  } else {
    // 2.3.删除的节点有两个子树（两个子节点）
    // 找到最接近current的节点来替换current
    // 找后继节点：稍大于current节点
    // 找前驱节点：稍小于current节点
    // 这边使用查询后继
    var successor = this.getSuccessor(current)
    if (current == this.root) {
      // 根节点
      this.root = successor
    } else if (isLeftChild) {
      parent.left = successor
    } else {
      parent.right = successor
    }
    successor.left = current.left
  }
  return true
}
// 找后继方法
BinarySearchTree.prototype.getSuccessor = function (delNode) {
  // 保存找到的后继
  var successor = delNode
  var current = delNode.right
  // 父节点
  var successorParent = delNode
  // 循环查找
  while (current != null) {
    successorParent = successor // 替换父级
    successor = current
    current = current.left // 依次往左找 最小的
  }
  // 判断寻找的后继节点是否直接是删除节点的右节点，
  if (successor != delNode.right) {
    // 父节点的左节点等于后继元素的右节点
    successorParent.left = successor.right
    // 替换当前后继元素的右节点为删除节点的右子树
    successor.right = delNode.right
  }
  return successor
}
var bst = new BinarySearchTree()
// 测试插入代码
function insertTest() {
  bst.insert(11)
  bst.insert(7)
  bst.insert(15)
  bst.insert(5)
  bst.insert(3)
  bst.insert(9)
  bst.insert(8)
  bst.insert(10)
  bst.insert(13)
  bst.insert(12)
  bst.insert(14)
  bst.insert(20)
  bst.insert(18)
  bst.insert(25)
  bst.insert(6)
}
insertTest()
// 测试先序遍历
function preOrderTraversalTest() {
  // 11=>7=>5=>3=>6=>9=>8=>10=>15=>13=>12=>14=>20=>18=>25
  var str = '先序遍历=>'
  bst.preOrderTraversal(function (key) {
    str += key + ','
  })
  alert(str)
}
// 测试中序遍历
function midOrderTraversalTest() {
  // 3=>5=>6=>7=>8=>9=>10=>11=>12=>13=>14=>15=>18=>20=>25
  var str = '中序遍历=>'
  bst.midOrderTraversal(function (key) {
    str += key + ','
  })
  alert(str)
}
// 测试后序遍历
function postOrderTraversalTest() {
  // 3=>6=>5=>8=>10=>9=>7=>12=>14=>13=>18=>25=>20=>15=>11
  var str = '后序遍历=>'
  bst.postOrderTraversal(function (key) {
    str += key + ','
  })
  alert(str)
}
