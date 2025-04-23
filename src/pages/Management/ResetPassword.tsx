import React, { useState } from 'react';
import { Layout, Menu, Typography, Form, Input, Checkbox, Button, Space } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  BankOutlined,
  TransactionOutlined,
  FileTextOutlined,
  SettingOutlined,
  TeamOutlined,
  CreditCardOutlined,
  MobileOutlined,
  AppstoreOutlined,
  BranchesOutlined,
  SafetyOutlined,
  ProfileOutlined,
  BlockOutlined,
  AuditOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const items: MenuItem[] = [
  getItem('Dashboard', '1', <HomeOutlined />),
  getItem('Customers', '2', <TeamOutlined />),
  getItem('Accounts', '3', <BankOutlined />),
  getItem('Account Management', '4', <SettingOutlined />),
  getItem('Disbursement', '5', <CreditCardOutlined />),
  getItem('All Transactions', '6', <TransactionOutlined />),
  getItem('Reports', '7', <FileTextOutlined />),
  getItem('Tasks', '8', <AuditOutlined />),
  getItem('Mobile Channel', '9', <MobileOutlined />),
  getItem('Branches', '10', <BranchesOutlined />),
  getItem('Accounting', '11', <ProfileOutlined />),
  getItem('Management', '12', <SettingOutlined />),
];

const managementSubItems: MenuItem[] = [
  getItem('Profile', 'sub1'),
  getItem('Branch', 'sub2'),
  getItem('Risk Management', 'sub3'),
  getItem('Financial Report', 'sub4'),
  getItem('Account', 'sub5'),
  getItem('Product', 'sub6'),
  getItem('Notification', 'sub7'),
];

const ResetPasswordManagement: React.FC = () => {
  const [form] = Form.useForm();
  const [requireAllDevices, setRequireAllDevices] = useState(true);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // Here you would implement the password reset logic
  };

  return (
    <Layout>
      <Layout>
        <Content style={{ padding: '0 24px', height: "85vh", display: 'flex',alignItems: 'center' }}>
          <div style={{ 
            background: 'white', 
            padding: '24px', 
            borderRadius: '8px',
            maxWidth: '850px',
            margin: '0 auto'
          }}>
            <Title level={4} style={{ marginBottom: '24px' }}>Reset Password</Title>
            <Text type="secondary">Create a new password that is at least 8 character long.</Text>
            
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              style={{ marginTop: '24px' }}
            >
              <Form.Item label="User Data (Username, Email, etc.)">
                <Input defaultValue="test@biobank.com" disabled />
              </Form.Item>
              
              <Form.Item
                label="New Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your new password!' },
                  { min: 8, message: 'Password must be at least 8 characters!' }
                ]}
              >
                <Input.Password placeholder="New password" />
              </Form.Item>
              
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              
              <Form.Item>
                <Checkbox
                  checked={requireAllDevices}
                  onChange={(e) => setRequireAllDevices(e.target.checked)}
                >
                  Require all devices to sign in with new password
                </Checkbox>
              </Form.Item>
              
              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit"
                  block
                  style={{ background: '#2457F5', height: '40px' }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ResetPasswordManagement;