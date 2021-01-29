/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 14:41:08
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 15:15:55
 * @FilePath: /MachineGeek2/my-app/src/index.js
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unLikedText: '点赞'
  }
  constructor() {
    super()
    this.state = { isLiked: false }
  }

  handleClickOnLikeButton () {
    //非及时更新
    this.setState({
      isLiked: !this.state.isLiked
    })
    if (this.props.onClick) {
      this.props.onClick()
    }
    // //及时更新
    // this.setState((prev) => {
    //   return {
    //     isLiked: !this.state.isLiked
    //   }
    // })
  }
  render () {
    // const likedText = this.props.likedText || '取消'
    // const unLikedText = this.props.unLikedText || '点赞'
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? this.props.likedText : this.props.unLikedText}👍
      </button>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      likedText: '已赞',
      unLikedText: '赞',
    }
  }
  handleClickOnLikeButton () {
    this.setState({
      likedText: '取消',
      unLikedText: '点赞'
    })
  }

  render () {
    return (
      <div>
        <LikeButton likedText={this.state.likedText} unLikedText={this.state.unLikedText} />
        <div>
          <button onClick={this.handleClickOnLikeButton.bind(this)}>
            修改wordings
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)