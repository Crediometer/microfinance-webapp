import React, { useState } from 'react';
import { 
  Modal, 
  Form, 
  Input, 
  Select, 
  DatePicker, 
  Tabs, 
  Button,
  Card,
  Tooltip,
  Flex,
  Col
} from 'antd';
import { UserOutlined, HomeOutlined, ContactsOutlined, QuestionCircleOutlined, RightOutlined } from '@ant-design/icons';
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

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={1000}
      className="customer-details-modal"
      closable={true}
      maskClosable={false}
    >
      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane 
          tab={
            <Flex align="center" gap={4}>
              <FaMapLocationDot style={{fontSize:"2rem", color:"#234FE3"}}/>
              <Col style={{marginLeft:"15px"}}>
                <h4 style={{fontSize: "16.67px", fontWeight:600, color:"#070707E5"}}>Personal Details</h4>
                <div style={{fontSize: "11px", fontWeight:500, color:"#231F2099"}}>Address and work details</div>
              </Col>
            </Flex>
          } 
          key="1"
        >
          <Form
            form={form}
            layout="vertical"
            name="customer_details_form"
            onFinish={onFinish}
          >
            <div className="form-row">
              <Form.Item
                name="firstName"
                label="First Name"
                className="form-item-half"
              >
                <Input placeholder="Enter First Name" />
              </Form.Item>
              <Form.Item
                name="dateOfBirth"
                label="Date of Birth"
                className="form-item-half"
              >
                <DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="lastName"
                label="Last Name"
                className="form-item-half"
              >
                <Input placeholder="Enter Last Name" />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                className="form-item-half"
              >
                <Select placeholder="Select">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="middleName"
                label="Middle Name"
                className="form-item-half"
              >
                <Input placeholder="Enter Middle Name" />
              </Form.Item>
              <Form.Item
                name="nationality"
                label="Nationality"
                className="form-item-half"
              >
                <Input placeholder="Enter Nationality" />
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="customerType"
                label="Customer Type"
                className="form-item-half"
              >
                <Select placeholder="Select">
                  <Option value="individual">Individual</Option>
                  <Option value="business">Business</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="customerBranch"
                label="Customer Branch"
                className="form-item-half"
              >
                <Select placeholder="Select">
                  <Option value="main">Main Branch</Option>
                  <Option value="north">North Branch</Option>
                  <Option value="south">South Branch</Option>
                </Select>
              </Form.Item>
            </div>

            <div className="form-row">
              <Form.Item
                name="numericId"
                label={
                  <span>
                    Numeric ID
                    <Tooltip title="Unique identifier for the customer">
                      <QuestionCircleOutlined style={{ marginLeft: 4 }} />
                    </Tooltip>
                  </span>
                }
                className="form-item-half"
              >
                <Select placeholder="Select">
                  <Option value="id1">ID001</Option>
                  <Option value="id2">ID002</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="accountOfficer"
                label="Account Officer"
                className="form-item-half"
              >
                <Select placeholder="Select">
                  <Option value="officer1">John Smith</Option>
                  <Option value="officer2">Jane Doe</Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
        </TabPane>

        <TabPane 
          tab={
            <Flex align="center" gap={4}>
              <FaMapLocationDot style={{fontSize:"2rem", color:"#234FE3"}}/>
              <Col style={{marginLeft:"15px"}}>
                <h4 style={{fontSize: "16.67px", fontWeight:600, color:"#070707E5"}}>Address & Employment</h4>
                <div style={{fontSize: "11px", fontWeight:500, color:"#231F2099"}}>Address and work details</div>
              </Col>
            </Flex>
          } 
          key="2"
        >
          <Form
            form={form}
            layout="vertical"
            name="address_employment_form"
          >
            {/* Address & Employment form fields would go here */}
            <div className="form-placeholder">Address & Employment details form fields</div>
          </Form>
        </TabPane>

        <TabPane 
          tab={
            <Flex align="center" gap={10}>
              <FaMapLocationDot style={{fontSize:"2rem", color:"#234FE3"}}/>
              <Col style={{marginLeft:"15px"}}>
                <h4 style={{fontSize: "16.67px", fontWeight:600, color:"#070707E5"}}>Contact & Next of Kin</h4>
                <div style={{fontSize: "11px", fontWeight:500, color:"#231F2099"}}>Provide your details</div>
              </Col>
            </Flex>
          } 
          key="3"
        >
          <Form
            form={form}
            layout="vertical"
            name="contact_kin_form"
          >
            {/* Contact & Next of Kin form fields would go here */}
            <div className="form-placeholder">Contact & Next of Kin details form fields</div>
          </Form>
        </TabPane>
      </Tabs>

      <div className="modal-footer">
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

// Add this CSS to match the styling in the image
const styles = `
.customer-details-modal .ant-modal-content {
  border-radius: 8px;
}

.customer-details-modal .ant-tabs-nav {
  margin-bottom: 24px;
}

.customer-details-modal .ant-tabs-tab {
  padding: 16px 24px !important;
  margin: 0;
}    

.customer-details-modal .ant-tabs-tab-active {
  background-color: #f0f5ff;
  border-radius: 4px 4px 0 0;
}

.tab-description {
  font-size: 12px;
  color: #231F2099;
  margin-top: 4px;
}

.form-row {
  display: flex;
  gap: 16px;
}

.form-item-half {
  flex: 1;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.form-placeholder {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #bfbfbf;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
}
`;