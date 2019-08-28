/*
 * @Descripttion:
 * @version:
 * @Author: zero
 * @Date: 2019-08-28 13:53:57
 * @LastEditors: zero
 * @LastEditTime: 2019-08-28 18:01:21
 */
var mongoose = require('mongoose')

var Schema = mongoose.Schema

//连接数据库
//指定连接的数据库不需要存在，当你插入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast', { useNewUrlParser: true })

//设计集合结构（表结构）
//字段名称就是表结构中的属性名称
//值
//约束的目的是为了保证数据的完整性

var uesrSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})


//将文档结构发布为模型
//MONGOOSE.MODEL方法就是用来将一个架构发布为model
//第一个参数：传入一个大写名词单数字符串用来表示你得数据库名称
//moogoose会自动将大写名词的字符串生产小写复数的集合名词
//例如这里的User最终会变为users集合名称
//第二个参数：架构Schema
//返回值：模型构造函数
var User = mongoose.model('User', uesrSchema)

//当我门有了模型构造函数之后，就可以使用这个构造函数对users集合中的数据为所欲为了


//新增数据
// var admin = new User({
//   username: 'q',
//   password: '123456',
//   email: '1137774080@qq.com'
// })

// admin.save(function (err, ret) {
//   if (err) {
//     console.log('保存失败');
//   } else {
//     console.log('保存成功');
//     console.log(ret);
//   }
// })

//查询数据
//第一个参数是查询条件，如果没有第一个参数即查询所有
//findOne()查询一个
User.find({
  username: 'q'
}, function (err, ret) {
  if (err) {
    console.log(err);

  } else {
    console.log(ret);

  }
})