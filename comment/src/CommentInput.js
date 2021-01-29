/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:24
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 17:02:20
 * @FilePath: /MachineGeek2/comment/src/CommentInput.js
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
    if (this.props.onSubmit) {
      const { userName, comment } = this.state
      this.props.onSubmit({ userName, comment })
    }
    this.setState({ content: '' })
  }

  render () {
    return (
      <div>
        <span>用户名：<input onChange={this.onUserNameChange.bind(this)} /></span>
        <span>评论内容：<input onChange={this.onCommentChange.bind(this)} /></span>
        <button onClick={this.commentSubmit.bind(this)}>提交</button>
      </div>
    )
  }
}
export default CommentInput
