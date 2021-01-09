/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-09 14:08:22
 * @LastEditTime: 2021-01-09 16:16:35
 * @Email: GeekMzy@out-look.com
 * @FilePath: /MachineGeek2/src/api/models/common.ts
 * @Environment: big sur Js
 * @Description:
 */

import request form '/@/utils/request'

export default {
  login(data: any) {
    return request({
      url: 'login',
      method: 'post',
      data: data
    })
  }
}