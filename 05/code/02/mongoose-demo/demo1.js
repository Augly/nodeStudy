/*
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-08-28 11:42:54
 * @LastEditors: zero
 * @LastEditTime: 2019-08-28 11:49:06
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

//创建一个模型
const Cat = mongoose.model('Cat', { name: String });



for (let index = 0; index < 100; index++) {
  const kitty = new Cat({ name: 'mimi' + index });
  kitty.save().then(() => console.log('meow'));

}
//持久化保存kitty
