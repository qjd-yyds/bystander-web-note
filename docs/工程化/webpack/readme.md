---
title: webpack
# icon: note
category: 工程化
# star: 9
# sticky: 9
---

## 核心概念

- entry 入口
- output 出口
- loader 模块转换器，将模块的原内容按照需求转换成新内容
- plugin 扩展插件 在 webpack 构建过程的特定时机注入扩展逻辑，起到优化或者改变构建结果
- mode 控制打包环境
- devserver 小型的 express 服务器，使用 webpack-dev-middleware 中间件为 webpack 提供服务

## sourceMap 是什么

在编译处理的过程中，在生成代码的同时被转换的部分和源代码对应部分的映射关系

- sourcemap 其实就是两个代码的映射关系
- js，css，java 都可以有
- chrome 也做了 sourcemap 的解析功能

### webpack 中的 sourcemap

```js
module.exports = {
  devtool: 'source-map'
}
```

## 文件指纹技术

源文件 hash 内容摘要
哈希算法（摘要算法）明文转成密文，数据有丢失，所以不可逆

- 版本控制
- 缓存

## 什么是 chunk

webpack 会根据模块依赖图的内容组织分包---chunk 对象

- 同一个 entry 的生成一个 chunk
- 异步模块单独成一个 chunk
- 懒加载单独成一个 chunk
- `entry.runtime`单独成一个 chunk（nodejs 运行时和 webpack 运行时代码）

## 优化

### 打包效率

- speed-measure-webpack-plugin：打印每个 loader 的执行时间
- exclude/include 缩小转义范围
- 缓存技术 cache-loader
- 并行处理：happyPack 并行打包工具
- noparse：如果第三方没有提供 AMD/Commonjs 规范版本，可以使用`noparse`这个来标识，这样 webpack 就不会转化和编译，从而提高 webpack 构建性能，例如`jquery`,`lodash`

```js
module.exports = {
  module: {
    noparse: /jquery|lodash/
  }
}
```

### 提高页面性能

- `压缩代码`:删除多余代码注释简化代码。利用`uglifyPlugin`和`parallelUglifyPlugin`来压缩 js，使用`cssnano`（css-loader?minimize）压缩 css
- `CDN加速`:构建过程，静态代码修改到 CDN 上
- `treeShaking`:代码不会执行的片段删除。可以在启动 webpack 追加参数`--optimize-minimize`
- `codeSplitting`:代码分割，这样可以组件分快，充分利用浏览器缓存
- `作用域提升`：减少一些变量声明

## 执行流程
