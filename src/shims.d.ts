/*
 * @Author: your name
 * @Date: 2021-01-07 22:10:03
 * @LastEditTime: 2021-01-07 22:11:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /MachineGeek2/src/shims.d.ts
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
