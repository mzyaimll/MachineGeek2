/*
 * @Autor: GeekMzy
 * @Date: 2021-02-02 15:34:52
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-02 15:36:00
 * @FilePath: /MachineGeek2/comment/src/containers/CommentApp.js
 */
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default class CommentApp extends Component {
  render () {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}