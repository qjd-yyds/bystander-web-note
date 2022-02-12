# AJAX

## 什么是 AJAX

- 使用 XMLHttpRequest 对象与服务器通信
- 它可以使用 JSON，XML，HTML 和 text 文本等格式发送和接收数据
- 可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面

## 如何创建 XMLHttpRequest

为使用 js 向服务器器发送一个 http 请求，首先需要创建一个包含函数功能的对象实例。IE 浏览器的 ActiveX 对象是 XMLHTTP 的前身，随后其他浏览器也实现类似方法，被称为 **XMLHttpRequest**

为了对 ie 的兼容可以使用以下方法创建 XMLHttpRequest 对象

```js
var httpRequest
if (window.XMLHttpRequest) {
  // Mozilla, Safari, IE7+ ...
  httpRequest = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  // IE 6 and older
  httpRequest = new ActiveXObject('Microsoft.XMLHTTP')
}
```

## 处理 XMlHttp 请求对象

发送一个请求后，你会收到响应。可以将你要处理的函数赋值给他

```js
httpRequest.onreadystatechange = function () {
  // 监听httpRequest的state变化处理函数
}
```

## 发送一个实际的请求

通过调用 HTTP 请求对象的 open()和 send()方法
:::tip 像下面这样
httpRequest.open('GET',URL,true)

httpRequest.send()
:::
### httpRequest.open()
- open() 的第一个参数是 HTTP 请求方法 - 有 GET，POST，HEAD 以及服务器支持的其他方法。 保证这些方法一定要是大写字母，否则其他一些浏览器（比如 FireFox）可能无法处理这个请求
- 第二个参数是你要发送的 URL。由于安全原因，默认不能调用第三方 URL 域名。 确保你在页面中使用的是正确的域名，否则在调用 open() 方法是会有 "permission denied" 错误提示。
- 第三个参数是可选的，用于设置请求是否是异步的。如果设为 true (默认值)，即开启异步
### httpRequest.send()
send() 方法的参数可以是任何你想发送给服务器的内容，如果是 POST 请求的话。发送表单数据时应该用服务器可以解析的格式
类似 multipart/form-data，JSON，XML 等。

如果你使用 POST 数据，那就需要设置请求的 MIME 类型。比如，在调用 send() 方法获取表单数据前要有下面这个：

`httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');`
### httpRequest.readyState
请求的状态码
+ 0 (未初始化) or (请求还未初始化)
+ 1 (正在加载) or (已建立服务器链接)
+ 2 (加载成功) or (请求已接受)
+ 3 (交互) or (正在处理请求)
+ 4 (完成) or (请求已完成并且响应已准备好)
### httpRequest.status
响应的状态码 具体有哪些状态码可以参考 [w3c](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
## 一个简单例子

:::tip
以谷歌浏览器为例！不会还有人在兼容 ie 吧！
:::
