/*
 * @Autor: GeekMzy
 * @Date: 2021-02-14 20:32:47
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:42:59
 * @FilePath: /machine-geek-hd/routes/home.js
 */
const Router = require('koa-router')
const router = new Router()
const { index } = require('../controllers/home')

router.get('/', index)

module.exports = router
