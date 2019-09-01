/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-09-01 17:00:45
 * @LastEditors: zero
 * @LastEditTime: 2019-09-01 17:13:10
 */
const async_hooks = require('async_hooks');

// Return the ID of the current execution context.
// 返回当前执行上下文的ID
const eid = async_hooks.executionAsyncId();

// Return the ID of the handle responsible for triggering the callback of the current execution scope to call.
// 返回句柄的ID，该句柄负责触发要调用的当前执行范围的回调
const tid = async_hooks.triggerAsyncId();

// Create a new AsyncHook instance. All of these callbacks are optional.
// 创建一个新的AsyncHook实例。所有这些回调都是可选的
const asyncHook =
  async_hooks.createHook({ init, before, after, destroy, promiseResolve });

// Allow callbacks of this AsyncHook instance to call. This is not an implicit
// 允许调用此AsyncHook实例的回调。这不是隐式的
// action after running the constructor, and must be explicitly run to begin
// 操作运行构造函数后，必须显式运行才能开始
// executing callbacks.
// executing callbacks
asyncHook.enable();

// Disable listening for new asynchronous events.
// 禁用侦听新的异步事件
asyncHook.disable();

//
// The following are the callbacks that can be passed to createHook().
//
// 下面是可以传递给createHook()的回调

// init is called during object construction. The resource may not have
// 在对象构造期间调用init。资源可能没有
// completed construction when this callback runs, therefore all fields of the resource referenced by "asyncId" may not have been populated.
// 当这个回调运行时，已完成构造，因此“asyncId”引用的资源的所有字段可能尚未填充。
function init(asyncId, type, triggerAsyncId, resource) { }

// Before is called just before the resource's callback is called. It can be
// called 0-N times for handles (e.g. TCPWrap), and will be called exactly 1
// time for requests (e.g. FSReqCallback).
//在调用资源的回调之前调用Before。它可以
//对句柄(例如TCPWrap)调用0-N次，并且将被精确地调用1次(例如FSReqCallback)。
function before(asyncId) { }

// After is called just after the resource's callback has finished.
// After在资源的回调完成后调用。
function after(asyncId) { }

// Destroy is called when an AsyncWrap instance is destroyed.
// 当销毁AsyncWrap实例时调用Destroy。
function destroy(asyncId) { }

// promiseResolve is called only for promise resources, when the
// `resolve` function passed to the `Promise` constructor is invoked
// (either directly or through other means of resolving a promise).
//只对promise资源调用promise eresolve，当调用传递给“Promise”构造函数的“resolve”函数(直接或通过其他方式解决承诺)
function promiseResolve(asyncId) { }