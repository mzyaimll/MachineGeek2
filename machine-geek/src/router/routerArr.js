/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 14:49:37
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-15 13:28:51
 * @FilePath: /machine-geek/src/router/routerArr.js
 */


import Generate from '../view/generate/Generate'
import Login from '../view/Login'
import System from '../view/system/System'
import User from '../view/user/User'

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