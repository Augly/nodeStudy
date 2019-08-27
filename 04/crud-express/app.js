/*
 * @Descripttion: 创建服务  模板引擎
 * @version: 
 * @Author: zero
 * @Date: 2019-08-23 11:40:02
 * @LastEditors: zero
 * @LastEditTime: 2019-08-27 17:43:39
 */
var express = require('express')
var router = require('./router')
var bodyParser = require('body-parser')
var app = express()
var fs = require('fs')
app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.engine('html', require('express-art-template'))
//配置模板引擎和body-parser 一i的那个要在app.use(router)之前
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
app.listen(3000, function (err, data) {
  if (err) {
    console.log('出错了');
  } else {
    console.log('服务开启成功!');
  }
})