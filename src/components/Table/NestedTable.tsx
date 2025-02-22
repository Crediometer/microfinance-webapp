import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Button, Dropdown, Space, Table, Typography } from 'antd';
import { MdTouchApp } from 'react-icons/md';
import styled from 'styled-components';

const StyledTable = styled(Table<DataType   >)`
  .ant-table {
    border: 1px solid #e0e0e0;
    border-radius: 16px;
  }

  .ant-table-thead > tr > th {
    background-color:#FFFFFF !important;
    font-weight: 500;
    font-size: 13px;
    color: #8B909A;
    text-transform: uppercase;
    padding: 24px;
  }

  .ant-table-tbody > tr > td {
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
  }

  .ant-table-row-expand-icon {
    display: flex;
    align-items: center;
  }

  .ant-table-row-level-1 {
    background-color: #f9f9f9 !important;
  }

  .status-text {
    font-weight: 600;
    font-size: 14px;
  }

  .action-btn {
    background-color: transparent;
    border: 1px solid #c4c4c4;
    font-size: 13px;
    font-weight: 500;
    color: #9ba6bc;
    display: flex;
    align-items: center;
    gap: 5px;
  }

   .ant-table-row-expand-icon-cell {
    text-align: right !important;
  }

  .ant-table-row-expand-icon {
    display: flex;
    justify-content: flex-end; /* Moves the expand icon to the right */
  }
`;

const StyledExpandableTable = styled(Table<ExpandedDataType>)`
  .ant-table-expanded-row > td {
    background-color: #fef4c5 !important; /* Light yellow background */
    border: none;
    padding: 12px;
  }

  .ant-table-thead > tr > th {
    background-color: #FFFFFF !important;
    font-weight: 500;
    font-size: 13px;
    color: #8B909A;
    text-transform: uppercase;
    padding: 12px;
    border: none;
  }

  .ant-table-tbody > tr > td {
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
  }

  .ant-table-row-expand-icon {
    display: flex;
    align-items: center;
  }

  .status-text {
    font-weight: 600;
    font-size: 14px;
  }

  .action-btn {
    background-color: transparent;
    border: 1px solid #c4c4c4;
    font-size: 13px;
    font-weight: 500;
    color: #9ba6bc;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

interface ExpandedDataType {
  key: React.Key;
  dateCreated: string;
  currency: string;
  depositBalance: string;
  availableBalance: string;
}

interface DataType {
  key: React.Key;
  id: string,
  customer: string;
  accountNumber: string;
  branch: string;
  accountType: string;
  status: string[];
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const expandDataSource = Array.from({ length: 1 }).map<ExpandedDataType>((_, i) => ({
  key: i.toString(),
  dateCreated: '6 April, 2023',
  currency: 'NGN',
  depositBalance: 'NGN 20,000',
  availableBalance:"NGN 600,000"
}));

const dataSource = Array.from({ length: 3 }).map<DataType>((_, i) => ({
  key: i.toString(),
  id:"#5089",
  customer: 'John Brown',
  accountNumber: "0098989098",
  branch:"Lekki",
  accountType:"Savings",
  status: ['active']
}));

const expandColumns: TableColumnsType<ExpandedDataType> = [
  { title: 'DATE CREATED', dataIndex: 'dateCreated', key: 'dateCreated' },
  { title: 'CURRENCY', dataIndex: 'currency', key: 'currency' },
  { title: 'Deposit Balance', dataIndex: 'depositBalance', key: 'depositBalance' },
  { title: 'Available Balance', dataIndex: 'availableBalance', key: 'availableBalance' },
];

const columns: TableColumnsType<DataType> = [
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
        title: 'Account Number',
        dataIndex: 'accountNumber',
        key: 'accountNumber',
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
        <>
          {status.map((tag) => {
            let color
            if (tag === 'active') {
              color = '#058B42';
            }else if(tag === "inactive"){
                color = "#B11226"
            }else if(tag === "Pending Approval"){
                color =  '#CD9B35'
            }else{
                color = "#000000"
            }
            return (
                <Typography.Text
                    color={color}
                    style={{
                        fontSize: "15px",
                        fontWeight: "600",
                        color: color,
                        textTransform: "capitalize"
                    }}
                >{tag}</Typography.Text>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button style={{
            backgroundColor: 'transparent',
            border:"1px solid #C4C4C4",
            fontSize: "13px",
            fontWeight:"500",
            color:"#9BA6BC"
        }}>
            Action <MdTouchApp color="#000000" />
        </Button>
      ),
    },
];

const expandedRowRender = () => (
  <StyledExpandableTable
    columns={expandColumns}
    dataSource={expandDataSource}
    pagination={false}
  />
);

const NestedTable: React.FC = () => (
  <>
    <StyledTable
      columns={columns}
      expandable={{ 
        expandedRowRender, 
        defaultExpandedRowKeys: ['0'],
        
     }}
      dataSource={dataSource}
    />
  
  </>
);

export default NestedTable;