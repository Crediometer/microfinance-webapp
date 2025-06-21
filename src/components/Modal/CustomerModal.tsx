import React, { useState } from 'react';
import { 
  Modal, 
  Form, 
  Input, 
  Select, 
  DatePicker, 
  Tabs, 
  Button,
  Tooltip,
  Row,
  Col
} from 'antd';
import { QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
import { FaMapLocationDot } from 'react-icons/fa6';

interface CustomerDetailsModalProps {
  visible: boolean;
  onCancel: () => void;
  onFinish: (values: any) => void;
}

const { TabPane } = Tabs;
const { Option } = Select;

const CustomerDetailsModal: React.FC<CustomerDetailsModalProps> = ({
  visible,
  onCancel,
  onFinish,
}) => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');

  const handleNext = () => {
    if (activeTab === '1') {
      setActiveTab('2');
    } else if (activeTab === '2') {
      setActiveTab('3');
    } else {
      form.submit();
    }
  };

  const renderTabTitle = (title: string, subtitle: string) => (
    <div className="flex items-center gap-4">
      <FaMapLocationDot className="text-2xl text-blue-600" />
      <div className="ml-4">
        <h4 className="text-base font-semibold text-gray-900">{title}</h4>
        <p className="text-xs font-medium text-gray-600">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      className="max-w-[95vw]"
      closable={true}
      maskClosable={false}
    >
      <Tabs activeKey={activeTab} onChange={setActiveTab} className="w-full">
        <TabPane 
          tab={renderTabTitle("Personal Details", "Address and work details")} 
          key="1"
        >
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Row gutter={[24, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item name="firstName" label="First Name">
                  <Input placeholder="Enter First Name" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="dateOfBirth" label="Date of Birth">
                  <DatePicker format="DD/MM/YYYY" className="w-full" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[24, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item name="lastName" label="Last Name">
                  <Input placeholder="Enter Last Name" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="gender" label="Gender">
                  <Select placeholder="Select">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[24, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item name="middleName" label="Middle Name">
                  <Input placeholder="Enter Middle Name" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="nationality" label="Nationality">
                  <Input placeholder="Enter Nationality" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[24, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item name="customerType" label="Customer Type">
                  <Select placeholder="Select">
                    <Option value="individual">Individual</Option>
                    <Option value="business">Business</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="customerBranch" label="Customer Branch">
                  <Select placeholder="Select">
                    <Option value="main">Main Branch</Option>
                    <Option value="north">North Branch</Option>
                    <Option value="south">South Branch</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[24, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item 
                  name="numericId" 
                  label={
                    <span className="flex items-center">
                      Numeric ID
                      <Tooltip title="Unique identifier for the customer">
                        <QuestionCircleOutlined className="ml-1" />
                      </Tooltip>
                    </span>
                  }
                >
                  <Select placeholder="Select">
                    <Option value="id1">ID001</Option>
                    <Option value="id2">ID002</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="accountOfficer" label="Account Officer">
                  <Select placeholder="Select">
                    <Option value="officer1">John Smith</Option>
                    <Option value="officer2">Jane Doe</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </TabPane>

        <TabPane 
          tab={renderTabTitle("Address & Employment", "Address and work details")} 
          key="2"
        >
          <Form form={form} layout="vertical">
            <Row gutter={[24, 16]}>
              <Col span={24}>
                <div className="p-8 text-center text-gray-500">
                  Address & Employment details form fields
                </div>
              </Col>
            </Row>
          </Form>
        </TabPane>

        <TabPane 
          tab={renderTabTitle("Contact & Next of Kin", "Provide your details")} 
          key="3"
        >
          <Form form={form} layout="vertical">
            <Row gutter={[24, 16]}>
              <Col span={24}>
                <div className="p-8 text-center text-gray-500">
                  Contact & Next of Kin details form fields
                </div>
              </Col>
            </Row>
          </Form>
        </TabPane>
      </Tabs>

      <div className="flex justify-end mt-6">
        <Button 
          type="primary" 
          onClick={handleNext}
          icon={activeTab === '3' ? undefined : <RightOutlined />}
        >
          {activeTab === '3' ? 'Submit' : 'Next'}
        </Button>
      </div>
    </Modal>
  );
};

export default CustomerDetailsModal;