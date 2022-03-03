---
title: html
# icon: note
category: html
# star: 9
# sticky: 9
---

记录一下 html

## BASE64

:::tip
使用四个可见字符，去编码 3 个字节,好处是可见
:::
用 64 个打印字符（A-Za-z0-9）来编码二进制。还有两个字符（加号 和 逗号 等号）空格变成 %2f

## 语义化标签

让标签有意义

### 常见语义化标签

- h1
- ul
- li
- ol
- nav 导航栏
- header
- title
- main
- article
- 等

### 优势

- 代码结构清晰
- 方便其他设备解析（如盲人阅读）
- 有利于 SEO

## 表单增强

新增一些表单属性

<form>
type:text<input type="text" />
<br>
type:color:<input type="color" />
<br>
type:date:<input type="date" />
<br>
type:datetime-local:<input type="datetime-local" />
<br>
type:month:<input type="month" />
<br>
type:range:<input type="range" />
<br>
type:search:<input type="search" />
<br>
type:tel:<input type="tel" />
<br>
type:time:<input type="time" />
<br>
type:url:<input type="url" />
<br>
</form>

## 音频标签 video

```html
<video width="300" height="300" controls="controls">
  <source src="movie.mp4" type="video/mp4" />
</video>
```

## 画布 canvas

## drag

## 本地存储

## webworker

让一些耗时的数据处理从主线程剥离，使主线程更加专注于页面渲染和交互，开启一个新的 js 线程

- 懒加载
- 文本分析
- 流媒体分析
- canvas 绘制
- 图像处理

## serviceWorker

可以共享，开启一个新的进程

- 数据 mock
- 离线应用和缓存 fetch 和 cacheStorage

## 地理位置

## 除了 document 以外的对象

- screen 对象 获取屏幕分辨率
- history 访问过 url
- location 当前 url 信息
- navigator 获取浏览器和操作系统信息
- event 鼠标触发后的对象

## 渲染过程

- 构建 dom 树，解析 html 文件，同时浏览器主进程负责下载 css
- 解析 css，生成 cssom 树
- 将 cssom 和 dom 树生成渲染树 rendertree
- 布局
- 绘制
- 展现：将图层和复合层交给 GPU 进程，GPU 将图层合成，并展示页面

## 重排重绘

### 重绘制

- 颜色
- 背景色

### 重排场景

- 删除或者添加元素
- 位置发生改变
- 尺寸，位置发生变化
- 页面初始化
- 浏览器尺寸改变
- 获取元素计算后的值：offsetTop，srollTop，clientTop

### 优化思路

- 能重绘，尽量不重排
- 能少排，不多排
- 小区域排
- 避免无效重排
- 利用 GPU 资源
- 分离读写操作：读取属性会强制重排，尽量一次全部获取
- 样式修改操作：修改布局的操作写在一起
- 缓存布局
- 代码碎片 fragment
- 操作 dom 之前先 display 为 none，完成操作后再 block
- 优化动画 absolute 和 fixed 上，GPU 硬件加速

## script 写在 head 和 body 一定会阻塞吗

```html
<!-- 这个不会造成阻塞，异步获取后执行 -->
<script async="async" src="xxx.js"></script>
<!-- 不会造成阻塞，等渲染树加载后在执行 -->
<script defer="defer" src="xxx.js"></script>
```
