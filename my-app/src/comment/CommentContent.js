/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:40
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 16:44:04
 * @FilePath: /MachineGeek2/my-app/src/comment/CommentContent.js
 */
import React, { Component } from 'react'

class CommentContent extends Component {
  static defaultProps = {
    comment: {}
  }
  constructor() {
    super()
  }

  render () {
    return (
      <div>
        <span>{this.props.comment.userName}:</span>
        <span>{this.props.comment.comment}</span>
        <hr />
      </div>
    )
  }
}