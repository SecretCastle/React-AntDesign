import React from 'react'
import { Layout, Menu, Icon , Avatar} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainWrap extends React.Component {
    state = {
        collapsed: true,
    };
    toggle = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        });
    }
  render() {
    return (
        <Layout>
        <Sider 
            style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
        >
        <div><Avatar size={this.state.collapsed ? 'small':'large'} icon="user" 
            style={{position:'relative',margin:'10px auto 0', display:'block'}} /></div>
        <Menu 
            theme="dark" 
            onClick={this.handleClick}
            style={{ width: 240,marginTop:10 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
                <MenuItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
        </Sider>
        <Layout className= {this.state.collapsed ? 'mgleft65':'mgleft200'}>
            <Header style={{ background: '#fff', padding: 0 , position:'fixed', width:'100%' }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    style={{marginLeft:'15px',fontSize:'18px',cursor:'pointer'}}
                />
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial', marginTop: '74px' }}>
                <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                    ...
                <br />
                Really
                <br />...<br />...<br />...<br />
                long
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />...
                <br />...<br />...<br />...<br />...<br />...<br />
                content
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        </Layout>
    </Layout>
    );
  }
}


export default MainWrap
