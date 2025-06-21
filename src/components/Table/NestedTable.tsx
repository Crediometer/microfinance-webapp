import React, { useState } from 'react';
import {
  Table,
  Typography,
  Button,
  Dropdown,
  Space,
  Badge,
  Tag
} from 'antd';
import type { TableColumnsType, MenuProps } from 'antd';
import {
  DownOutlined,
  MoreOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { CiEdit } from 'react-icons/ci';
import DepositViewModal from '../Modal/DepositViewModal';
import DepositEditModal from '../Modal/DepositEditModal';
import ConfirmModal from '../Modal/ConfirmModal';
import { FaCheck, FaRegEye } from 'react-icons/fa6';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';

interface ExpandedDataType {
  key: React.Key;
  dateCreated: string;
  currency: string;
  depositBalance: string;
  availableBalance: string;
}

interface DataType {
  key: React.Key;
  id: string;
  customer: string;
  accountNumber: string;
  branch: string;
  accountType: string;
  status: string[];
}

const STATUS_COLORS: Record<string, string> = {
  'active': '#058B42',
  'inactive': '#B11226',
  'Pending Approval': '#CD9B35',
  'default': '#000000'
};

const EXPAND_DATA_SOURCE: ExpandedDataType[] = [
  {
    key: '1',
    dateCreated: '6 April, 2023',
    currency: 'NGN',
    depositBalance: 'NGN 20,000',
    availableBalance: 'NGN 600,000'
  }
];

const DATA_SOURCE: DataType[] = [
  {
    key: '1',
    id: "#5089",
    customer: 'John Brown',
    accountNumber: "0098989098",
    branch: "Lekki",
    accountType: "Savings",
    status: ['active']
  },
  {
    key: '2',
    id: "#5090",
    customer: 'Jane Smith',
    accountNumber: "0098989099",
    branch: "Victoria Island",
    accountType: "Current",
    status: ['Pending Approval']
  }
];

const EXPAND_COLUMNS: TableColumnsType<ExpandedDataType> = [
  {
    title: 'DATE CREATED',
    dataIndex: 'dateCreated',
    key: 'dateCreated',
    className: 'uppercase text-gray-500 text-xs font-medium'
  },
  {
    title: 'CURRENCY',
    dataIndex: 'currency',
    key: 'currency',
    className: 'uppercase text-gray-500 text-xs font-medium'
  },
  {
    title: 'DEPOSIT BALANCE',
    dataIndex: 'depositBalance',
    key: 'depositBalance',
    className: 'uppercase text-gray-500 text-xs font-medium'
  },
  {
    title: 'AVAILABLE BALANCE',
    dataIndex: 'availableBalance',
    key: 'availableBalance',
    className: 'uppercase text-gray-500 text-xs font-medium'
  },
];

const NestedTable = () => {
  const [modals, setModals] = useState({
    view: false,
    edit: false,
    accept: false,
    reject: false
  });

  const toggleModal = (modalName: keyof typeof modals, value: boolean) => {
    setModals(prev => ({ ...prev, [modalName]: value }));
  };

  const ACTION_ITEMS: MenuProps['items'] = [
    {
      key: 'view',
      label: 'View',
      icon: <FaRegEye className="mr-2" />,
      onClick: () => toggleModal('view', true)
    },
    {
      key: 'edit',
      label: 'Edit',
      icon: <CiEdit className="mr-2" />,
      onClick: () => toggleModal('edit', true)
    },
    {
      key: 'accept',
      label: 'Accept',
      icon: <FaCheck className="mr-2" />,
      onClick: () => toggleModal('accept', true)
    },
    {
      key: 'reject',
      label: 'Reject',
      icon: <FaTimesCircle className="mr-2" />,
      danger: true,
      onClick: () => toggleModal('reject', true)
    },
  ];

  const renderStatus = (status: string[]) => (
    <Space size="small">
      {status.map(tag => (
        <Tag
          key={tag}
          color={STATUS_COLORS[tag] || STATUS_COLORS.default}
        >
          {tag}
        </Tag>
      ))}
    </Space>
  );

  const COLUMNS: TableColumnsType<DataType> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      className: 'text-sm'
    },
    {
      title: 'CUSTOMER',
      dataIndex: 'customer',
      key: 'customer',
      className: 'text-sm'
    },
    {
      title: 'ACCOUNT NUMBER',
      dataIndex: 'accountNumber',
      key: 'accountNumber',
      className: 'text-sm'
    },
    {
      title: 'BRANCH',
      dataIndex: 'branch',
      key: 'branch',
      className: 'text-sm'
    },
    {
      title: 'ACCOUNT TYPE',
      dataIndex: 'accountType',
      key: 'accountType',
      className: 'text-sm'
    },
    {
      title: 'STATUS',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => renderStatus(status),
      className: 'text-sm'
    },
    {
      key: 'action',
      render: () => (
        <Dropdown menu={{ items: ACTION_ITEMS }} trigger={['click']}>

          <MoreOutlined className="cursor-pointer hover:text-blue-500" />

        </Dropdown>
      ),
      className: 'text-sm'
    },
  ];

  const expandedRowRender = () => (
    <Table
      columns={EXPAND_COLUMNS}
      dataSource={EXPAND_DATA_SOURCE}
      pagination={false}
      className="[&_.ant-table-expanded-row]:bg-yellow-50"
    />
  );

  return (
    <div className="border border-gray-200 mt-12 rounded-2xl overflow-hidden">
      <Table
        columns={COLUMNS}
        expandable={{ expandedRowRender }}
        dataSource={DATA_SOURCE}
        className="[&_.ant-table-thead_th]:bg-white [&_.ant-table-thead_th]:uppercase [&_.ant-table-thead_th]:text-gray-500 [&_.ant-table-thead_th]:text-xs [&_.ant-table-thead_th]:font-medium [&_.ant-table-tbody_td]:text-sm [&_.ant-table-row-expand-icon]:flex [&_.ant-table-row-expand-icon]:items-center [&_.ant-table-row-expand-icon]:justify-end"
      />

      <DepositViewModal
        visible={modals.view}
        onClose={() => toggleModal('view', false)}
      />

      <DepositEditModal
        visible={modals.edit}
        onClose={() => toggleModal('edit', false)}
      />

      <ConfirmModal
        visible={modals.accept}
        onClose={() => toggleModal('accept', false)}
        icon={<FaCheck className="text-4xl" />}
        type="accept"
        text="Approve User"
        content="Are you sure you want to approve this user?"
        label="Yes Approve"
      />

      <ConfirmModal
        visible={modals.reject}
        onClose={() => toggleModal('reject', false)}
        icon={<FaTimes className="text-4xl" />}
        type="reject"
        text="Reject User"
        content="Are you sure you want to reject this user?"
        label="Yes Reject"
      />
    </div>
  );
};

export default NestedTable;