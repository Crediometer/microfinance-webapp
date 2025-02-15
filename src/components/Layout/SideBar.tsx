import {
  DollarOutlined,
  FolderOpenOutlined,
  LineOutlined,
  PieChartOutlined,
  RightOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  WifiOutlined
} from '@ant-design/icons';
import { Col, ConfigProvider, Divider, Flex, Image, Layout, Menu, MenuProps, SiderProps, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COLOR } from "../../App"
import logo from '../../assets/logo2.png'
import profile from '../../assets/profile.png'
// import {
//   PATH_AUTH,
//   PATH_DASHBOARD,
//   PATH_DOWNLINES,
//   PATH_LANDING,
//   PATH_USER_PROFILE,
// } from '../../constants/index.ts';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const items: MenuProps['items'] = [

  getItem("Dashboard", 'default', <PieChartOutlined />,[
    getItem(
      <Link to="/dashboard/teller">Teller</Link>,
      'auth-verify',
      null
    ),

    getItem(
      <Link to="/dashboard/teller/search">Teller Serch</Link>,
      'auth-verify',
      null
    ),
    getItem(
      <Link to="/dashboard/teller/data">Teller Data</Link>,
      'auth-verify',
      null
    ),
  ]),
  getItem(
    "Customer",
    'customer',
    <ShoppingCartOutlined />
  ),
  getItem("Account",
    'account',
    <UsergroupAddOutlined />),
  getItem("Disbursement",
    'disbursement',
    <UsergroupAddOutlined />),
  getItem("All Transactions",
    'transactions',
    <UsergroupAddOutlined />),
  getItem(
    "Reports",
    'report',
    <ShoppingCartOutlined />
  ),
  getItem(
   "Tasks",
    'task',
    <WifiOutlined />
  ),
  getItem(
    "Mobile Channel",
    'mobile',
    <FolderOpenOutlined />
  ),
  getItem(
    "Branches",
    'branches',
    <DollarOutlined />
  ),
  getItem("Accounting",
    'accounting',
    <UsergroupAddOutlined />),

    getItem(
      "Management",
      'management',
      null
    ),
    getItem(
      "Overview",
      'Overview',
      null
    ),
  //   getItem('Downlines', 'authentication', <LineOutlined />, [
  // ]),

  // getItem(
  //   <Typography.Text>User profile</Typography.Text>,
  //   'details',
  //   <UserOutlined />
  // ),

];

const rootSubmenuKeys = ['dashboards', 'corporate', 'user-profile'];

type SideNavProps = SiderProps;

const SideNav = ({ ...others }: SideNavProps) => {
  const nodeRef = useRef(null);
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState(['']);
  const [current, setCurrent] = useState('');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const paths = pathname.split('/');
    setOpenKeys(paths);
    setCurrent(paths[paths.length - 1]);
  }, [pathname]);

  return (
    <Sider ref={nodeRef} breakpoint="lg" collapsedWidth="0" {...others}>
      {/* <Logo
        color="blue"
        asLink
        //href={PATH_LANDING.root}
        justify="center"
        gap="small"
        imgSize={{ h: 28, w: 28 }}
        style={{ padding: '1rem 0' }}
      /> */}
      <Flex
      justify='center'
      >
        <Image
        width={130}
        src={logo}
        />
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: COLOR["200"],
              itemSelectedBg: COLOR['250'],
              itemHoverBg: COLOR['250'],
              itemSelectedColor: COLOR['150'],
              colorText:COLOR['250'],
            },
          },
        }}
      >
        <Menu
          mode='inline'
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: 'none', marginTop:"47px" }}
        />
      </ConfigProvider>
      <Divider 
        style={{
          borderColor:"#E2E8F0"
        }}
      />
      <Flex align='center' justify='space-between'>
        <Col>
          <Flex align='center' gap={8}>
            <Image
                width={40}
                height={40}
                src={profile}
                style={{
                  borderRadius: "50%",
                  backgroundColor:"#FFB31F"
                }}
            >
            </Image>
            <Col>
              <Typography.Text 
              style={{
                fontSize:"10px",
                color: COLOR['300'],
                margin: "0px",
                padding:"0px"
              }}
              >Welcome back 👋</Typography.Text>
              <Typography.Title level={5} style={
                {
                  fontSize:"12px",
                  color: COLOR['250'],
                      margin: "0px",
                padding:"0px"
                }
              }>Johnathan</Typography.Title>
            </Col>
          </Flex>
        </Col>
        <Col>
          <RightOutlined/>
        </Col>
      </Flex>
    </Sider>
  );
};

