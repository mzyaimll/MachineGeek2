/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 14:49:37
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 14:55:29
 * @FilePath: /machine-geek/src/router/routerArr.js
 */


import Generate from '../view/Generate'
import Login from '../view/Login'
import System from '../view/System'
import User from '../view/User'

const routerArr = [
  {
    path: '/generate',
    component: Generate
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/system',
    component: System
  },
  {
    path: '/user',
    component: User
  },
]

export default routerArr