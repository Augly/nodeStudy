/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-08-16 13:55:03
 * @LastEditors: zero
 * @LastEditTime: 2019-08-16 14:05:02
 */
var fs = require('fs')

const data = '我是写文件'
//写入文件
//   第一个参数是要读取文件的文件路劲
//   第二个参数是写入数据
//   第二个参数是一个回调函数只有error
//       成功
//          error null
//       失败
//          error 错误对象
fs.writeFile('./write_file_test.txt', data, function (error) {
  if (error) {
    console.log('写入失败');
    return false
  }
  console.log('写入成功');
})