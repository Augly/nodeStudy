/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-30 15:05:44
 * @LastEditors: zero
 * @LastEditTime: 2019-08-30 16:26:05
 */
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })
var Schema = mongoose.Schema
var userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/xxx.png'
  },
  bio: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    enum: [0, 1, -1],
    default: -1
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 0
  }
})
module.exports = mongoose.model("User", userSchema)
