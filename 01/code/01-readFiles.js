/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-08-16 11:48:26
 * @LastEditors: zero
 * @LastEditTime: 2019-08-16 14:03:44
 */
//读取文件
//fs 是file-system的简写，就是文件系统的意思
//在node中如果想要进行文件操作，就必须引入fs这个核心模块
//在fs这个核心模块中，就提供了所有的文件操作相关的API
//例如： fs.readFile方法加载 fs 核心模块

//1.使用require方法加载fs黑犀牛模块
var fs = require('fs')

//2.读取文件
//   第一个参数是要读取文件的文件路劲
//   第二个参数是一个回调函数
//       成功
//          data 数据
//          error null
//       失败
//          data null
//          error 错误对象
fs.readFile('./read_file_test.txt', function (error, data) {
  if (error) {
    console.log('读取文件失败');
    return false
  }
  console.log(data.toString());
})