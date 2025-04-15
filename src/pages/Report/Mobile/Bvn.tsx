import { useState } from "react";
import { Button, Col, DatePicker, Dropdown, Input, MenuProps, Select, Space, TableProps } from "antd";
import PlainTable from "../../../components/Table/PlainTable";
import { SearchOutlined } from "@ant-design/icons";
import LoanFilter from "../../../components/Filter/LoanFilter";

// Updated data structure to match the columns in the image
interface CustomerDataType {
    key: string;
    cif: string;
    firstName: string;
    lastName: string;
    mobileNumber: string;
    bvn: string;
    otpUsed: string;
    dateLinked: string;
    otpGenerationDate: string;
}

// Sample data based on the image
const data: CustomerDataType[] = [
    {
        key: '1',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '2',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '3',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '4',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '5',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '6',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '7',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '8',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
    {
        key: '9',
        cif: "22300915013",
        firstName: "Olademeji",
        lastName: "Bayo",
        mobileNumber: "08176355436",
        bvn: "6365543542",
        otpUsed: "0883",
        dateLinked: "09-11-2021",
        otpGenerationDate: "10-11-2021",
    },
];

const options = [
    {
        value: '1',
        label: 'All Customer',
    },
    {
        value: '2',
        label: 'Inactive Customer',
    },
    {
        value: '3',
        label: 'Registered Customer',
    },
    {
        value: '4',
        label: 'Active Customer',
    },
]


const Bvn = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [depositModal, setDepositModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalItems, setTotalItems] = useState(200);

    // Channel options
    const channelOptions = [
        { value: 'Mobile Channel', label: 'Mobile Channel' },
        { value: 'Web Channel', label: 'Web Channel' },
        { value: 'All Channels', label: 'All Channels' },
    ];

    // Branch options
    const branchOptions = [
        { value: 'All Branches', label: 'All Branches' },
        { value: 'Branch 1', label: 'Branch 1' },
        { value: 'Branch 2', label: 'Branch 2' },
    ];

    // Product options
    const productOptions = [
        { value: 'All', label: 'All Loan Products' },
        { value: 'Personal', label: 'Personal Loan' },
        { value: 'Business', label: 'Business Loan' },
    ];

    // Account state options
    const accountStateOptions = [
        { value: 'All', label: 'All Account States' },
        { value: 'Active', label: 'Active' },
        { value: 'Inactive', label: 'Inactive' },
    ];

    // Account officer options
    const accountOfficerOptions = [
        { value: 'All', label: 'All Account Officers' },
        { value: 'Officer 1', label: 'Officer 1' },
        { value: 'Officer 2', label: 'Officer 2' },
    ];

    // Column definitions for the table
    const columns: TableProps<CustomerDataType>['columns'] = [
        {
            title: 'CIF',
            dataIndex: 'cif',
            key: 'cif',
        },
        {
            title: 'FIRST NAME',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'LAST NAME',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'MOBILE NUMBER',
            dataIndex: 'mobileNumber',
            key: 'mobileNumber',
        },
        {
            title: 'BVN',
            dataIndex: 'bvn',
            key: 'bvn',
        },
        {
            title: 'OTP USED',
            dataIndex: 'otpUsed',
            key: 'otpUsed',
        },
        {
            title: 'DATE LINKED',
            dataIndex: 'dateLinked',
            key: 'dateLinked',
        },
        {
            title: 'OTP GENERATION DATE',
            dataIndex: 'otpGenerationDate',
            key: 'otpGenerationDate',
        },
    ];

    // Handle pagination change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    // Handle page size change
    const handlePageSizeChange = (current: number, size: number) => {
        setPageSize(size);
        setCurrentPage(1);
    };

    // Pagination configuration
    const pagination = {
        current: currentPage,
        pageSize: pageSize,
        total: totalItems,
        onChange: handlePageChange,
        onShowSizeChange: handlePageSizeChange,
        showSizeChanger: true,
        showQuickJumper: false,
        showTotal: (total: number) => `Showing ${pageSize * (currentPage - 1) + 1} to ${Math.min(pageSize * currentPage, total)} of ${total}`,
    };

    return (
        <div className="reports-container">
            {/* Filter row */}
            <LoanFilter options={options} selectplaceholder="Account State" name="New Task" button="deposit" modal={depositModal} setModal={setDepositModal}/>
            {/* Table */}
            <div style={{ marginTop: '20px' }}>
                <PlainTable<CustomerDataType> 
                    dataType="Customer" 
                    columns={columns} 
                    data={data}
                />
            </div>
            
            {/* Bottom pagination info */}
            {/* <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', alignItems: 'center' }}>
                <div>
                    Showing
                    <Select 
                        defaultValue="10" 
                        style={{ width: 70, margin: '0 10px' }}
                        options={[
                            { value: '10', label: '10' },
                            { value: '20', label: '20' },
                            { value: '50', label: '50' },
                        ]}
                        onChange={(value) => setPageSize(Number(value))}
                    />
                    of {totalItems}
                </div>
                <div className="pagination-buttons">
    
                    <Space>
                        <Button disabled={currentPage === 1}>Previous</Button>
                        <Button type="primary">1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>Next</Button>
                    </Space>
                </div>
            </div> */}
        </div>
    );
};

export default Bvn;