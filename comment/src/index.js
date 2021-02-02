/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-02 15:35:09
 * @FilePath: /MachineGeek2/comment/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
const store = createStore(commentsReducer)
ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);