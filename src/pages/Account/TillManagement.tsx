import { Button, Card, Col, Dropdown, Flex, TableColumnsType, Typography } from "antd";
import Filter from "../../components/Filter/Filter";
import NestedTable from "../../components/Table/NestedTable";
import { useState } from "react";
import DepositModal from "../../components/Modal/DepositModal";
import LoanModal from "../../components/Modal/LoanModal";
import LoanNestedTable from "../../components/Table/LoanNestedTable";
import PlainTable from "../../components/Table/PlainTable";
import VaultFilter from "../../components/Filter/VaultFilter";
import type { TableProps, MenuProps  } from 'antd';
import { FaCheck, FaRegEye, FaTrash } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { FaTimesCircle } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import CountUp from "react-countup";
import VaultModal from "../../components/Modal/VaultModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import TransferModal from "../../components/Modal/TransferModal";
import CreateVaultModal from "../../components/Modal/CreateVaultModal";
import OpenTillModal from "../../components/Modal/OpenTillModal";
import CloseTillModal from "../../components/Modal/CloseTillModal";
import RemoveCashModal from "../../components/Modal/RemoveCashModal";
import AddCashModal from "../../components/Modal/AddCashModal";

interface DataType {
  key: React.Key;
  id: string,
  current: string;
  currency: string;
  branch: string;
  accountType: string;
  status: string[];
  openDate: string;
}

const data: DataType[] = [
    {
        key: '1',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['1'],
        openDate:"01/04/2024"
    },
    {
        key: '2',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['0'],
        openDate:"01/04/2024"
    },
    {
        key: '3',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['1'],
        openDate:"01/04/2024"
    },
    {
        key: '4',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['0'],
        openDate:"01/04/2024"
    },
    {
        key: '5',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['1'],
        openDate:"01/04/2024"
    },
    {
        key: '6',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['0'],
        openDate:"01/04/2024"
    },
    {
        key: '7',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['1'],
        openDate:"01/04/2024"
    },
    {
        key: '8',
        id:"#5089",
        current: '50,000',
        currency: "NGN",
        branch:"Lekki",
        accountType:"Savings",
        status: ['1'],
        openDate:"01/04/2024"
    },
    ];
const currencyoptions = [
    {
        value: 'ngn',
        label: 'NGN',
    },
    {
        value: 'usd',
        label: 'USD',
    },
    {
        value: 'gbp',
        label: 'GBP',
    },
]
const statusoptions = [
    {
        value: 'approved',
        label: 'Approved',
    },
    {
        value: 'pending',
        label: 'Pending',
    },
    {
        value: 'Blacklist',
        label: 'Blacklisted',
    },
]
const branchoptions = [
    {
        value: 'akure',
        label: 'Akure',
    },
    {
        value: 'Ibadan',
        label: 'Ibadan',
    },
    {
        value: 'Abuja',
        label: 'Abuja',
    },
]

const TillManagement = () => {
    const [depositModal, setDepositModal] = useState(false)
    const [closeModal, setCloseModal] = useState(false)
    const [removeModal, setRemoveModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [transferModal, setTransferModal] = useState(false)
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Close Till',
            // icon: <FaTrash />,
            onClick: ()=>{setCloseModal(true)}
            //extra: '⌘P',
        },
        {
            key: '2',
            label: 'Transfer Cash',
            // icon: <CiEdit />,
            onClick: ()=>{setTransferModal(true)}
        },
        {
            key: '3',
            label: 'Remove Cash',
            // icon: <FaCheck />,
            onClick: ()=>{setRemoveModal(true)}
        },
        {
            key: '4',
            label: 'Add Cash',
            // icon: <FaTimesCircle/>,
            onClick: ()=>{setAddModal(true)}
        },
        {
            key: '5',
            label: 'Edit Till Information',
            // icon: <FaTimesCircle/>,
            //   onClick: ()=>{setRejectModal(true)}
        },
        {
            key: '6',
            label: 'View Till Details ',
            // icon: <FaTimesCircle/>,
            //   onClick: ()=>{setRejectModal(true)}
        },
    ];
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Current Balance',
            dataIndex: 'current',
            key: 'current',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
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
                if (tag === '1') {
                color = '#058B42';
                }else{
                    color = "#B11226"
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
                    >{tag === "1" ? "Open":"Close"}</Typography.Text>
                );
            })}
            </>
        ),
        },
        {
            title: 'Opened Date',
            dataIndex: 'openDate',
            key: 'openDate',
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
    return ( 
        <>
            <Flex
                justify="space-between"
                style={{
                    marginBottom: "30px"
                }}
            >
                <Card  
                    style={{
                        backgroundColor:"#EDEEFC",
                        width:"33%"
                    }}
                >
                    <p
                        style={{
                            fontSize: "24px",
                            color: "#000000",
                            fontWeight: 400,
                        }}
                    >
                        Total Open Tills
                    </p>
                    <Typography.Title
                        style={{
                            fontSize:"38px",
                            marginTop:"18px",
                            color: "#1C1C1C",
                            fontWeight: 600,
                        }}
                    >
                        <CountUp end={7265}/>
                    </Typography.Title>
                </Card>
                <Card
                    style={{
                        backgroundColor:"#E6F1FD",
                        width:"33%"
                    }}
                >
                    <p
                        style={{
                            fontSize: "24px",
                            color: "#000000",
                            fontWeight: 400,
                        }}
                    >
                        Total Opening Balance
                    </p>
                    <Typography.Title
                        style={{
                            fontSize:"38px",
                            marginTop:"18px",
                            color: "#1C1C1C",
                            fontWeight: 600,
                        }}
                    >
                        <CountUp end={97265}/>  NGN
                    </Typography.Title>
                </Card>
                <Card
                    style={{
                        backgroundColor:"#EDEEFC",
                        width:"33%"
                    }}
                >
                    <p
                        style={{
                            fontSize: "24px",
                            color: "#000000",
                            fontWeight: 400,
                        }}
                    >
                        Expected Cash in Tills 
                    </p>
                    <Typography.Title
                        style={{
                            fontSize:"38px",
                            marginTop:"18px",
                            color: "#1C1C1C",
                            fontWeight: 600,
                        }}
                    >
                        <CountUp end={57265}/>  NGN
                    </Typography.Title>
                </Card>
            </Flex>
            <VaultFilter
                currencyOption={currencyoptions} 
                currencyPlaceholder="Filter By Currency"
                statusOption={currencyoptions} 
                statusPlaceholder="Filter By Status" 
                branchOption={currencyoptions} 
                branchPlaceholder="Filter By Branch"  
                name="Open Till" 
                button="deposit" 
                modal={depositModal} 
                setModal={setDepositModal}
            />
            <Col 
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
            {depositModal && (
                <OpenTillModal
                    createModal = {depositModal}
                    setCreateModal ={setDepositModal}
                />
            )}
            {closeModal && (
                <CloseTillModal
                    createModal = {closeModal}
                    setCreateModal ={setCloseModal}
                />
            )}
            {removeModal && (
                <RemoveCashModal
                    createModal = {removeModal}
                    setCreateModal ={setRemoveModal}
                />
            )}
            {addModal && (
                <AddCashModal
                    createModal = {addModal}
                    setCreateModal ={setAddModal}
                />
            )}
             {transferModal && (
                <TransferModal
                    transferModal = {transferModal}
                    setTransferModal ={setTransferModal}
                />
            )}
        </>
    );
}
 
export default TillManagement