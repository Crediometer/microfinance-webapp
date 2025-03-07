import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType, MenuProps } from 'antd';
import { Badge, Button, Dropdown, Space, Table, Typography} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { MdTouchApp } from 'react-icons/md';
import { FaTimesCircle } from "react-icons/fa";
import { FaCheck, FaCircleCheck, FaRegEye } from "react-icons/fa6";
import styled from 'styled-components';
import { CiEdit } from 'react-icons/ci';
import DepositViewModal from '../Modal/DepositViewModal';
import DepositEditModal from '../Modal/DepositEditModal';
import ConfirmModal from '../Modal/ConfirmModal';
import { COLOR } from '../../App';

const StyledTable = styled(Table)`
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

const StyledExpandableTable = styled(Table)`
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

// interface ExpandedDataType {
//   key: React.Key;
//   recipientName: string;
//   amount: string;
//   initiatedBy: string;
//   approvedBy: string;
//   sessionId: string;
// }

// interface DataType {
//   key: React.Key;
//   transactionRef: string,
//   requestDate: string;
//   sourceAccount: string;
//   senderName: string;
//   destinationAccount: string;
//   destinationBank: string;
// }

// const expandDataSource = Array.from({ length: 1 }).map<ExpandedDataType>((_, i) => ({
//   key: i.toString(),
//   recipientName: '6 April, 2023',
//   amount: 'NGN',
//   initiatedBy: 'NGN 20,000',
//   approvedBy:"NGN 600,000",
//   sessionId: "8990995"
// }));

// const dataSource = Array.from({ length: 3 }).map<DataType>((_, i) => ({
//   key: i.toString(),
//   transactionRef:"#5089",
//   requestDate:"6 April, 2023",
//   sourceAccount: 'John Brown',
//   senderName: "0098989098",
//   destinationAccount:"Lekki",
//   destinationBank:"Savings"
// }));

// const expandColumns: TableColumnsType<ExpandedDataType> = [
//   { title: 'Recipient Name', dataIndex: 'recipientName', key: 'recipientName' },
//   { title: 'Amount', dataIndex: 'amount', key: 'amount' },
//   { title: 'Initiated By', dataIndex: 'initiatedBy', key: 'initiatedBy' },
//   { title: 'Approved By', dataIndex: 'approvedBy', key: 'approvedBy' },
//   { title: 'Session Id', dataIndex: 'sessionId', key: 'sessionId' },
// ];


/** Props Interface */
interface TableProps<T> {
  columns: any[];
  dataSource: T[];
  expandableColumns?: any[];
}


// const expandedRowRender = () => (
//   <StyledExpandableTable
//     columns={expandColumns}
//     dataSource={expandDataSource}
//     pagination={false}
//   />
// );

const DisbursmentTable = <T extends { key: string; expandableData?: any[] }>({
  columns,
  dataSource,
  expandableColumns,
}: TableProps<T>)=> {
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

//   const columns: TableColumnsType<DataType> = [
//     {
//         title: 'Transaction Ref',
//         dataIndex: 'transactionRef',
//         key: 'transactionRef',
//     },
//     {
//         title: 'Request Date',
//         dataIndex: 'requestDate',
//         key: 'requestDate',
//     },
//     {
//         title: 'Source Account',
//         dataIndex: 'sourceAccount',
//         key: 'sourceAccount',
//     },
//     {
//         title: 'Sender Name',
//         dataIndex: 'senderName',
//         key: 'senderName',
//     },
//     {
//         title: 'Destination Account',
//         dataIndex: 'destinationAccount',
//         key: 'destinationAccount',
//     },
//     {
//         title: 'Destination Bank',
//         dataIndex: 'destinationBank',
//         key: 'destinationBank',
//     },
// ];

  return(
    <>
      <StyledTable
        columns={columns}
        dataSource={dataSource}
        expandable={
          expandableColumns
            ? {
                expandedRowRender: (record:any) =>
                  record.expandableData ? (
                    <StyledExpandableTable
                      columns={expandableColumns}
                      dataSource={record.expandableData}
                      pagination={false}
                    />
                  ) : null,
                rowExpandable: (record:any) => !!record.expandableData,
              }
            : undefined
        }
        rowKey={(record: any) => record.key}
      />

      {viewModal && (
        <DepositViewModal viewModal={viewModal} setViewModal={setViewModal}/>
      )}
      {editModal && (
        <DepositEditModal editModal={editModal} setEditModal={setEditModal}/>
      )}
      {acceptModal && (
        <ConfirmModal 
            confirmModal={acceptModal} 
            setConfirmModal={setAcceptModal} 
            icon={
              <FaCircleCheck
                    style={{
                        color: COLOR["50"],
                        fontSize: "8rem"
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
              <FaTimesCircle
                    style={{  
                        color: "#E30E29",
                        fontSize: "8rem"
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

export default DisbursmentTable;