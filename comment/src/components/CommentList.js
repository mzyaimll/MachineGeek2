/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:31
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-02 16:09:28
 * @FilePath: /MachineGeek2/comment/src/components/CommentList.js
 */
import React, { Component } from 'react'
import CommentContent from './CommentContent'

class CommentList extends Component {
  static propTypes = {
    comments: []
  }

  constructor() {
    super()
  }

  render () {
    return (
      <div>
        {this.props.comments.map((item, i) => <CommentContent comment={item} key={i} />)}
      </div>
    )
  }
}

export default CommentList
