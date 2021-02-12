/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 17:52:13
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 17:58:26
 * @FilePath: /machine-geek-hd/index.js
 */

const Koa = require('koa')
const app = new Koa()
//中间件
app.use((ctx) => {
  ctx.body = "你好Mzy"
})

app.listen(3000, () => {
  console.log('监听3000端口');
})