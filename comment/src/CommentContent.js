/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:40
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-30 14:24:42
 * @FilePath: /MachineGeek2/comment/src/CommentContent.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentContent extends Component {
  static defaultProps = {
    comment: PropTypes.object.isRequired
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

export default CommentContent