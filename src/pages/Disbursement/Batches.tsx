import { Button, Col, Dropdown, Table, Tag } from "antd";
import type { MenuProps } from 'antd';
import { useState } from "react";
import { MdTouchApp } from "react-icons/md";
import DisbursementFilter from "../../components/Filter/DisbursementFilter";
import DisbursmentTable from "../../components/Table/DisbursmentTable";
import { MoreOutlined } from "@ant-design/icons";

// Types
interface BatchData {
  key: string;
  batchDescription: string;
  batchReference: string;
  totalAmount: number;
  dateInitiated: string;
  batchStatus: 'Pending' | 'Completed' | 'Processing' | 'Failed';
  initiatedBy: string;
}

interface FilterOption {
  value: string;
  label: string;
}

// Constants
const FILTER_OPTIONS: FilterOption[] = [
  { value: '1', label: 'All Customer' },
  { value: '2', label: 'Inactive Customer' },
  { value: '3', label: 'Registered Customer' },
  { value: '4', label: 'Active Customer' },
];

const ACTION_MENU_ITEMS: MenuProps['items'] = [
  {
    key: '1',
    label: 'View Batch',
  },
];

const TABLE_COLUMNS = [
  {
    title: "Batch Description",
    dataIndex: "batchDescription",
    key: "batchDescription",
    // className: "font-medium"
  },
  {
    title: "Batch Reference",
    dataIndex: "batchReference",
    key: "batchReference",
    // className: "font-mono text-sm"
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
    render: (amount: number) => `₦${amount.toLocaleString()}`,
    // className: "text-right font-semibold"
  },
  {
    title: "Date Initiated",
    dataIndex: "dateInitiated",
    key: "dateInitiated",
    render: (date: string) => new Date(date).toLocaleDateString(),
    // className: "text-sm"
  },
  {
    title: "Batch Status",
    dataIndex: "batchStatus",
    key: "batchStatus",
    render: (status: string) => (
      <Tag color={getStatusStyle(status)}>
        {status}
      </Tag>
    )
  },
  {
    title: "Initiated By",
    dataIndex: "initiatedBy",
    key: "initiatedBy",
    // className: "text-sm"
  },
  {
    title: '',
    key: 'action',
    width: 100,
    render: (_: any, record: BatchData) => (
      <Dropdown
        menu={{ items: ACTION_MENU_ITEMS }}
        trigger={['click']}
        placement="bottomRight"
      >
        <MoreOutlined />
      </Dropdown>
    ),
  },
];

// Sample data - this would typically come from an API
const MOCK_DATA: BatchData[] = [
  {
    key: "1",
    batchDescription: "Payroll for March",
    batchReference: "PR-202503",
    totalAmount: 15000.75,
    dateInitiated: "2025-03-07T10:30:00Z",
    batchStatus: "Pending",
    initiatedBy: "John Doe"
  },
  {
    key: "2",
    batchDescription: "Supplier Payment",
    batchReference: "SP-202503",
    totalAmount: 25000.00,
    dateInitiated: "2025-03-06T14:00:00Z",
    batchStatus: "Completed",
    initiatedBy: "Jane Smith"
  },
  {
    key: "3",
    batchDescription: "Office Expenses",
    batchReference: "OE-202503",
    totalAmount: 5000.50,
    dateInitiated: "2025-03-05T09:15:00Z",
    batchStatus: "Processing",
    initiatedBy: "Michael Johnson"
  }
];

// Helper function for status styling
function getStatusStyle(status: string): string {
  const styles = {
    'Pending': 'yellow',
    'Completed': 'green',
    'Processing': 'blue',
    'Failed': 'red',
  };
  return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800 border border-gray-200';
}

const Batches: React.FC = () => {
  const [depositModal, setDepositModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRefresh = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="w-full h-full">

      {/* Filter Section */}
      <div className="px-6 mb-6">
        <DisbursementFilter
          currencyPlaceholder="Select Currency"
          currencyOption={FILTER_OPTIONS}
          statusPlaceholder="Select Status"
          statusOption={FILTER_OPTIONS}
          branchPlaceholder="Select Branch"
          branchOption={FILTER_OPTIONS}
          name="New Batch"
          button="deposit"
          modal={depositModal}
          setModal={setDepositModal}
        />
      </div>

      {/* Table Section */}
      <div className="px-6 pb-6">
        <Table
          columns={TABLE_COLUMNS}
          dataSource={MOCK_DATA}
          loading={loading}
          scroll={{ x: 900 }}
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            // className: "mt-4"
          }}
        />
      </div>
    </div>
  );
};

export default Batches;