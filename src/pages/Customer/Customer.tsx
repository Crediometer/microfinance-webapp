import { Table, Typography, Dropdown, Tag } from "antd";
import type { TableProps } from 'antd';
import Filter from "../../components/Filter/Filter";
import CustomerDetailsModal from "../../components/Modal/CustomerModal";
import { useState } from "react";
import { MoreOutlined } from "@ant-design/icons";

interface DataType {
    key: string;
    id: string;
    customer: string;
    date: string;
    branch: string;
    accountType: string;
    status: string[];
}

const statusColors: Record<string, string> = {
    'active': '#058B42',
    'inactive': '#B11226',
    'Pending Approval': '#CD9B35',
    'blacklisted': '#000000'
};

const sheetRowOptions = [
    { key: "view", label: "View" },
    { key: "delete", label: "Delete" }
];

const customerOptions = [
    { value: '1', label: 'All Customer' },
    { value: '2', label: 'Inactive Customer' },
    { value: '3', label: 'Registered Customer' },
    { value: '4', label: 'Active Customer' }
];

const customerData: DataType[] = [
    {
        key: '1', id: "#5089", customer: 'John Brown', date: "6 April, 2023",
        branch: "Lekki", accountType: "Savings", status: ['active']
    },
    {
        key: '2', id: "#5089", customer: 'John Brown', date: "6 April, 2023",
        branch: "Lekki", accountType: "Savings", status: ['inactive']
    },
    {
        key: '3', id: "#5089", customer: 'John Brown', date: "6 April, 2023",
        branch: "Lekki", accountType: "Savings", status: ['Pending Approval']
    },
    {
        key: '4', id: "#5089", customer: 'John Brown', date: "6 April, 2023",
        branch: "Lekki", accountType: "Savings", status: ['blacklisted']
    },
    // ... other data items
];

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Customer',
        dataIndex: 'customer',
        key: 'customer',

    },
    {
        title: 'Date Created',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Branch',
        dataIndex: 'branch',
        key: 'branch',

    },
    {
        title: 'Account Type',
        dataIndex: 'accountType',
        key: 'accountType',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, { status }) => (
            status.map(tag => (
                <Tag
                    key={tag}
                    color={statusColors[tag]}
                >
                    {tag}
                </Tag>
            ))
        )
    },
    {
        key: "action",
        title: "",
        dataIndex: "action",
        fixed: "right",
        render: (_, record) => (
            <Dropdown
                menu={{
                    items: sheetRowOptions,
                    onClick: (item) => console.log(item.key, record)
                }}
                trigger={["click"]}
                placement="bottomRight"
            >
                <MoreOutlined className="cursor-pointer hover:text-blue-500" />
            </Dropdown>
        )
    }
];

const CustomerPage = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleModalCancel = () => setIsModalVisible(false);
    const handleModalFinish = (values: any) => {
        console.log('Form values:', values);
        setIsModalVisible(false);
    };

    return (
        <div className="p-4">
            <Filter
                options={customerOptions}
                selectplaceholder="All Customer"
                name="Create New Customer"
                button="customer"
                onClick={() => setIsModalVisible(true)}
            />

            <Table
                className="mt-8 w-full"
                columns={columns}
                dataSource={customerData}
                scroll={{ x: 800 }}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '50']
                }}
            />

            <CustomerDetailsModal
                visible={isModalVisible}
                onCancel={handleModalCancel}
                onFinish={handleModalFinish}
            />
        </div>
    );
};

export default CustomerPage;