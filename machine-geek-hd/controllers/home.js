/*
 * @Autor: GeekMzy
 * @Date: 2021-02-14 20:32:47
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:33:16
 * @FilePath: /machine-geek-hd/controllers/home.js
 */
class HomeCtl {
  index (ctx) {
    ctx.body = '这是主页'
  }
}

module.exports = new HomeCtl()