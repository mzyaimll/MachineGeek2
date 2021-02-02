/*
 * @Autor: GeekMzy
 * @Date: 2021-02-02 15:33:01
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-02 15:55:02
 * @FilePath: /MachineGeek2/comment/src/containers/CommentInput.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'
// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
class CommentInputContainer extends Component {
  static propTypes = {
    comments: PropTypes.array,
    onSubmit: PropTypes.func
  }
  constructor() {
    super()
    this.state = { userName: '' }
  }
  componentWillMount () {
    // componentWillMount 生命周期中初始化用户名
    this._loadUserName()
  }
  _loadUserName () {
    // 从 LocalStorage 加载 userName
    // 然后可以在 render 方法中传给 CommentInput
    const userName = localStorage.getItem('userName')
    if (userName) {
      this.setState({ userName })
    }
  }
  handleSubmitComment (comment) {
    // 评论数据的验证
    if (!comment) return
    if (!comment.userName) return alert('请输入用户名')
    if (!comment.comment) return alert('请输入评论内容')
    // 新增评论保存到 LocalStorage 中
    const { comments } = this.props
    const newComments = [...comments, comment]
    localStorage.setItem('userName', comment.userName)
    localStorage.setItem('comments', JSON.stringify(newComments))
    // this.props.onSubmit 是 connect 传进来的
    // 会 dispatch 一个 action 去新增评论
    if (this.props.onSubmit) {
      this.props.onSubmit(comment)
    }
  }
  render () {
    return (
      <CommentInput
        userName={this.state.userName}
        onSubmit={this.handleSubmitComment.bind(this)} />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (comment) => {
      dispatch(addComment(comment))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputContainer)