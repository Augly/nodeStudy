/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-08-20 14:08:45
 * @LastEditors: zero
 * @LastEditTime: 2019-08-20 14:31:20
 */
//art-template
//安装
//  npm install art-template 
var template = require('art-template')
var ret = template.render('hellow{{name}}', {
  name: 'Jack'
})
console.log(ret);
