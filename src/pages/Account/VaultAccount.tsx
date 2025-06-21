import { Button, Card, Col, Dropdown, Statistic, Typography, type TableProps, type MenuProps, Tag } from "antd";
import { useState } from "react";
import { FaRegEye, FaRegTrashAlt } from "react-icons/fa";
import { HiOutlinePencilAlt, HiOutlineArrowsExpand } from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import CountUp from "react-countup";

// Components (assuming these exist)
import VaultFilter from "../../components/Filter/VaultFilter";
import PlainTable from "../../components/Table/PlainTable";
import CreateVaultModal from "../../components/Modal/CreateVaultModal";
import VaultModal from "../../components/Modal/VaultModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import TransferModal from "../../components/Modal/TransferModal";
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
        { value: "approved", label: "Approved" },
        { value: "pending", label: "Pending" },
        { value: "blacklist", label: "Blacklisted" },
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
        title: "Number of Open Vaults",
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
        title: "Total Current Balance",
        value: 57265,
        suffix: " NGN",
        bgColor: "bg-[#EDEEFC]",
    },
];

const VaultAccount: React.FC = () => {
    // Modal states
    const [modals, setModals] = useState({
        create: false,
        fund: false,
        delete: false,
        transfer: false,
    });

    const toggleModal = (modalType: keyof typeof modals) => {
        setModals(prev => ({
            ...prev,
            [modalType]: !prev[modalType],
        }));
    };

    // Action menu items
    const actionMenuItems: MenuProps['items'] = [
        {
            key: 'view',
            label: 'View Details',
            icon: <FaRegEye className="text-blue-500" />,
            onClick: () => console.log('View clicked'),
        },
        {
            key: 'fund',
            label: 'Fund Vault',
            icon: <HiOutlinePencilAlt className="text-green-500" />,
            onClick: () => toggleModal('fund'),
        },
        {
            key: 'transfer',
            label: 'Transfer',
            icon: <HiOutlineArrowsExpand className="text-orange-500" />,
            onClick: () => toggleModal('transfer'),
        },
        {
            type: 'divider',
        },
        {
            key: 'delete',
            label: 'Delete',
            icon: <FaRegTrashAlt className="text-red-500" />,
            onClick: () => toggleModal('delete'),
            danger: true,
        },
    ];

    // Status renderer component
    const StatusRenderer = ({ status }: { status: string[] }) => {
        const isOpen = status[0] === "1";
        return (
            <Tag
                color={isOpen ? "green" : "red"}

            >
                {isOpen ? "Open" : "Closed"}
            </Tag>
        );
    };

    // Table columns configuration
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'ID',
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
            title: 'Account Type',
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
                    <MoreOutlined />
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
                name="Vault Creation"
                button="deposit"
                setModal={() => toggleModal('create')}
            />

            {/* Table */}
            <div className="mt-7">
                <PlainTable<DataType>
                    dataType="Vault Account"
                    columns={columns}
                    data={mockData}
                />
            </div>

            {/* Modals */}
            <CreateVaultModal
                createModal={modals.create}
                setCreateModal={() => toggleModal('create')}
            />

            <VaultModal
                depositModal={modals.fund}
                setDepositModal={() => toggleModal('fund')}
            />

            <DeleteModal
                deleteModal={modals.delete}
                setDeleteModal={() => toggleModal('delete')}
            />

            <TransferModal
                transferModal={modals.transfer}
                setTransferModal={() => toggleModal('transfer')}
            />
        </div>
    );
};

export default VaultAccount;