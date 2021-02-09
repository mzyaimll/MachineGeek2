/*
 * @Autor: GeekMzy
 * @Date: 2021-02-08 13:29:01
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 10:43:22
 * @FilePath: /machine-geek-ts2/src/App.tsx
 */
import { FC } from 'react';
import './App.less';
import { Link, Route } from 'react-router-dom';
import Login from './containers/login'
import Generate from './containers/generate'

import { Button } from 'antd';

const App: FC = () => (
  <>
    <div className="App">
      <Button type="primary">Button</Button>
      <div>App page</div>
      <Link to='/login'><Button type='primary'>login</Button></Link>
      <Link to='/generate'><Button type='primary'>generate</Button></Link>
      <br />
      <div>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/generate" component={Generate}></Route>
      </div>
    </div>
  </>
);

export default App;