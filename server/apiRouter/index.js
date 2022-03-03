const path = require('path')
const express = require('express')
const fileApi = require('./file')
const httpstatus = require('./http')
const router = express.Router()
fileApi(router)
httpstatus(router)
// fetch('/api/product', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'use'
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })

router.get('/ajax/user', function (req, res, next) {
  res.json({
    name: '张三',
    age: 12,
    id: '001'
  })
})

module.exports = router
