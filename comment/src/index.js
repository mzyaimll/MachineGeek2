/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 17:04:11
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
      commentList: [{ userName: 'JackM', comment: 'this is the first comment' }]
    }
  }
  handleSubmitComment (obj) {
    if (obj) {
      this.state.commentList.push(obj)
      this.setState({
        commentList: this.state.commentList
      })
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