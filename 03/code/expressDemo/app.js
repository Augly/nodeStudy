const express = require('express')

var app = express()
app.get('/', function (req, res) {
  res.send('hello 你好 world!')
})
app.listen(3000, function (err, data) {
  if (err) {
    console.log('服务器启动失败');
  } else {
    console.log('服务启动成功!');
  }
})