/*
 * @Autor: GeekMzy
 * @Date: 2021-02-09 11:17:15
 * @LastEditors: GeekMzy
 * @LastEditTime: 2021-02-09 16:57:29
 * @FilePath: /machine-geek/src/view/GeekMenu.js
 */
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

//import react-router
import { Route, Link } from 'react-router-dom'
import routerArr from '../router/routerArr'

import './menu.css'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const GeekMenu = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">主页</Menu.Item>
        <Menu.Item key="2">个人信息</Menu.Item>
        <Menu.Item key="3">系统管理</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              {routerArr.map((item, i) => (<Menu.Item key={i}><Link to={item.path}>{item.path}</Link></Menu.Item>))}
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Content style={{ minHeight: 1000, background: '#fff' }}>
          {routerArr.map((item, i) => (<Route path={item.path} key={i} component={item.component}></Route>))}
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Design ©2020</Footer>
  </Layout>
)

export default GeekMenu;