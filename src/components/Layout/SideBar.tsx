import {
  DollarOutlined,
  FolderOpenOutlined,
  LineOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  WifiOutlined
} from '@ant-design/icons';
import { ConfigProvider, Layout, Menu, MenuProps, SiderProps, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COLOR } from "../../App"
import logo from '../../assets/logo.png'
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

  getItem(
  <Typography.Text>All</Typography.Text>, 'default', <PieChartOutlined />),
  getItem(
    <Typography.Text>Customer</Typography.Text>,
    'customer',
    <ShoppingCartOutlined />
  ),
  getItem(<Typography.Text>Management</Typography.Text>,
    'management',
    <UsergroupAddOutlined />),
  getItem(<Typography.Text>Transaction</Typography.Text>,
    'transaction',
    <UsergroupAddOutlined />),
  getItem(<Typography.Text >Contribution</Typography.Text>,
    'contribution',
    <UsergroupAddOutlined />),
  getItem(
    <Typography.Text>Dinepoint</Typography.Text>,
    'dinepoint',
    <ShoppingCartOutlined />
  ),
  getItem(
    <Typography.Text >Reader</Typography.Text>,
    'reader',
    <WifiOutlined />
  ),
  // getItem(
  //   <Typography.Text to={PATH_DASHBOARD.ecommerce}>ATM Card</Typography.Text>,
  //   'card',
  //   <CreditCardOutlined />
  // ),
  getItem(
    <Typography.Text>School</Typography.Text>,
    'school',
    <FolderOpenOutlined />
  ),
  getItem(

    <Typography.Text >
      Savings
    </Typography.Text>,
    'savings',
    <DollarOutlined />
  ),
  getItem(<Typography.Text >Corporative</Typography.Text>,
    'corporative',
    <UsergroupAddOutlined />),


  getItem('Downlines', 'authentication', <LineOutlined />, [


    getItem(
      <Typography.Text >Level Two</Typography.Text>,
      'auth-verify',
      null
    ),
    getItem(
      <Typography.Text >Level Three</Typography.Text>,
      'auth-password-reset',
      null
    ),
  ]),

  getItem(
    <Typography.Text>User profile</Typography.Text>,
    'details',
    <UserOutlined />
  ),

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
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: 'none',
              itemSelectedBg: COLOR['100'],
              itemHoverBg: COLOR['50'],
              itemSelectedColor: COLOR['150'],
            },
          },
        }}
      >
        <Menu
          mode="inline"
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: 'none' }}
        />
      </ConfigProvider>
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
