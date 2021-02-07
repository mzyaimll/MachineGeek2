/*
 * @Autor: GeekMzy
 * @Date: 2021-02-03 14:26:26
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-07 13:08:40
 * @FilePath: /MachineGeek2/comment/src/wrapWithLoadData.js
 */

import { Component } from "react";

export default (WrappedComponent, name) => {
  class localStorageActions extends Component {
    constructor() {
      super()
      this.state = { data: null }
    }
    UNSAFE_componentWillMount () {
      let data = localStorage.getItem(name)
      try {
        this.setState({
          data: JSON.parse(data)
        })
      } catch (e) {
        this.setState({ data })
      }
    }
    /**
     * @description: 保存数据
     * @event: 
     * @param {*} data
     * @return {*}
     */
    saveData (data) {
      try {
        localStorage.setItem(name, JSON.stringify(data))
      } catch (e) {
        localStorage.setItem(name, '${data}')
      }
    }

    render () {
      return (
        <WrappedComponent
          data={this.state.data}
          saveData={this.saveData.bind(this)}
          {...this.props}
        ></WrappedComponent>
      )
    }
  }
  return localStorageActions
}

