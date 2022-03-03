---
title: 同源策略
category: 计算机网络
---

## 定义

禁止一个源脚本和文档的另外一个源脚本进行交互
:::tip
如果两个源相同 protocol，port，host 相同，那么同源
:::

## 跨域的方式

### irame 使用 postmessage

###　 jsonp
利用不限制跨域脚本执行
他是一个ｇｅｔ请求

### CORS 跨域资源共享

跨域资源共用，使用额外的 HTTP 头允许指定的源和另一个源进行交互

服务器给一个 Access-Control-Allow-Origin:https://a.com
:::tip 简单请求
GET/POST/HEAD
:::

- 预检
  - 一个 options 复杂请求，会先发送一个预检，来询问服务器当前的请求是否可以
  - 返回允许方法，允许的时长，允许的请求地址
  - 浏览器再次发送请求

### 代理

使用一个代理服务器去请求
