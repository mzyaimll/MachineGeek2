/*
 * @Autor: GeekMzy
 * @Date: 2021-02-08 12:42:23
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 10:58:48
 * @FilePath: /machine-geek/src/index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import reducer
import commentsReducer from './reducers/comments'

//import react-router
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
