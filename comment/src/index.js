/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-30 15:13:45
 * @FilePath: /MachineGeek2/comment/src/index.js
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

class Comment extends Component {
  constructor() {
    super()
    this.state = {
      commentList: []
    }
  }
  UNSAFE_componentWillMount () {
    this._loadComments()

  }
  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      this.setState({
        commentList: JSON.parse(comments)
      })
    }
  }
  /**
   * @description: 处理评论提交
   * @event: 
   * @param {*} obj
   * @return {*}
   */
  handleSubmitComment (obj) {
    if (obj) {
      this.state.commentList.push(obj)
      this.setState({
        commentList: this.state.commentList
      })
      this._saveComments(this.state.commentList)
      alert('评论成功')
    }
  }
  render () {
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <hr />
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
)