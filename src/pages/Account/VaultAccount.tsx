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
import { FaCheck, FaRegEye } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { FaTimesCircle } from "react-icons/fa";
import { MdTouchApp } from "react-icons/md";
import CountUp from "react-countup";

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
const items: MenuProps['items'] = [

    {
      key: '1',
      label: 'View',
      icon: <FaRegEye />,
    //   onClick: ()=>{setViewModal(true)}
      //extra: '⌘P',
    },
    {
      key: '2',
      label: 'Edit',
      icon: <CiEdit />,
    //   onClick: ()=>{setEditModal(true)}
      //extra: '⌘B',
    },
    {
      key: '3',
      label: 'Accept',
      icon: <FaCheck />,
    //   onClick: ()=>{setAcceptModal(true)}
      // extra: '⌘S',
    },
    {
      key: '4',
      label: 'Reject',
      icon: <FaTimesCircle/>,
    //   onClick: ()=>{setRejectModal(true)}
      // extra: '⌘S',
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

const VaultAccount = () => {
    const [depositModal, setDepositModal] = useState(false)
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
                        Number of Open Vaults
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
                        Total Current Balance 
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
                name="Vault Creation" 
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
            {/* {depositModal && (
                <LoanModal
                    depositModal = {depositModal}
                    setDepositModal ={setDepositModal}
                />
            )} */}
        </>
    );
}
 
export default VaultAccount;