/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-16 14:07:34
 * @LastEditors: zero
 * @LastEditTime: 2019-08-16 15:43:51
 */
// 创建一个简单的web服务器
// 使用核心模块http
// 1.加载http核心模块
var http = require('http')
// 2.使用http.createServer()方法创建一个web服务器，返回一个Server实例
var server = http.createServer()
// 3.服务器要干嘛
//   提供服务：数据服务
//   发请求
//   接受请求
//   处理请求
//   给个反馈(发送响应)
//   注册request 请求事件
//   当客户端请求过来，就回自动触发服务器的request请求事件，然后执行第二个参数：请求回调
//    request 请求对象
//    response响应对象
//        响应对象可以用来给客户端发送响应消息
server.on('request', function (request, response) {
  console.log('收到客户端的请求了,请求路径是:' + request.url);
  //response 对象有一个方法，write可以用来给客户端发送响应数据
  //write 可以使用多次，但是最后一次一定要使用end来结束响应，否则客户端会一直等待
  response.write('hello')
  response.end()
})

//4.绑定端口号，启动服务器
server.listen(3000, function () {
  console.log('服务器启动,可以通过http://127.0.0.1:3000/来进行访问');
})
//5.request请求事件处理函数，需要接受两个参数


