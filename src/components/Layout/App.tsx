import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import {
  Button,
  Drawer,
  Dropdown,
  Flex,
  FloatButton,
  Layout,
  MenuProps,
  message,
  Select,
  theme,
  Tooltip,
  Typography
} from 'antd';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { FaBell } from "react-icons/fa6";
import { IoChevronDown, IoSettings } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from 'react-transition-group';
import { COLOR } from '../../App';
import avatar from "../../assets/avatar.png";
import { useAccountType } from '../../context/AccountTypeContext';
import HeaderNav from './HeaderNav';
import SideNav from './SideBar';

const { Content } = Layout;

type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const {
    token: { borderRadius },
  } = theme.useToken();
  const { accountType, setAccountType } = useAccountType();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const [collapsed, setCollapsed] = useState(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [navFill, setNavFill] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const nodeRef = useRef(null);
  const floatBtnRef = useRef(null);

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
      },
    },
  ];

  // Determine the header title based on the route
  const getHeaderTitle = () => {
    const path = location.pathname;
    if (path.includes("/dashboard/teller")) return "Teller Dashboard";
    if (path.includes("/dashboard/account")) return "Account Management";
    if (path.includes("/dashboard/customer")) return "Customer Management";
    if (path.includes("/dashboard/disbursement")) return "Disbursements";
    if (path.includes("/dashboard/task")) return "Task";
    if (path.includes("/dashboard/activities")) return "Activity";
    if (path.includes("/dashboard/branch")) return "Branch";
    if (path.includes("/dashboard/platform")) return "Platform";
    if (path.includes("/dashboard/user")) return "User";
    if (path.includes("/dashboard/mandate")) return "Mandate";
    if (path.includes("/dashboard/payroll")) return "Platform";
    if (path.includes("/dashboard/report")) return "Report";
    if (path.includes("/dashboard/accounting")) return "Accounting";
    if (path.includes("/dashboard/management")) return "Management";
    return "Main Dashboard";
  };

  const headerTitle = getHeaderTitle();

  useEffect(() => {
    setCollapsed(isMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      setNavFill(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  const sidebarContent = (
    <SideNav
      trigger={null}
      collapsible
      collapsed={isMobile ? false : collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        overflow: 'auto',
        background: COLOR["200"],
        border: 'none',
        padding: "2rem 1rem",
        height: "100%",
      }}
    />
  );

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          title="Navigation"
          placement="left"
          closable={true}
          onClose={() => setMobileDrawerOpen(false)}
          open={mobileDrawerOpen}
          width={280}
          bodyStyle={{ padding: 0 }}
          headerStyle={{ background: COLOR["200"] }}
        >
          {sidebarContent}
        </Drawer>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            width: collapsed ? 80 : 220,
            zIndex: 1000,
            transition: 'all 0.2s',
          }}
        >
          {sidebarContent}
        </div>
      )}

      <Layout
        style={{
          marginLeft: isMobile ? 0 : (collapsed ? 80 : 220),
          transition: 'margin-left 0.2s',
        }}
      >
        <HeaderNav
          style={{
            padding: isMobile ? '1rem 0.5rem' : '1.8rem 0.8rem',
            background: "#ffffff",
            backdropFilter: navFill ? 'blur(8px)' : 'none',
            boxShadow: navFill ? '0 0 8px 2px rgba(0, 0, 0, 0.05)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            transition: 'all 0.25s',
          }}
        >
          <Flex 
            align="center" 
            gap={isMobile ? 8 : 28}
            wrap="wrap"
            style={{ flex: 1, minWidth: 0 }}
          >
            {isMobile && (
              <Button
                type="text"
                icon={<MenuUnfoldOutlined />}
                onClick={() => setMobileDrawerOpen(true)}
                size="large"
              />
            )}
            
            {!isMobile && (
              <Tooltip title={`${collapsed ? 'Expand' : 'Collapse'} Sidebar`}>
                <Button
                  type="text"
                  icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                    fontSize: '16px',
                    width: 48,
                    height: 48,
                  }}
                />
              </Tooltip>
            )}

            <Typography.Text 
              style={{
                fontSize: isMobile ? 18 : 24,
                fontWeight: "600",
                color: COLOR['350'],
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                flex: isMobile ? 1 : 'none',
              }}
            >
              {headerTitle}
            </Typography.Text>

            {!isMobile && headerTitle === "Teller Dashboard" && (
              <Select
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
                style={{ minWidth: 140 }}
              />
            )}

            {!isMobile && (
              <Select
                showSearch
                placeholder="All Branches"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  { value: '1', label: 'Akure Branch' },
                  { value: '2', label: 'Ondo Branch' },
                  { value: '3', label: 'Lagos Branch' },
                ]}
                style={{ minWidth: 140 }}
              />
            )}
          </Flex>

          <Flex 
            align="center" 
            gap={isMobile ? 8 : 20}
            style={{ flexShrink: 0 }}
          >
            <Button size={isMobile ? "small" : "middle"}>
              <FaBell style={{ 
                color: COLOR[50], 
                fontSize: isMobile ? "1rem" : "1.2rem" 
              }} />
            </Button>


            <img
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
              src={avatar}
              alt="Avatar"
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {!isMobile && (
              <>
                <Button>
                  <IoSettings size={isMobile ? 20 : 30} />
                </Button>
                <IoChevronDown />
              </>
            )}

            {isMobile && (
              <Dropdown menu={{ items }} trigger={['click']}>
                <Button type="text" size="small">
                  <IoChevronDown />
                </Button>
              </Dropdown>
            )}
          </Flex>
        </HeaderNav>

        <Content
          style={{
            padding: isMobile ? '16px' : '24px 32px',
            minHeight: 360,
            transition: 'all 0.25s',
          }}
        >
          {/* Mobile filters for teller dashboard */}
          {isMobile && headerTitle === "Teller Dashboard" && (
            <Flex gap={8} style={{ marginBottom: 16 }} wrap="wrap">
              <Select
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
                style={{ flex: 1, minWidth: 120 }}
              />
              <Select
                showSearch
                placeholder="All Branches"
                filterOption={(input, option) =>
                  (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                  { value: '1', label: 'Akure Branch' },
                  { value: '2', label: 'Ondo Branch' },
                  { value: '3', label: 'Lagos Branch' },
                ]}
                style={{ flex: 1, minWidth: 120 }}
              />
            </Flex>
          )}

          <TransitionGroup>
            <SwitchTransition>
              <CSSTransition
                key={`css-transition-${location.key}`}
                nodeRef={nodeRef}
                onEnter={() => setIsLoading(true)}
                onEntered={() => setIsLoading(false)}
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
  );
};