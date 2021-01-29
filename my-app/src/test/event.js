/*
 * @Autor: GeekMzy
 * @Date: 2021-01-29 14:27:42
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-01-29 14:34:07
 * @FilePath: /MachineGeek2/my-app/src/test/event.js
 */

class Title extends Component {
  handleClickOnTitle (e) {
    console.log(e.target.innerHTML);
  }

  render () {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React 小书</h1>
    )
  }
}