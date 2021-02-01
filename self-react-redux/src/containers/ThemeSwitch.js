/*
 * @Autor: GeekMzy
 * @Date: 2021-02-01 19:23:48
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-01 19:23:55
 * @FilePath: /MachineGeek2/self-react-redux/src/containers/ThemeSwitch.js
 */
import { connect } from 'react-redux'
import ThemeSwitch from '../components/ThemeSwitch'
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)