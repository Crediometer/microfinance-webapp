import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Form, Input, Select, InputNumber, Button, Space, Typography, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { COLOR } from '../../App';
import ConfirmModal from './ConfirmModal';
import { FaCheck } from 'react-icons/fa6';

interface LoanProductFormProps {
  visible: boolean;
  setmodal: any;
  onCancel: () => void;
  onSubmit: (values: any) => void;
}
const StyledModal = styled(Modal)`
    .ant-modal-content {
        background-color: #F5F5FA !important;  /* Change background */
        border-radius: 8px; /* Optional: Adjust border radius */
        padding: 24px; /* Optional: Adjust padding */
    }

    .ant-modal-header {
        background-color: transparent !important; /* Remove header background */
        border-bottom: none !important;
    }

    .ant-modal-footer {
        display: none; 
    }
`;

export const LoanProductModal: React.FC<LoanProductFormProps> = ({
  visible,
  setmodal,
  onCancel,
  onSubmit,
}) => {
  const [form] = Form.useForm();
  const [confirmModal, setConfirmModal]=useState(false)
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit(values);
      form.resetFields();
    });
  };

  return (
    <>
    <StyledModal
      centered
      open={visible}
      onCancel={onCancel}
      width={600}
    >
         <Typography.Title style={{
            textAlign: "center",
            color:"#070707E5",
            fontSize:"20px"
        }}>Adding a New Product(Loan)</Typography.Title>
        <Typography.Title style={{
            textAlign: "center",
            color:"#231F2099",
            fontSize:"16px"
        }}>Provide details</Typography.Title>
      <Card>
        <Form form={form} layout="vertical">
            <Form.Item
            name="productName"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter product name' }]}
            >
            <Input placeholder="Enter Product Name" />
            </Form.Item>

            <Form.Item
            name="currency"
            label="Currency"
            rules={[{ required: true, message: 'Please select currency' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="NGN">NGN</Select.Option>
                <Select.Option value="USD">USD</Select.Option>
                <Select.Option value="CAD">CAD</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="state"
            label="State"
            rules={[{ required: true, message: 'Please select state' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="Active">Active</Select.Option>
                <Select.Option value="Inactive">Inactive</Select.Option>
                <Select.Option value="Pending Approval">Pending Approval</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="loanAmount"
            label="Loan Amount"
            >
            <Input placeholder="Enter loan amount" />
            </Form.Item>

            <Form.Item
            name="defaultLoanAmount"
            label="Default Loan Amount"
            rules={[{ required: true, message: 'Please enter default loan amount' }]}
            >
            <Input placeholder="Enter Product Name" />
            </Form.Item>

            <Form.Item
            name="minimumLoanAmount"
            label="Minimum Loan Amount"
            rules={[{ required: true, message: 'Please enter minimum loan amount' }]}
            >
            <Input placeholder="Enter Product Name" />
            </Form.Item>

            <Form.Item
            name="maximumLoanAmount"
            label="Maximum Loan Amount"
            rules={[{ required: true, message: 'Please enter maximum loan amount' }]}
            >
            <Input placeholder="Enter Product Name" />
            </Form.Item>

            <Form.Item
            name="arrearsTolerance"
            label="Arrears Tolerance Period (days)"
            >
            <InputNumber style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
            name="arrearsCalculatedFrom"
            label="Arrears Days Calculated From"
            rules={[{ required: true, message: 'Please select calculation method' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="Disbursement">Disbursement</Select.Option>
                <Select.Option value="Repayment Due Date">Repayment Due Date</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="interestPaid"
            label="Interest Paid"
            rules={[{ required: true, message: 'Please select interest paid option' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No Toggle">No Toggle</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="interestCalculationMethod"
            label="Interest Calculation Method"
            rules={[{ required: true, message: 'Please select calculation method' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="Monthly">Monthly</Select.Option>
                <Select.Option value="Annually">Annually</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="interestType"
            label="Interest Type"
            rules={[{ required: true, message: 'Please select interest type' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="Flat Rate">Flat Rate</Select.Option>
                <Select.Option value="Reducing Balance">Reducing Balance</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="interestRateCharged"
            label="How is the interest Rate charged"
            rules={[{ required: true, message: 'Please select how interest is charged' }]}
            >
            <Select placeholder="Select">
                <Select.Option value="Upfront">Upfront</Select.Option>
                <Select.Option value="Periodic">Periodic</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="interestFrequency"
            label="Interest Frequency"
            >
            <Select placeholder="Select">
                <Select.Option value="Weekly">Weekly</Select.Option>
                <Select.Option value="Monthly">Monthly</Select.Option>
                <Select.Option value="Quarterly">Quarterly</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="amortization"
            label="Amortization"
            >
            <Select placeholder="Select">
                <Select.Option value="Installment">Installment</Select.Option>
                <Select.Option value="End of Term">End of Term</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="repaymentStrategy"
            label="Repayment Strategy"
            >
            <Select placeholder="Select">
                <Select.Option value="Equal Principal">Equal Principal</Select.Option>
                <Select.Option value="Equal Installments">Equal Installments</Select.Option>
            </Select>
            </Form.Item>
            <Button
                style={{
                    marginTop:"6px",
                    width:"100%",
                    backgroundColor: COLOR["50"],
                    fontSize:"13.14px",
                    fontWeight:"700",
                    color: "white"
                }}      
                onClick={()=>{setConfirmModal(true);}}
            >
                Submit
            </Button>
        </Form>
      </Card>
    </StyledModal>
    {confirmModal && (
        <ConfirmModal 
            confirmModal={confirmModal} 
            setConfirmModal={setConfirmModal} 
            setDepositModal={setmodal}
            icon={
                <FaCheck 
                    style={{
                        fontSize: "3rem"
                    }}
                /> 
            }
            type="product"
            text="Create Product"
            content="Are you sure you want to create this product"
            label="Yes Create"
        />
    )}
    </>
  );
};