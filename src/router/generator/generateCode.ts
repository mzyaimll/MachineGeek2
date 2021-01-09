/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-09 13:53:17
 * @LastEditTime: 2021-01-09 14:04:39
 * @Email: GeekMzy@out-look.com
 * @FilePath: /MachineGeek2/src/router/generator/generateCode.ts
 * @Environment: big sur Js
 * @Description:
 */

export default {
  path: '/generateCode',
  name: 'generateCode',
  redirect: '',
  compoenent: () => import("/@/views/generator/generateCode.vue"),
  children: []
}
