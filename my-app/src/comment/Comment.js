/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 16:45:16
 * @FilePath: /MachineGeek2/my-app/src/comment/comment.js
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
  render () {
    return (
      <div>
        <CommentInput />
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
)