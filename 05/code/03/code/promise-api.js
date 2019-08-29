/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-29 09:27:53
 * @LastEditors: zero
 * @LastEditTime: 2019-08-29 09:48:22
 */
var fs = require('fs')
//promise是一个构造函数
//promise容器一旦创建就开始执行里面的代码
var p1 = new Promise(function (resolve, reject) {
  console.log(2);
  fs.readFile('../data/b.txt', 'utf8', function (err, data) {
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
})

p1.then((data) => {
  console.log(data);

}, (err) => {
  console.log(err);

})


