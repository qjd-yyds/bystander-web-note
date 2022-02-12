const express = require('express')

const router = express.Router()
router.get('/ajax/user', function (req, res, next) {
  res.json({
    name: '张三',
    age: 12,
    id: '001'
  })
})
module.exports = router
