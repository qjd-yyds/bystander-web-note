const path = require('path')
const express = require('express')
const fileupload = require('express-fileupload')
const bodyParser = require('body-parser')
const fs = require('fs')
const router = express.Router()
router.get('/ajax/user', function (req, res, next) {
  res.json({
    name: '张三',
    age: 12,
    id: '001'
  })
})
// fetch('/api/product', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'use'
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
router.post('/product', function (req, res, next) {
  const contentType = req.headers['content-type']
  let reqText = ''
  const data = {
    success: 'ok'
  }
  req.on('data', buffer => {
    // 这里使用流收集数据，因为http不是一次把所有数据都返回
    reqText += buffer.toString('utf-8')
  })
  req.on('end', () => {
    switch (contentType) {
      case 'application/json':
        res.set('Content-Type', 'application/json')
        res.status(201).send(JSON.stringify(data)) // 201表示创建意思
        reqText = JSON.parse(reqText)
        break
    }
  })
})
// 表示修改数据
router.put('/product/:id', (req, res) => {
  console.log(req.params.id)
  res.sendStatus(204) // 204表示成功但是没有内容
})
// 表示删除数据
router.delete('/product/:id', (req, res) => {
  console.log(req.params.id)
  res.sendStatus(204) // 204表示成功但是没有内容
})

// 重定向
router.get('/301', (req, res) => {
  // 永久重定向get方式
  res.redirect(301, '/api/def')
})
router.get('/3011', (req, res) => {
  // 重定向post方式，这个时候报错了！
  res.redirect(301, '/api/def1')
})
router.get('/def', (req, res) => {
  res.send('this is def')
})
router.post('/def1', (req, res) => {
  res.send('this is def1')
})

// 临时重定向get
router.get('/302', (req, res) => {
  res.redirect(302, '/api/def')
})
// 临时重定向方法相同
router.post('/307', (req, res) => {
  res.redirect(307, '/api/def1')
})

// 找不到
router.get('/404', (req, res) => {
  res.sendStatus(404) // 内容没有找到
})
router.get('/403', (req, res) => {
  res.sendStatus(403) // 禁止访问
})
router.get('/500', (req, res) => {
  throw Error('ssd') // 服务器报错 返回500
})
router.get('/502', (req, res) => {
  res.sendStatus(502) // 网关错误
})

// 文件提交
router.get('/submit', (req, res) => {
  // __dirname当前目录
  res.sendFile(path.resolve(__dirname, '../static/submit.html'))
})
// 上传文件
router.post('/submit', fileupload(), (req, res) => {
  const file = req.files.file
  file.mv(path.resolve(__dirname, `../static/${file.name}`))
  res.sendStatus(201)
})
router.get('/submit64', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../static/h5.html'))
})
router.post('/submit64', bodyParser.json(), (req, res) => {
  const buffer = new Buffer(req.body.data, 'base64')
  fs.readFileSync(path.resolve(__dirname, `../static/upload/x.png`), buffer)
  res.sendStatus(201)
})
router.get('/submitblob', bodyParser.json(), (req, res) => {
  res.sendFile(path.resolve(__dirname, '../static/h5.html'))
})
router.post('/submitblob', fileupload(), (req, res) => {
  const file = req.files.file
  res.sendStatus(201)
  file.mv(path.resolve(__dirname, `../static/${file.name}`))
})
module.exports = router
