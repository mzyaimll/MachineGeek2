/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 17:52:13
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:50:41
 * @FilePath: /machine-geek-hd/index.js
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const routing = require('./routes')

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, () => console.log('数据库连接成功'))
mongoose.connection.on('error', console.error)

const app = new Koa()

//要放在路由上面
app.use(bodyParser())
routing(app)
app.listen(8000, () => {
  console.log('监听8000端口');
})