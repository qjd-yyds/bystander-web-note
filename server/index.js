const express = require('express')
const path = require('path')
const router = require('./apiRouter')
const host = 'http://localhost'
const port = 8080
const app = express()

app.use(express.static(path.join(__dirname, 'static')))
app.use('/api', router)
app.listen(port, function () {
  console.log(`app is running${host}:${port}`)
})
