/*
 * @Author: GeekMzy
 * @LastEditors: GeekMzy
 * @Date: 2021-01-07 21:39:42
 * @LastEditTime: 2021-01-09 16:44:52
 * @Email: GeekMzy@out-look.com
 * @FilePath: /MachineGeek2/src/main.ts
 * @Environment: big sur Js
 * @Description: 
 */
import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.mount('#app')
