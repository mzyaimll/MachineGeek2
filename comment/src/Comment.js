/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-30 14:38:53
 * @FilePath: /MachineGeek2/comment/src/Comment.js
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CommentInput from './CommentInput'
import CommentList from './CommentList'

import './comment.css'

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
        <CommentInput userName />
        <CommentList commentList={this.state.commentList} />
      </div>
    )
  }
}

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
)