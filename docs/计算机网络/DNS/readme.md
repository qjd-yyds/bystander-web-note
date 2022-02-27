---
title: DNS基础
# icon: note
category: 计算机网络
# star: 9
# sticky: 9
---

## 统一资源定为符（URL）

https://www.example.com:8080/books?id=100#Good

- https scheme 协议
- www.example.com host 主机
- 8080 port 端口
- /books path 路径
- ?id=100 query
- #Good fragment

## DNS Query 过程
当输入www.baidu.com的时候，会触发NDS查询
1. 先查询本地服务商，没有存储baidu，进入下一步
2. 查询根域名服务，没有存储baidu，进入下一步
3. 查询.com顶级域名，没有存储baidu，进入下一步
3. 权威域名服务器