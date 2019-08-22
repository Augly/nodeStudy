/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-08-22 16:11:31
 * @LastEditors: zero
 * @LastEditTime: 2019-08-22 17:52:44
 */
const express = require('express')

//创建你的服务器应用程序
var app = express()

//处理请求
app.get('/', function (req, res) {
  //发送反馈信息
  res.send('hellow express')
})
app.get('/about', function (req, res) {
  res.send('你好这是About')
})
app.listen('3000', function (error, data) {
  if (error) {

  } else {
    console.log('服务器启动成功!');

  }
})