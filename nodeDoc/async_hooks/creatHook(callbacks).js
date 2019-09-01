/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-09-01 17:26:00
 * @LastEditors: zero
 * @LastEditTime: 2019-09-01 18:35:01
 */
const async_hooks = require('async_hooks');

/**
 * @name: createHook
 * @msg:
 *  createHook(callbacks)
 *  callbacks={init,before,after,destroy}
 * @param {object}
 * @return: 用于禁用和启用钩子的实例
 */
// 为每一个异步操作的不同的生命周期调用不同的方法
// 这些回调方法 init()/before()/after()/destroy()都是在资源的生命周期中对应的函数
// 所有的回调都是可选的。例如，如果仅仅只是需要跟踪资源是否被清理，那么只需要调用destroy钩子就行。可以传递给回调函数的所有函数的详细信息都在HOOk回调部分中

const asyncHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) { },
  destroy(asyncId) { }
});

// 回调将通过原型链继承
class MyAsyncCallbacks {
  init(asyncId, type, triggerAsyncId, resource) { }
  destroy(asyncId) { }
}

class MyAddedCallbacks extends MyAsyncCallbacks {
  before(asyncId) { }
  after(asyncId) { }
}

const asyncHook = async_hooks.createHook(new MyAddedCallbacks());

// 在异步钩子回调中打印日志
// 因为打印到控制台是一个异步操作，console.log()将导致调用AsyncHooks回调。因此，在AsyncHooks回调函数中使用console.log()或类似的异步操作将导致无限递归。在调试时，一个简单的解决方案是使用同步日志操作，比如fs。writeFileSync(文件、味精、国旗)。这将打印到文件中，并且不会递归调用AsyncHooks，因为它是同步的。
// 如果日志记录需要异步操作，则可以使用AsyncHooks本身提供的信息跟踪导致异步操作的原因。然后，当日志本身导致AsyncHooks回调调用时，应该跳过日志记录。这样做就打破了无限递归。

const fs = require('fs');
const util = require('util');

function debug(...args) {
  // Use a function like this one when debugging inside an AsyncHooks callback
  fs.writeFileSync('log.out', `${util.format(...args)}\n`, { flag: 'a' });
}