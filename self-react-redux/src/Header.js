/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 17:29:57
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:01:00
 * @FilePath: /MachineGeek2/self-react-redux/src/Header.js
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './connect'
import { connect } from 'react-redux'

class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  render () {
    return (
      <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
Header = connect(mapStateToProps)(Header)
export default Header