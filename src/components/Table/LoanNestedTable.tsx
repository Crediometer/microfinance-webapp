import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType, MenuProps } from 'antd';
import { Badge, Button, Dropdown, Space, Table, Typography} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { MdTouchApp } from 'react-icons/md';
import { FaTimes, FaTimesCircle } from "react-icons/fa";
import { FaCheck, FaCircleCheck, FaRegEye } from "react-icons/fa6";
import styled from 'styled-components';
import { CiEdit } from 'react-icons/ci';
import DepositViewModal from '../Modal/DepositViewModal';
import DepositEditModal from '../Modal/DepositEditModal';
import ConfirmModal from '../Modal/ConfirmModal';
import { COLOR } from '../../App';
import LoanViewModal from '../Modal/LoanViewModal';
import LoanEditModal from '../Modal/LoanEditModal';

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


const expandedRowRender = () => (
  <StyledExpandableTable
    columns={expandColumns}
    dataSource={expandDataSource}
    pagination={false}
  />
);

const LoanNestedTable = () => {
  const [viewModal, setViewModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [confirmModal, setConfirmModal] = useState(false)
  const [rejectModal, setRejectModal] = useState(false)
  const [acceptModal, setAcceptModal] = useState(false)
  const items: MenuProps['items'] = [

    {
      key: '1',
      label: 'View',
      icon: <FaRegEye />,
      onClick: ()=>{setViewModal(true)}
      //extra: '⌘P',
    },
    {
      key: '2',
      label: 'Edit',
      icon: <CiEdit />,
      onClick: ()=>{setEditModal(true)}
      //extra: '⌘B',
    },
    {
      key: '3',
      label: 'Accept',
      icon: <FaCheck />,
      onClick: ()=>{setAcceptModal(true)}
      // extra: '⌘S',
    },
    {
      key: '4',
      label: 'Reject',
      icon: <FaTimesCircle/>,
      onClick: ()=>{setRejectModal(true)}
      // extra: '⌘S',
    },
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
        <Dropdown menu={{ items }}>
          <Button style={{
              backgroundColor: 'transparent',
              border:"1px solid #C4C4C4",
              fontSize: "13px",
              fontWeight:"500",
              color:"#9BA6BC"
            }}
            onClick={(e) => e.preventDefault()}
          >
              Action <MdTouchApp color="#000000" />
          </Button>
        </Dropdown>
      ),
    },
];

  return(
    <>
      <StyledTable
        columns={columns}
        expandable={{ 
          expandedRowRender,   
      }}
        dataSource={dataSource}
      />

      {viewModal && (
        <LoanViewModal viewModal={viewModal} setViewModal={setViewModal}/>
      )}
      {editModal && (
        <LoanEditModal editModal={editModal} setEditModal={setEditModal}/>
      )}
      {acceptModal && (
        <ConfirmModal 
            confirmModal={acceptModal} 
            setConfirmModal={setAcceptModal} 
            icon={
              <FaCheck
                    style={{
                        fontSize: "3rem"
                    }}
                /> 
            }
            type="accept"
            text="Approve User"
            content="Are you sure you want to approve this user"
            label="Yes Approve"
        />  
      )}
       {rejectModal && (
        <ConfirmModal 
            confirmModal={rejectModal} 
            setConfirmModal={setRejectModal} 
            icon={
              <FaTimes
                    style={{  
                        fontSize: "3rem"
                    }}
                /> 
            }
            type="reject"
            text="Reject User"
            content="Are you sure you want to Reject this user"
            label="Yes Reject"
        />  
      )}
    </>
  )
};

export default LoanNestedTable;