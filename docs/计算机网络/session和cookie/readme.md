---
title: session和cookie
# icon: note
category: 计算机网络
# star: 9
# sticky: 9
---

## session 和 cookie

- session 代表一次会话
- session 是这次会话的唯一标识

cookie 是浏览器存储的手段
:::tip
用户登陆后，服务器会先进行登陆校验，登陆校验成功后，会生成一个 sessionid 返回给前端。前端把这个存到 cookie 里
:::

## 和其他存储对比

|          | Cookie         | localStorage | sessionStorage |
| -------- | -------------- | ------------ | -------------- |
| 容量     | 4kb            | 10mb         | 5mb            |
| 作用域   | 同源           | 同源         | 当前网页       |
| 过期时间 | 手动控制       | 永久         | 浏览器关闭     |
| 位置     | 浏览器和服务端 | 浏览器       | 浏览器         |

## token

oauth：用户在互联网获取资源的开放授权标准

## 摘要算法

将数据运算成一个不可逆的唯一摘要

### md5

### sha

## 单点登陆

1. 去 oauth 服务器上获取许可，返回令牌
2. 去需要授权的服务请求资源（令牌）
3. 验证令牌
4. 成功
5. 返回数据
