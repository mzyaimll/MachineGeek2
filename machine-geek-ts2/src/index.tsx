/*
 * @Autor: GeekMzy
 * @Date: 2021-02-08 13:29:01
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 10:44:58
 * @FilePath: /machine-geek-ts2/src/index.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);