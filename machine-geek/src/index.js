/*
 * @Autor: GeekMzy
 * @Date: 2021-02-08 12:42:23
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-08 13:21:54
 * @FilePath: /MachineGeek2/machine-geek/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import reducer
import commentsReducer from './reducers/comments'

//import antd
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.css';

const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <DatePicker />
  </Provider>
  ,
  document.getElementById('root')
);
