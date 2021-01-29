/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:24
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 16:39:37
 * @FilePath: /MachineGeek2/my-app/src/comment/CommentInput.js
 */

import React, { Component } from 'react'

class CommentInput extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      comment: '',
    }
  }

  onUserNameChange (e) {
    this.setState((prev) => {
      return {
        userName: e.target.value
      }
    })
  }
  onCommentChange (e) {
    this.setState((prev) => {
      return {
        comment: e.target.value
      }
    })
  }
  commentSubmit () {
    console.log('commentSubmit', this.state);
  }

  render () {
    return (
      <div>
        <span>用户名：<input onChange={onUserNameChange} /></span>
        <span>评论内容：<input onChange={onCommentChange} /></span>
        <button onClick={commentSubmit}>提交</button>
      </div>
    )
  }
}