/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 14:41:08
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 14:48:04
 * @FilePath: /MachineGeek2/my-app/src/test/state.js
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './../index.css'

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render () {
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '取消' : '点赞'}👍
      </button>
    )
  }
}

class Index extends Component {
  render () {
    return (
      <div>
        <LikeButton />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)