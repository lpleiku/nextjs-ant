import React, { useState } from 'react';
import {
  Input,
  Radio,
  Select,
  Switch,
  Checkbox,
  Layout,
  Row,
  Col,
  Menu,
  Breadcrumb
} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onChange = e => {
    if (e.target.type === 'checkbox') {
      console.log('checked', e.target.checked);
    } else {
      console.log('value', e.target.value);
    }
    console.log('name', e.target.name);
  };
  const onSelectChange = (value, option) => {
    console.log('value', value);
    console.log('option', option);
  };
  const onSwitch = (checked, e) => {
    console.log('checked', checked);
    console.log('e', e.currentTarget.name);
  };
  const onPressEnter = e => {
    console.log('value', e.target.value);
    console.log('name', e.target.name);
  };
  const options = [
    { label: 'Apple', value: 'apple', style: { flex: 1, display: 'block' } },
    { label: 'Pear', value: 'pear', style: { flex: 1 } },
    { label: 'Orange', value: 'orange', disabled: true, style: { flex: 1 } }
  ];
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  const style = {
    WebkitTransition: all .2s;
    transition: all .2s;
  }
  return (
    <Row>
      <Col flex={collapsed ? '80px' : '200px'} style={style}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
      </Col>
      <Col flex='auto' style={style}>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch defaultChecked name="switch" onChange={onSwitch} />
              <Checkbox name="checkbox" onChange={onChange}>
                Checkbox
              </Checkbox>
              <Input
                name="input"
                onChange={onChange}
                placeholder="Basic usage"
                onPressEnter={onPressEnter}
              />
              <TextArea
                name="textarea"
                onChange={onChange}
                placeholder="Basic usage"
                onPressEnter={onPressEnter}
              />
              <Select
                defaultValue="lucy"
                style={{ width: '100%' }}
                onChange={onSelectChange}
                mode="multiple"
              >
                <Option key="name" value="jack">
                  Jack
                </Option>
                <Option key="name" value="lucy">
                  Lucy
                </Option>
                <Option key="name" value="disabled" disabled>
                  Disabled
                </Option>
                <Option key="name" value="Yiminghe">
                  yiminghe
                </Option>
              </Select>
              <Radio.Group
                style={{ display: 'flex' }}
                name="radio"
                defaultValue="apple"
                onChange={onChange}
                options={options}
              />
              <Radio.Group
                name="radio"
                defaultValue="orange"
                onChange={onChange}
                options={options}
              />
              <Row gutter={[16, 0]}>
                <Col flex="1">
                  <label>Username:</label>
                  <Input />
                </Col>
                <Col flex="1">
                  <label>Username:</label>
                  <Input.Password />
                </Col>
              </Row>
              <Row>
                <Col flex="1">
                  <label>Username:</label>
                  <Input />
                </Col>
              </Row>
              <Row>
                <Col flex="1">
                  <label>Username:</label>
                  <Input.Password />
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Col>
    </Row>
  );
};

export default App;
