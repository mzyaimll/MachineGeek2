/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 13:15:00
 * @FilePath: /MachineGeek2/comment/src/index.js
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CommentInput from './CommentInput'
import CommentList from './CommentList'
import wrapWithLoadData from './wrapWithLoadData'

class Comment extends Component {
  constructor() {
    super()
    this.state = {
      commentList: []
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
      this.props.saveData(this.state.commentList)
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

Comment = wrapWithLoadData(Comment, 'comments')

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
)