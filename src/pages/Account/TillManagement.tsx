import { Button, Card, Col, Dropdown, Statistic, Tag, type TableProps, type MenuProps } from "antd";
import { useState } from "react";
import { 
  HiOutlineX, 
  HiOutlineArrowsExpand, 
  HiOutlineMinus, 
  HiOutlinePlus,
  HiOutlinePencilAlt,
  HiOutlineEye 
} from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import CountUp from "react-countup";

// Components (assuming these exist)
import VaultFilter from "../../components/Filter/VaultFilter";
import PlainTable from "../../components/Table/PlainTable";
import OpenTillModal from "../../components/Modal/OpenTillModal";
import CloseTillModal from "../../components/Modal/CloseTillModal";
import RemoveCashModal from "../../components/Modal/RemoveCashModal";
import AddCashModal from "../../components/Modal/AddCashModal";
import TransferModal from "../../components/Modal/TransferModal";
import TillViewModal from "../../components/Modal/TillViewModal";
import { MoreOutlined } from "@ant-design/icons";

interface DataType {
  key: React.Key;
  id: string;
  current: string;
  currency: string;
  branch: string;
  accountType: string;
  status: string[];
  openDate: string;
}

// Mock data
const mockData: DataType[] = Array.from({ length: 8 }, (_, index) => ({
  key: String(index + 1),
  id: "#5089",
  current: "50,000",
  currency: "NGN",
  branch: "Lekki",
  accountType: "Savings",
  status: [index % 2 === 0 ? "1" : "0"],
  openDate: "01/04/2024",
}));

// Configuration constants
const FILTER_OPTIONS = {
  currency: [
    { value: "ngn", label: "NGN" },
    { value: "usd", label: "USD" },
    { value: "gbp", label: "GBP" },
  ],
  status: [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "pending", label: "Pending" },
  ],
  branch: [
    { value: "akure", label: "Akure" },
    { value: "ibadan", label: "Ibadan" },
    { value: "abuja", label: "Abuja" },
  ],
};

// Statistics configuration
const STATISTICS_CONFIG = [
  {
    title: "Total Open Tills",
    value: 7265,
    bgColor: "bg-[#EDEEFC]",
  },
  {
    title: "Total Opening Balance",
    value: 97265,
    suffix: " NGN",
    bgColor: "bg-[#E6F1FD]",
  },
  {
    title: "Expected Cash in Tills",
    value: 57265,
    suffix: " NGN",
    bgColor: "bg-[#EDEEFC]",
  },
];

const TillManagement: React.FC = () => {
  // Modal states
  const [modals, setModals] = useState({
    open: false,
    close: false,
    remove: false,
    add: false,
    transfer: false,
    view: false,
  });

  const toggleModal = (modalType: keyof typeof modals) => {
    setModals(prev => ({
      ...prev,
      [modalType]: !prev[modalType],
    }));
  };

  // Action menu items with appropriate icons
  const actionMenuItems: MenuProps['items'] = [
    {
      key: 'view',
      label: 'View Till Details',
      icon: <HiOutlineEye className="text-blue-500" />,
      onClick: () => toggleModal('view'),
    },
    {
      key: 'add',
      label: 'Add Cash',
      icon: <HiOutlinePlus className="text-green-500" />,
      onClick: () => toggleModal('add'),
    },
    {
      key: 'remove',
      label: 'Remove Cash',
      icon: <HiOutlineMinus className="text-orange-500" />,
      onClick: () => toggleModal('remove'),
    },
    {
      key: 'transfer',
      label: 'Transfer Cash',
      icon: <HiOutlineArrowsExpand className="text-purple-500" />,
      onClick: () => toggleModal('transfer'),
    },
    {
      key: 'edit',
      label: 'Edit Till Information',
      icon: <HiOutlinePencilAlt className="text-gray-500" />,
      onClick: () => console.log('Edit clicked'),
    },
    {
      type: 'divider',
    },
    {
      key: 'close',
      label: 'Close Till',
      icon: <HiOutlineX className="text-red-500" />,
      onClick: () => toggleModal('close'),
      danger: true,
    },
  ];

  // Status renderer component using Tag
  const StatusRenderer = ({ status }: { status: string[] }) => {
    const isOpen = status[0] === "1";
    return (
      <Tag 
        color={isOpen ? "success" : "error"}
        className="font-medium"
      >
        {isOpen ? "Open" : "Closed"}
      </Tag>
    );
  };

  // Table columns configuration
  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Till ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Current Balance',
      dataIndex: 'current',
      key: 'current',
      width: 150,
      render: (value) => (
        <span className="font-medium">₦{value}</span>
      ),
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
      width: 100,
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
      width: 120,
    },
    {
      title: 'Till Type',
      dataIndex: 'accountType',
      key: 'accountType',
      width: 130,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      width: 100,
      render: (status) => <StatusRenderer status={status} />,
    },
    {
      title: 'Opened Date',
      dataIndex: 'openDate',
      key: 'openDate',
      width: 120,
    },
    {
      title: '',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: () => (
        <Dropdown
          menu={{ items: actionMenuItems }}
          trigger={['click']}
          placement="bottomRight"
        >
          <MoreOutlined className="text-gray-600" />
        </Dropdown>
      ),
    },
  ];

  // Statistics cards component
  const StatisticsCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {STATISTICS_CONFIG.map((stat, index) => (
        <Card
          key={index}
          className={`${stat.bgColor} border-0 shadow-sm`}
        >
          <Statistic
            title={
              <span className="text-lg text-gray-800 font-normal">
                {stat.title}
              </span>
            }
            value={stat.value}
            formatter={(value) => (
              <span className="text-3xl font-semibold text-gray-900">
                <CountUp end={Number(value)} />
                {stat.suffix}
              </span>
            )}
          />
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <StatisticsCards />

      {/* Filter Component */}
      <VaultFilter
        currencyOption={FILTER_OPTIONS.currency}
        currencyPlaceholder="Filter By Currency"
        statusOption={FILTER_OPTIONS.status}
        statusPlaceholder="Filter By Status"
        branchOption={FILTER_OPTIONS.branch}
        branchPlaceholder="Filter By Branch"
        name="Open Till"
        button="deposit"
        setModal={() => toggleModal('open')}
      />

      {/* Table */}
      <div className="mt-7">
        <PlainTable<DataType>
          dataType="Till Management"
          columns={columns}
          data={mockData}
        />
      </div>

      {/* Modals */}
      <OpenTillModal
        createModal={modals.open}
        setCreateModal={() => toggleModal('open')}
      />

      <CloseTillModal
        createModal={modals.close}
        setCreateModal={() => toggleModal('close')}
      />

      <RemoveCashModal
        createModal={modals.remove}
        setCreateModal={() => toggleModal('remove')}
      />

      <AddCashModal
        createModal={modals.add}
        setCreateModal={() => toggleModal('add')}
      />

      <TransferModal
        transferModal={modals.transfer}
        setTransferModal={() => toggleModal('transfer')}
      />

      <TillViewModal
        viewModal={modals.view}
        setViewModal={() => toggleModal('view')}
      />
    </div>
  );
};

export default TillManagement;