/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-16 16:43:30
 * @LastEditors: zero
 * @LastEditTime: 2019-08-26 11:52:27
 */
// node为javascript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了。
// 例如文件操作的fs核心模块，http服务构建的http模块，payh路径操作模块，os操作系统信息模块。。。


var os = require('os')
console.log(os.cpus());
console.log(os.totalmem());
