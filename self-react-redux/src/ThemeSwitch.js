/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 17:30:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:11:39
 * @FilePath: /MachineGeek2/self-react-redux/src/ThemeSwitch.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './connect'
import { connect } from 'react-redux'


class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  // dispatch action 去改变颜色
  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }
  render () {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)
export default ThemeSwitch