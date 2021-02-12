/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 18:02:12
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 18:04:48
 * @FilePath: /machine-geek-hd/application.js
 */

let http = require('http')

class Application {
  constructor() {
    this.callbackFunc
  }

  listen (...args) {
    let server = http.createServer(this.callback())
    server.listen(...args)
  }
  /**
   * 挂载回调函数
   */
  use (fn) {
    this.callbackFunc = fn
  }

  /**
   * 获取http server所需的callback函数
   */
  callback () {
    return (req, res) => {
      this.callbackFunc(req, res)
    }
  }
}

module.exports = Application
