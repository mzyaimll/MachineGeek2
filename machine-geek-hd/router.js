/*
 * @Autor: GeekMzy
 * @Date: 2021-02-12 17:20:59
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-12 17:23:15
 * @FilePath: /machine-geek-hd/router.js
 */

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', ctx => {
  ctx.body = '你好 mzy'
})

router.get('/login', ctx => {
  ctx.body = '欢迎mzy 登录'
})

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('监听3000');
})