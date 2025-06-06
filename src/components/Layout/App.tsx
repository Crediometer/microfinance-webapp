import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  QuestionOutlined,
  SettingOutlined,
  SunOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Dropdown,
  Flex,
  FloatButton,
  Image,
  Input,
  Layout,
  MenuProps,
  message,
  Select,
  Switch,
  theme,
  Tooltip,
  Typography,
} from 'antd';
import { ReactNode, useEffect, useRef, useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoChevronDown, IoSettings } from "react-icons/io5";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';
// import { NProgress } from '../../components';
//import { PATH_LANDING } from '../../constants';
//import { RootState } from '../../redux/store.ts';
// import { toggleTheme } from '../../redux/theme/themeSlice.ts';
import FooterNav from './FooterNav';
import HeaderNav from './HeaderNav';
import SideNav from './SideBar';
import avatar from "../../assets/avatar.png"
import { FiBell } from 'react-icons/fi';
import { FaBell } from "react-icons/fa6";
import { COLOR } from '../../App';
import { useAccountType } from '../../context/AccountTypeContext';
const { Content } = Layout;

type AppLayoutProps = {
  children: ReactNode;
  // setAccountType: any;
};

export const AppLayout = ({ children}: AppLayoutProps) => {
  const {
    token: { borderRadius },
  } = theme.useToken();
  const { accountType, setAccountType } = useAccountType();
  const isMobile = useMediaQuery({ maxWidth: 769 });
  const [collapsed, setCollapsed] = useState(true);
  const [navFill, setNavFill] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const floatBtnRef = useRef(null);
  //const dispatch = useDispatch();
  //const { mytheme } = useSelector((state: RootState) => state.theme);
  const items: MenuProps['items'] = [
    {
      key: 'user-profile-link',
      label: 'profile',
      icon: <UserOutlined />,
    },
    {
      key: 'user-settings-link',
      label: 'settings',
      icon: <SettingOutlined />,
    },
    {
      key: 'user-help-link',
      label: 'help center',
      icon: <QuestionOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'user-logout-link',
      label: 'logout',
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        message.open({
          type: 'loading',
          content: 'signing you out',
        });

        // setTimeout(() => {
        //   navigate(PATH_LANDING.root);
        // }, 1000);
      },
    },
  ];

  // Determine the header title based on the route
  let headerTitle 

  if(location.pathname.includes("/dashboard/teller")){
    headerTitle = "Teller Dashboard"
  }else if(location.pathname.includes("/dashboard/account")){
    headerTitle = "Account Management"
  }else if(location.pathname.includes("/dashboard/customer")) {
    headerTitle = "Customer Management"
  } else if(location.pathname.includes("/dashboard/disbursement")) {
    headerTitle = "Disbursements"
  } else if(location.pathname.includes("/dashboard/task")) {
    headerTitle = "Task"
  } else if(location.pathname.includes("/dashboard/activities")) {
    headerTitle = "Activity"
  } else if(location.pathname.includes("/dashboard/branch")) {
    headerTitle = "Branch"
  } else if(location.pathname.includes("/dashboard/platform")) {
    headerTitle = "Platform"
  } else if(location.pathname.includes("/dashboard/user")) {
    headerTitle = "User"
  } else if(location.pathname.includes("/dashboard/mandate")) {
    headerTitle = "Mandate"
  } else if(location.pathname.includes("/dashboard/payroll")) {
    headerTitle = "Platform"
  } else if(location.pathname.includes("/dashboard/report")) {
    headerTitle = "Report"
  } else if(location.pathname.includes("/dashboard/accounting")) {
    headerTitle = "Accounting"
  } else if(location.pathname.includes("/dashboard/management")) {
    headerTitle = "Management"
  } else{
    headerTitle = "Main Dashboard"
  }
  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setNavFill(true);
      } else {
        setNavFill(false);
      }
    });
  }, []);

  return (
    <>
      {/* <NProgress isAnimating={isLoading} key={location.key} /> */}
      <Layout
        style={{
          minHeight: '100vh',
          // backgroundColor: 'white',
        }}
      >
        <SideNav
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: 'auto',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            background: COLOR["200"],
            border: 'none',
            transition: 'all .2s',
            padding:"2rem 1rem",
            height: "100vh",
            // width: "250px"
          }}
        />
        <Layout
         
        >
          <HeaderNav
            style={{
              marginLeft: collapsed ? 0 : '220px',
              padding: '1.8rem 0.8rem',
              background: "#ffffff",
              backdropFilter: navFill ? 'blur(8px)' : 'none',
              boxShadow: navFill ? '0 0 8px 2px rgba(0, 0, 0, 0.05)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'sticky',   
              zIndex: 1,
              gap: 8,
              transition: 'all .25s',
            }}
          >
            <Flex align="center" gap={28}>
              {/* <Tooltip title={`${collapsed ? 'Expand' : 'Collapse'} Sidebar`}>
                <Button
                  type="text"
                  icon={
                    collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                  }}
                />
              </Tooltip> */}
              <Typography.Text style={{
                fontSize: 24,
                fontWeight:"600",
              }} color={`${COLOR['350']}`}>{headerTitle}</Typography.Text>
              {headerTitle === "Teller Dashboard" && (
                <Select
                size='small'
                style={{ width: 150 }}
                showSearch
                placeholder="Account Type"
                onChange={(value) => setAccountType(value)}
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[  
                  { value: 'Deposit', label: 'Deposit Account' },
                  { value: 'Loan', label: 'Loan Account' },
                ]}
              />
              )}
              <Select
                size='small'
                style={{ width: 150 }}
                showSearch
                placeholder="All Branches "
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  { value: '1', label: 'Akure Branch' },
                  { value: '2', label: 'Ondo Branch' },
                  { value: '3', label: 'Lagos Branch' },
                ]}
              />
              
            </Flex>
            <Flex align="center" gap="20px">
              <div
                style={{
                  width: "32.6px",
                  height: "32px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",       
                  padding: 0,
                  border:"1px solid #E7EAE9",
                  borderRadius: "8px"
                }}  
              >
                <FaBell style={{color: COLOR[50], fontSize:"1.2rem"}}/> 
              </div>
              {/* <Flex vertical> */}
                <Typography.Text>
                  Administrator
                </Typography.Text>
              {/* </Flex> */}
              <img
                width={40}
                height={40}
                src={avatar}
                style={{
                  borderRadius:"50%",
                  padding: "0px",
                  margin: "0px"
                }}
              >
              </img>
              <IoSettings style={{color: "#737373", fontSize:"1.5rem"}}/>
              <IoChevronDown style={{color: "#000000", fontSize:"1.5rem"}}/>
              {/* <Tooltip title="Theme">
                <Switch
                  className=" hidden sm:inline py-1"
                  checkedChildren={<MoonOutlined />}
                  unCheckedChildren={<SunOutlined />}
                  checked={mytheme === 'light' ? true : false}
                  onClick={() => dispatch(toggleTheme())}
                />
              </Tooltip> */}
              {/* <Dropdown menu={{ items }} trigger={['click']}>
              </Dropdown> */}
            </Flex>
          </HeaderNav>
          <Content
            style={{
              margin: `0 0 0 ${collapsed ? 0 : '220px'}`,
              // background: '#ebedf0',
              borderRadius: collapsed ? 0 : borderRadius,
              transition: 'all .25s',
              padding: '24px 32px',
              minHeight: 360,
            }}
          >
            <TransitionGroup>
              <SwitchTransition>
                <CSSTransition
                  key={`css-transition-${location.key}`}
                  nodeRef={nodeRef}
                  onEnter={() => {
                    setIsLoading(true);
                  }}
                  onEntered={() => {
                    setIsLoading(false);
                  }}
                  timeout={300}
                  classNames="bottom-to-top"
                  unmountOnExit
                >
                  {() => (
                    <div ref={nodeRef} style={{ background: 'none' }}>
                      {children}
                    </div>
                  )}
                </CSSTransition>
              </SwitchTransition>
            </TransitionGroup>
            <div ref={floatBtnRef}>
              <FloatButton.BackTop />
            </div>
          </Content>  
        </Layout>
      </Layout>
    </>
  );
};
