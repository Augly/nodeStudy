/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-19 22:06:24
 * @LastEditors: zero
 * @LastEditTime: 2019-08-20 11:45:41
 */
var http = require('http')
var fs = require('fs')
var serve = http.createServer()
var wwwDir = 'C:/Users/qiuyiyang/Desktop/项目/nodeStudy/02/www'
serve.on('request', function (req, res) {
  const url = req.url
  var filePath = '/index.html'
  if (url !== '/') {
    filePath = req.url
  }
  fs.readFile(wwwDir + filePath, function (err, data) {
    if (err) {
      return res.end('404 Not Found')
    }
    //1.如何得到wwwDir目录列表下的文件名个目录名
    // fs.readdir读取目录
    //2.如果将得到的文件名和目录名替换到template.html中
    res.end(data)
  })
})
serve.listen(3000, function (err, data) {
  if (err) {
    console.log('服务开启失败!')
  } else {
    console.log('服务开启成功!');

  }
})