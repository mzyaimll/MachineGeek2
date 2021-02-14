/*
 * @Autor: GeekMzy
 * @Date: 2021-02-14 20:24:59
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-14 20:26:44
 * @FilePath: /machine-geek-hd/models/user.js
 */

const mongoose = require('mongoose')

const { Schema, model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

module.exports = model('User', userSchema)