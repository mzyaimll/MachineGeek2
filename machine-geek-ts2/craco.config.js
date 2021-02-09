/*
 * @Autor: GeekMzy
 * @Date: 2021-02-08 13:34:45
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-08 13:41:12
 * @FilePath: /MachineGeek2/machine-geek-ts/craco.config.js
 */
const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
};