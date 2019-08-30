/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-30 14:33:31
 * @LastEditors: zero
 * @LastEditTime: 2019-08-30 18:02:17
 */

var express = require("express");
var router = express.Router()

router.get("/", function (req, res) {
  res.render('index.html', {
    name: '张三'
  })
})
router.get("/login", function (req, res) {
  res.render('login.html', {
    name: '仇益阳'
  })
})
router.get("/resister", function (req, res) {
  res.render("resister.html", {
    title: "欢迎注册"
  })
})
router.post("/resister", function (req, res) {

})
module.exports = router