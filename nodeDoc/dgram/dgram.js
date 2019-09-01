/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-09-01 18:46:49
 * @LastEditors: zero
 * @LastEditTime: 2019-09-01 21:42:01
 */
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const message = Buffer.from('一些字节');
server.send(message, 41234, 'localhost', (err, data) => {
  console.log(data);
});
server.on('error', (err) => {
  console.log(`服务器异常：\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`服务器接收到来自 ${rinfo.address}:${rinfo.port} 的 ${msg}`);
});

server.on('listening', () => {
  const address = server.address();
  console.log(`服务器监听 ${address.address}:${address.port}`);
});

// server.bind(41233);
// 服务器监听 0.0.0.0:41234