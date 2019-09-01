/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-09-01 17:54:02
 * @LastEditors: zero
 * @LastEditTime: 2019-09-01 17:55:05
 */

// 为给定AsyncHook实例启用回调。如果没有提供回调，则启用noop。
// 默认情况下禁用AsyncHook实例。如果AsyncHook实例应该在创建后立即启用，则可以使用以下模式。
const async_hooks = require('async_hooks');

const hook = async_hooks.createHook(callbacks).enable();