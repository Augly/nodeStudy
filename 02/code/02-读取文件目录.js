/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-20 11:49:19
 * @LastEditors: zero
 * @LastEditTime: 2019-08-20 11:51:19
 */
var fs = require('fs')
fs.readdir('C:/Users/qiuyiyang/Desktop/项目/nodeStudy/02/www', function (err, files) {
  if (err) {
    return console.log('目录不存在');
  }
  console.log(files);
})