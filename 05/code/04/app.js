/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-29 22:44:10
 * @LastEditors: zero
 * @LastEditTime: 2019-08-30 21:45:11
 */
var express = require('express')
var path = require('path')
var bodyParser = require("body-parser")
var router = require("./router")
var app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules', express.static(path.join(__dirname, './node_modules/')))
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)
// app.get('/', function (req, res) {
//   res.render('index.html', {
//     name: '张三'
//   })
// })
app.listen(5000, function () {
  console.log('running');
})
