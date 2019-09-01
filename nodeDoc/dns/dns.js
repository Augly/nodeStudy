/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-09-01 18:17:49
 * @LastEditors: zero
 * @LastEditTime: 2019-09-01 18:41:20
 */
const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log(hostname, service);
  // 打印: localhost ssh
});