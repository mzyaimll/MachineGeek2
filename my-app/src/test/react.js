/*
 * @Autor: GeekMzy
 * @Date: 2021-01-28 10:06:40
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-28 10:10:50
 * @FilePath: /MachineGeek2/my-app/src/react.js
 */
class Component {
  setState (state) {
    const oldEl = this.oldEl
    this.state = state
    this._renderDOM()
    if (this.onStateChange) this.onStateChange(oldEl, this.el)
  }

  _renderDOM () {
    this.el = createDOMFromString(this.render())
    if (this.onClick) {
      this.el.addEventListener('click', this.onClick.bind(this), false)
    }
    return this.el
  }
}

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { isLiked: false }
  }
  onClick () {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render () {
    return `<button class='like-btn'>
    <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
    <span>👍</span>
  </button>`
  }
}