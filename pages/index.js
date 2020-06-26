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
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
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
  return (
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layou style={{display: 'flex'}}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px', width: 'calc(100% - 200px)' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
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
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
};

export default App;
