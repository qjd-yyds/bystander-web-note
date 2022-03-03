const path = require('path')
const bodyParser = require('body-parser')
const fileupload = require('express-fileupload')
const fs = require('fs')
module.exports = function (router) {
  // 文件提交
  router.get('/submit', (req, res) => {
    // 测试一下cookie
    res.setHeader('Set-Cookie', 'abc=123')
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
}
