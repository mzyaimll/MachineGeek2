/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 17:30:02
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:11:26
 * @FilePath: /MachineGeek2/self-react-redux/src/Content.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import { connect } from './connect'
import { connect } from 'react-redux'
class Content extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  render () {
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
        <ThemeSwitch />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Content = connect(mapStateToProps)(Content)

export default Content