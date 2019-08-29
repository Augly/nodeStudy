/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-29 09:48:46
 * @LastEditors: zero
 * @LastEditTime: 2019-08-29 09:52:41
 */
var fs = require('fs')
//promise是一个构造函数
//promise容器一旦创建就开始执行里面的代码
function pReadFile(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

pReadFile('../data/a.txt').then((data) => {
  console.log(data);
})