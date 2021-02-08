/*
 * @Autor: GeekMzy
 * @Date: 2021-02-08 22:01:18
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-08 22:06:40
 * @FilePath: /MachineGeek2/machine-geek-ts/src/router/ProtectRouter.js
 */
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, ...others }) => {
  return <Route {...others} render={(props) => {
    // props 是 router 对象，包含了当前路由的信息
    return localStorage.getItem('loginSystem')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', from: props.match.url }} />
  }
  }></Route>
}