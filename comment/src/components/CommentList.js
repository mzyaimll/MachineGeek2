/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:31
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-02 15:47:53
 * @FilePath: /MachineGeek2/comment/src/components/CommentList.js
 */
import React, { Component } from 'react'
import CommentContent from './CommentContent'

class CommentList extends Component {
  static defaultProps = {
    commentList: []
  }

  constructor() {
    super()
  }

  render () {
    return (
      <div>
        {this.props.commentList.map((item, i) => <CommentContent comment={item} key={i} />)}
      </div>
    )
  }
}

export default CommentList
