/*
 * @Autor: GeekMzy
 * @Date: 2021-02-14 20:30:27
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:30:28
 * @FilePath: /machine-geek-hd/routes/index.js
 */
const fs = require('fs')

module.exports = app => {
  // 读取当前目录下所有文件
  fs.readdirSync(__dirname).forEach(file => {
    // 除去归纳的 `index.js` 文件，其他的都要注册到 `app` 中
    if (file === 'index.js') return
    const router = require(`./${file}`)
    app.use(router.routes()).use(router.allowedMethods())
  })
}
