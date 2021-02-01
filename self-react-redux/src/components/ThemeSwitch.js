/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 17:30:11
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:23:30
 * @FilePath: /MachineGeek2/self-react-redux/src/components/ThemeSwitch.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ThemeSwitch extends Component {
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