/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 17:29:57
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:21:37
 * @FilePath: /MachineGeek2/self-react-redux/src/containers/Header.js
 */
import Header from '../components/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
export default connect(mapStateToProps)(Header)