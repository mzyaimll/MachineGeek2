/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-09 13:45:57
 * @LastEditTime: 2021-01-09 16:22:18
 * @Email: GeekMzy@out-look.com
 * @FilePath: /MachineGeek2/src/router/index.ts
 * @Environment: big sur Js
 * @Description:
 */

import { createRouter, createWebHistory } from 'vue-router'
import { generateCode, getDataTable } from './generator/'
const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('/@/views/login.vue')
  },
  {
    path: '/generator',
    name: 'generator',
    component: () => import('/@/views/generator/index.vue'),
    children: [
      generateCode,
      getDataTable
    ]
  }
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
})