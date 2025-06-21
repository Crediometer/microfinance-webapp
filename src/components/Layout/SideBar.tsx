import {
  DollarOutlined,
  FolderOpenOutlined,
  LineOutlined,
  PieChartFilled,
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
import { FaCircleNodes } from 'react-icons/fa6';
import { BsFillClipboard2DataFill } from 'react-icons/bs';
import { PiChartPieSliceFill } from "react-icons/pi";
import { RiPlayList2Fill } from 'react-icons/ri';
import { MdDashboardCustomize } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { TbGitBranch } from 'react-icons/tb';
import { GrTransaction } from "react-icons/gr";
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

  getItem("Dashboard", 'default', <MdDashboardCustomize/>,[
    getItem(
      <Link to="/dashboard/default">Home</Link>,
      'auth-verify',
      null
    ),
    getItem(
      <Link to="/dashboard/teller">Teller</Link>,
      'auth-verify',
      null
    ),
  ]),
  getItem(
    <Link to="/dashboard/customer">Customer</Link>,
    'customer',
    <FaUserFriends />
  ),
  getItem("Account", 'account', <PieChartFilled/>,[
    getItem(
      <Link to="/dashboard/account">Deposit Account</Link>,
      'deposit',
      null
    ),
    getItem(
      <Link to="/dashboard/account/loan">loan Account</Link>,
      'loan',
      null
    ),
    getItem(
      <Link to="/dashboard/account/vault">Branch Vault</Link>,
      'vault',
      null
    ),
    getItem(
      <Link to="/dashboard/account/till">Till Management</Link>,
      'till',
      null
    ),
  ]),
  getItem("Disbursement",'disbursement',<TbGitBranch />,[
    getItem(
      <Link to="/dashboard/disbursement">All Disbursements</Link>,
      'disbursement',
      null
    ),
    getItem(
      <Link to="/dashboard/disbursement/batches">All Batches</Link>,
      'batches',
      null
    ),
    getItem(
      <Link to="/dashboard/disbursement/source">Source Account</Link>,
      'account',
      null
    ),
    getItem(
      <Link to="/dashboard/disbursement/partial">Partial Applications</Link>,
      'applications',
      null
    ),
    getItem(
      <Link to="/dashboard/disbursement/pending">Pending Approval</Link>,
      'approval',
      null
    ),
  ]),
  getItem( "All Transaction", 'transactions', <GrTransaction />, [
    getItem(
      <Link to="/dashboard/transaction">All</Link>,
      'disbursement',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/loan">Loan</Link>,
      'batches',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/deposit">Deposit</Link>,
      'account',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/teller">Teller</Link>,
      'applications',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/ledger">General Ledger</Link>,
      'approval',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/pending">Pending</Link>,
      'approval',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/cheque">Cheque</Link>,
      'approval',
      null
    ),
    getItem(
      <Link to="/dashboard/transaction/uncleared">Uncleared Cheque</Link>,
      'approval',
      null
    ),
  ]),
  getItem(
    "Reports",
    'report',
    <BsFillClipboard2DataFill />, [
      getItem(
        <Link to="/dashboard/report/customer">Customer</Link>,
        'customer',
        null
      ),
      getItem(
        "Loans",
        'loans',
        null, [
          getItem(
            <Link to="/dashboard/report/loan/portfolio">Loan Portfolio Report</Link>,
            'loan portfolio',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/due">Loan Due Report</Link>,
            'loan due',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/arrears">Loan Arrears Report</Link>,
            'loan arrears',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/disbursement">Loan Disbursement Report</Link>,
            'loan disbursement',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/closed">Closed Loan (Obligations Met) Report</Link>,
            'closed loan',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/account">Account Statement Report</Link>,
            'account statement',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/balance">Loan Balances Report</Link>,
            'loan balances',
            null
          ),
          getItem(
            <Link to="/dashboard/report/loan/balance">Loan Schedules Report</Link>,
            'loan balances',
            null
          ),
        ]
      ),
      getItem(
        <Link to="/dashboard/user">Deposits</Link>,
        'user',
        null
      ),
      getItem(
        "Mobile Channel Reports",
        'branch',
        null, [
          getItem(
            <Link to="/dashboard/report/mobile/bvn">BVN Linkage</Link>,
            'BVN Linkage',
            null
          ),
          getItem(
            <Link to="/dashboard/report/mobile/register">Registration</Link>,
            'Registration',
            null
          ),
          getItem(
            <Link to="/dashboard/report/mobile/password">Password Reset Record</Link>,
            'Password Reset Record',
            null
          ),
          getItem(
            <Link to="/dashboard/report/mobile/airtime">Airtime</Link>,
            'Airtime',
            null
          ),
          getItem(
            <Link to="/dashboard/report/mobile/data">Data</Link>,
            'Data',
            null
          ),
          getItem(
            <Link to="/dashboard/report/mobile/bill">Bill Payment</Link>,
            'Bill Payment',
            null
          ),
          getItem(
            <Link to="/dashboard/report/mobile/transfer">Transfer</Link>,
            'Transfer',
            null
          ),
        ]
      ),
      // getItem(
      //   <Link to="/dashboard/platform">Platform</Link>,
      //   'platform',
      //   null,
      // ),
    ]
  ),
  getItem(
   "Tasks",
    'task',
    <FaCircleNodes />, [
      getItem(
        <Link to="/dashboard/task">Task</Link>,
        'task',
        null
      ),
      getItem(
        <Link to="/dashboard/activities">Activities</Link>,
        'activities',
        null
      ),
      getItem(
        <Link to="/dashboard/user">User</Link>,
        'user',
        null
      ),
      getItem(
        <Link to="/dashboard/branch">Branch</Link>,
        'branch',
        null
      ),
      getItem(
        "Platform",
        'platform',
        null,
        [
          getItem(
            <Link to="/dashboard/platform">Customer Whitelist</Link>,
            'Customer Whitelist',
            null
          ),
          getItem(
            <Link to="/dashboard/payroll">Payroll Information</Link>,
            'Payroll Information',
            null
          ),
          getItem(
            <Link to="/dashboard/mandate">Mandates & Mandates Schedule</Link>,
            'Mandates & Mandates Schedule',
            null
          ),
        ]
      ),
    ]
  ),

  getItem(<Link to="/dashboard/accounting">Accounting</Link>,
    'accounting',
    <PiChartPieSliceFill />
  ),

  getItem(
    "Management",
    'management',
    <RiPlayList2Fill/>,
    [
      getItem(
        <Link to="/dashboard/management">Profile</Link>,
        'profile',
        null
      ),
      getItem(
        <Link to="/dashboard/management/branch">Branch</Link>,
        'batches',
        null
      ),
      getItem(
        <Link to="/dashboard/management/role">Role Management</Link>,
        'Role Management',
        null
      ),
      getItem(
        <Link to="/dashboard/management/reset">Password Reset</Link>,
        'Password Reset',
        null
      ),
      getItem(
        <Link to="/dashboard/transaction/ledger">Account</Link>,
        'approval',
        null
      ),
      getItem(
        <Link to="/dashboard/management/product">Product</Link>,
        'approval',
        null
      ),
      getItem(
        <Link to="/dashboard/transaction/cheque">Notification</Link>,
        'approval',
        null
      ),
    ]
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
const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
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
    const paths = pathname.split('/').filter(Boolean); // remove empty
    const keys: string[] = [];
  
    // Build keys progressively
    for (let i = 0; i < paths.length; i++) {
      const key = paths.slice(0, i + 1).join('/');
      keys.push(key);
    }
  
    setOpenKeys(keys.slice(0, -1)); // all except the last
    setCurrent(keys[keys.length - 1]); // current leaf path
  }, [pathname]);
  return (
    <Sider ref={nodeRef} width="220px" className='sidebar'  style={siderStyle} breakpoint="lg" collapsedWidth="0" {...others}>
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
        preview={false}
        src={logo}
        />
      </Flex>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
               // Background colors
              itemBg: COLOR["200"],             // Default menu background
              subMenuItemBg: COLOR["200"],      // Submenu item background
              itemSelectedBg: COLOR['250'],     // Selected item background
              itemHoverBg: COLOR['250'],        // Hover background
              
              // Text colors
              colorText: COLOR['250'],          // Default text color
              itemSelectedColor: COLOR['50'],   // Selected item text color (blue)
              itemHoverColor: COLOR['50'],      // Hover text color (blue)
              
              // Submenu text colors
              subMenuItemSelectedColor: COLOR['50'], // Selected submenu item text color
              horizontalItemSelectedColor: COLOR['50'], // Horizontal selected item text color
              
              // Parent item styles when submenu is active
              itemActiveBg: COLOR['250'],       // Active parent background          
              // Icon colors for better visibility
              colorTextLightSolid: COLOR['50'], // Light text color for icons
              
              // Submenu arrow colors
              horizontalItemHoverColor: COLOR['50'], // Horizontal item hover color
              
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
          selectedKeys={[...openKeys, current]}
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
          <RightOutlined style={{color:'white'}}/>
        </Col>
      </Flex>
    </Sider>
  );
};

export default SideNav;
