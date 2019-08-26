/*
 * @Descripttion:路由模块，配置路由路径，模块职责单一，增强可维护性
 * @version:
 * @Author: zero
 * @Date: 2019-08-26 14:41:23
 * @LastEditors: zero
 * @LastEditTime: 2019-08-26 17:03:35
 */
//引入文件核心模块
var fs = require('fs')
//express更好的方式
var express = require('express')
//创建一个路由容器
var router = express.Router()

var tool = require('./tool.js')
router.get('/students', function (req, res) {
  //body
  tool.find(function (err, data) {
    if (err) {
      return res.status(500).send('Serve error')
    }
    res.render('index.html', {
      fruits: [
        '香蕉',
        '苹果',
        '橘子',
        '龙哥'
      ],
      students: data
    })
  })
  // fs.readFile('./db.json', 'utf8', function (err, data) {
  //   if (err) {
  //     return res.status(500).send('Serve error')
  //   }
  //   res.render('index.html', {
  //     fruits: [
  //       '香蕉',
  //       '苹果',
  //       '橘子',
  //       '龙哥'
  //     ],
  //     students: data
  //   })
  // })

})
router.get('/students/new', function (req, res) {
  res.send('new new new new')
})

module.exports = router