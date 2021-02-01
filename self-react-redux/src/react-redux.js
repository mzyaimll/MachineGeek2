import { Component } from "react";

/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 19:02:23
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:04:55
 * @FilePath: /MachineGeek2/self-react-redux/src/react-redux.js
 */
import PropTypes from 'prop-types'

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.object,
    children: PropTypes.any
  }
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return {
      store: this.props.store
    }
  }

  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}