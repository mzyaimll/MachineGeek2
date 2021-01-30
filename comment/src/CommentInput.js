/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:24
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-30 14:44:40
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
  componentWillMount () {
    let userName = localStorage.getItem('userName')
    if (userName) {
      this.setState({
        userName: userName
      })
    }
    console.log('componentWillMount');

  }

  componentDidMount () {
    /**
     * 自动聚焦
     */
    this.comment.focus()
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
    if (this.props.onSubmit) {
      const { userName, comment } = this.state
      this.props.onSubmit({ userName, comment })
      localStorage.setItem('userName', userName)
    }
    this.setState({ content: '' })
  }

  render () {
    return (
      <div>
        <span>用户名：<input value={this.state.userName} onChange={this.onUserNameChange.bind(this)} /></span>
        <span>评论内容：<input value={this.state.comment} ref={(obj) => this.comment = obj} onChange={this.onCommentChange.bind(this)} /></span>
        <button onClick={this.commentSubmit.bind(this)}>提交</button>
      </div>
    )
  }
}
export default CommentInput
