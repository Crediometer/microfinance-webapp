import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, Checkbox, Row, Col } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { EyeOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import ConfirmModal from './ConfirmModal';
import { FiDownload } from 'react-icons/fi';

interface PermissionProps {
  module: string;
  view: boolean;
  edit: boolean;
  create: boolean;
}

export const AddRoleModal: React.FC<{ visible: boolean; onCancel: () => void; onSubmit: (values: any) => void }> = ({
  visible,
  onCancel,
  onSubmit,
}) => {
const [confirmModal, setConfirmModal] = useState(false);
  const [form] = Form.useForm();
  const [permissions, setPermissions] = useState<PermissionProps[]>([
    { module: 'Dashboard', view: false, edit: false, create: false },
    { module: 'Customers', view: false, edit: false, create: false },
    { module: 'Accounts', view: false, edit: false, create: false },
    { module: 'Disbursement', view: false, edit: false, create: false },
    { module: 'All Transactions', view: false, edit: false, create: false },
    { module: 'Reports', view: false, edit: false, create: false },
    { module: 'Tasks', view: false, edit: false, create: false },
    { module: 'Mobile channel', view: false, edit: false, create: false },
    { module: 'Branches', view: false, edit: false, create: false },
    { module: 'Management', view: false, edit: false, create: false },
    { module: 'Accounting', view: false, edit: false, create: false },
  ]);

  const handleUserRightsChange = (value: string) => {
    form.setFieldsValue({ userRights: value });
  };

  const handleAccessRightChange = (value: string) => {
    form.setFieldsValue({ accessRight: value });
  };

  const handlePermissionChange = (
    moduleIndex: number,
    permissionType: 'view' | 'edit' | 'create',
    checked: boolean
  ) => {
    const updatedPermissions = [...permissions];
    updatedPermissions[moduleIndex][permissionType] = checked;
    setPermissions(updatedPermissions);
  };

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      onSubmit({
        ...values,
        permissions,
      });
      form.resetFields();
    });
  };

  return (
    <>
        <Modal
        title={
            <div style={{ textAlign: 'center' }}>
            <h3>Add New Role</h3>
            <p style={{ color: '#666', marginBottom: 0 }}>Provide details</p>
            </div>
        }
        open={visible}
        footer={null}
        onCancel={onCancel}
        width={700}
        centered
        >
        <Form form={form} layout="vertical">
            <Form.Item
            name="roleName"
            label="Role Name"
            rules={[{ required: true, message: 'Please enter role name' }]}
            >
            <Input placeholder="Enter Role Name" />
            </Form.Item>

            <Form.Item
            name="userRights"
            label="User Rights"
            rules={[{ required: true, message: 'Please select user rights' }]}
            >
            <Select placeholder="Select" onChange={handleUserRightsChange}>
                <Select.Option value="administrator">Administrator</Select.Option>
                <Select.Option value="teller">Teller</Select.Option>
                <Select.Option value="accountOfficer">Account Officer</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            name="accessRight"
            label="Access right"
            rules={[{ required: true, message: 'Please select access right' }]}
            >
            <Select placeholder="Select" onChange={handleAccessRightChange}>
                <Select.Option value="portalAccess">Portal Access</Select.Option>
                <Select.Option value="apiAccess">API Access</Select.Option>
            </Select>
            </Form.Item>

            <div style={{ marginBottom: 16 }}>
            <p style={{ borderBottom: '1px solid #e8e8e8', paddingBottom: 8 }}>Permissions</p>
            </div>

            {permissions.map((permission, index) => (
            <Row key={permission.module} align="middle" style={{ marginBottom: 12 }}>
                <Col span={6}>
                <Checkbox>{permission.module}</Checkbox>
                </Col>
                <Col span={18}>
                <Row justify="end" gutter={8}>
                    <Col>
                    <Button
                        type={permission.view ? "primary" : "default"}
                        icon={<EyeOutlined />}
                        size="small"
                        style={{ backgroundColor: permission.view ? '#4169E1' : undefined }}
                        onClick={() => handlePermissionChange(index, 'view', !permission.view)}
                    >
                        View
                    </Button>
                    </Col>
                    <Col>
                    <Button
                        type={permission.edit ? "primary" : "default"}
                        icon={<EditOutlined />}
                        size="small"
                        style={{ backgroundColor: permission.edit ? '#4169E1' : undefined }}
                        onClick={() => handlePermissionChange(index, 'edit', !permission.edit)}
                    >
                        Edit
                    </Button>
                    </Col>
                    <Col>
                    <Button
                        type={permission.create ? "primary" : "default"}
                        icon={<PlusOutlined />}
                        size="small"
                        style={{ backgroundColor: permission.create ? '#4169E1' : undefined }}
                        onClick={() => handlePermissionChange(index, 'create', !permission.create)}
                    >
                        Create
                    </Button>
                    </Col>
                </Row>
                </Col>
            </Row>
            ))}

            <Row justify="center" style={{ marginTop: 24 }}>
            <Col span={12} style={{ paddingRight: 8 }}>
                <Button block onClick={onCancel}>
                Cancel
                </Button>
            </Col>
            <Col span={12} style={{ paddingLeft: 8 }}>
                <Button type="primary" block style={{ backgroundColor: '#4169E1' }} onClick={()=>{setConfirmModal(true)}}>
                Create Role
                </Button>
            </Col>
            </Row>
        </Form>
        </Modal>
        {confirmModal && (
            <ConfirmModal
                setConfirmModal={setConfirmModal}
                confirmModal={confirmModal}
                icon={
                    <FiDownload    
                        style={{
                            fontSize: "3rem"
                        }}
                    />
                }
                text="Create New Role"
                content="Are you sure you want to create new role"
                label="Yes Create"
                type="role"
            />
        )}
    </>
  );
};
