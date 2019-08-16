/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-16 16:12:24
 * @LastEditors: zero
 * @LastEditTime: 2019-08-16 16:42:02
 */
var http = require('http')
var server = http.createServer()
server.on('request', function (req, res) {
  console.log('收到请求了', req.url);
  // res.end('hello!')
  //根据不同的请求路径返回不同的数据
  //1.获取请求路径
  //2.判断路径响应
  //只能给客户端返回字符串和二进制
  if (req.url === '/a') {
    res.end('is A')
  } else {
    res.end('is no use')
  }
})
server.listen('3000', function () {
  console.log('服务器启用成功！可以访问了');
})