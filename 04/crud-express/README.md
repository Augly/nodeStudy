<!--
 * @Descripttion: 
 * @version: 
 * @Author: zero
 * @Date: 2019-08-26 11:49:29
 * @LastEditors: zero
 * @LastEditTime: 2019-08-26 15:40:41
 -->
# Express - curd

## 起步

- 初始化
- 模板处理
  
## 路由设计

| 请求方法 | 请求路径         | get参数 | post参数                   | 备注             |
| -------- | ---------------- | ------- | -------------------------- | ---------------- |
| GET      | /students        |         |                            | 渲染首頁         |
| GET      | /students/new    |         |                            | 渲染添加學生頁面 |
| POST     | /studnets        |         | name,age,gender,hobbies    | 處理添加學生請求 |
| GET      | /students/edit   | id      |                            | 渲染編輯頁面     |
| POST     | /students/edit   |         | id,age,gender,hobbies,name | 處理編輯請求     |
| GET      | /students/delete | id      |                            | 处理删除请求     |