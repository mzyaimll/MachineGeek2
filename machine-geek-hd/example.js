/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 18:10:17
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 18:11:36
 * @FilePath: /machine-geek-hd/example.js
 */
let simpleKoa = require('./application')
let app = new simpleKoa()

app.use((req, res) => {
  res.writeHead(200)
  res.end('hello, uncertainty')
})

app.listen(8000, () => console.log('监听8000端口'))