/*
 * @Autor: GeekMzy
 * @Date: 2021-02-14 20:27:01
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:45:56
 * @FilePath: /machine-geek-hd/controllers/user.js
 */

const User = require('../models/user')

class UserCtl {
  async find (ctx) {
    ctx.body = await User.find()
  }

  // 根据 id 查找某一个用户
  async findById (ctx) {
    ctx.body = await User.findById(ctx.params.id)
  }
  // 创建用户
  async create (ctx) {
    ctx.body = await new User(ctx.request.body).save()
  }
  // 更新用户信息
  async updateUser (ctx) {
    const user = await User.findByIdAndUpdate(ctx.request.body.id, ctx.request.body)
    ctx.body = user
  }
  // 删除用户
  async deleteUser (ctx) {
    const user = await User.findByIdAndRemove(ctx.request.body.id)
    ctx.body = user
  }

}

module.exports = new UserCtl()