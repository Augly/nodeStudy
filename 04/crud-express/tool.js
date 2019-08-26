/*
 * @Descripttion:数据操作文件模块，操作数据，不关心业务
 * @version:
 * @Author: zero
 * @Date: 2019-08-26 16:11:48
 * @LastEditors: zero
 * @LastEditTime: 2019-08-26 16:27:27
 */
var fs = require('fs')
var dbpath = './db.json'
/**
 * @name:
 * @msg:
 * @param {type}
 * @return:
 */
exports.find = function (callback) {
  fs.readFile(dbpath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
