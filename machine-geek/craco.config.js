/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 10:51:38
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 10:58:59
 * @FilePath: /machine-geek/craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};