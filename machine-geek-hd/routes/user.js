/*
 * @Autor: GeekMzy
 * @Date: 2021-02-14 20:28:38
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:47:10
 * @FilePath: /machine-geek-hd/routes/user.js
 */

const Router = require('koa-router')
const { find, findById, create, deleteUser, updateUser } = require('../controllers/user')

const router = new Router({
  prefix: '/users'
})

router.get('/', find)

// router.get('/:id', findById)
router.post('/create', create)
router.post('/deleteUser', deleteUser)
router.post('/updateUser', updateUser)

module.exports = router