export default SideNav;




      // getItem(
  //   <Link to={PATH_DASHBOARD.learning}>Learning</Link>,
  //   'learning',
  //   null
  // ),
  // getItem(
  //   <Link to={PATH_DASHBOARD.logistics}>Logistics</Link>,
  //   'logistics',
  //   null
  // ),

    // getItem(<Link to={PATH_AUTH.signin}>Sign In</Link>, 'auth-signin', null),
    // getItem(<Link to={PATH_AUTH.signup}>Sign Up</Link>, 'auth-signup', null),
    // getItem(<Link to={PATH_AUTH.welcome}>Welcome</Link>, 'auth-welcome', null),
    // getItem(<Link to={PATH_AUTH.passwordConfirm}>Passsword confirmation</Link>, 'auth-password-confirmation', null),
    // getItem(
    //   <Link to={PATH_AUTH.accountDelete}>Account deleted</Link>,
    //   'auth-account-deactivation',
    //   null
    // ),
  // getItem('User profile', 'details', <UserOutlined />,
  //    [
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.details}>Details</Link>,
  //     'details',
  //     null
  //   ),
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.preferences}>Preferences</Link>,
  //     'preferences',
  //     null
  //   ),
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.personalInformation}>Information</Link>,
  //     'personal-information',
  //     null
  //   ),
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.security}>Security</Link>,
  //     'security',
  //     null
  //   ),
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.activity}>Activity</Link>,
  //     'activity',
  //     null
  //   ),
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.action}>Actions</Link>,
  //     'actions',
  //     null
  //   ),
  //   getItem(<Link to={PATH_USER_PROFILE.help}>Help</Link>, 'help', null),
  //   getItem(
  //     <Link to={PATH_USER_PROFILE.feedback}>Feedback</Link>,
  //     'feedback',
  //     null
  //   ),
  // ]
  // ),


  // getItem('Errors', 'errors', <BugOutlined />, [
  //   getItem(<Link to={PATH_ERROR.error400}>400</Link>, '400', null),
  //   getItem(<Link to={PATH_ERROR.error403}>403</Link>, '403', null),
  //   getItem(<Link to={PATH_ERROR.error404}>404</Link>, '404', null),
  //   getItem(<Link to={PATH_ERROR.error500}>500</Link>, '500', null),
  //   getItem(<Link to={PATH_ERROR.error503}>503</Link>, '503', null),
  // ]),

  // getItem('Help', 'help', null, [], 'group'),
  // getItem(
  //   <Link to={PATH_DOCS.productRoadmap} target="_blank">
  //     Roadmap
  //   </Link>,
  //   'product-roadmap',
  //   <ProductOutlined />
  // ),
  // getItem(
  //   <Link to={PATH_DOCS.components} target="_blank">
  //     Components
  //   </Link>,
  //   'components',
  //   <AppstoreAddOutlined />
  // ),
  // getItem(
  //   <Link to={PATH_DOCS.help} target="_blank">
  //     Documentation
  //   </Link>,
  //   'documentation',
  //   <SnippetsOutlined />
  // ),
  // getItem(
  //   <Link to={PATH_GITHUB.repo} target="_blank">
  //     Give us a star
  //   </Link>,
  //   'give-us-a-star',
  //   <GithubOutlined />
  // ),
