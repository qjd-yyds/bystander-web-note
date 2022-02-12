// 击鼓传花面试题
function passGame(nameList, num) {
  // 创建一个队列结构
  var queue = new Queue()
  for (var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i])
  }
  while (queue.size() > 1) {
    // 开始数数字，如果是num 删除，不是，加入末尾
    for (var i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue())
    }
    // 淘汰
    queue.dequeue()
  }
  // 获取剩下的人下标
  if (queue.size() === 1) {
    return nameList.indexOf(queue.front())
  }
}