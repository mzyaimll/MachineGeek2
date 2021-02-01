/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 16:15:40
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-30 15:33:13
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
    this.state = {}
  }
  UNSAFE_componentWillMount () {
    this._updateTimeString()
    this._timer = setInterval(this._updateTimeString.bind(this), 5000)
  }

  componentWillUnmount () {
    clearInterval(this._timer)
  }

  _updateTimeString () {
    let time = this.props.comment.createdTime
    const duration = (+Date.now() - time) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)}分钟前`
        : `${Math.round(Math.max(duration, 1))}秒前`
    })
  }

  _getProcessedContent (content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

  render () {
    return (
      <div>
        <p>{this.props.comment.userName}:</p>
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(this.props.comment.comment)
        }}></p>
        <p>--{this.state.timeString}</p>
        <hr />
      </div>
    )
  }
}

export default CommentContent