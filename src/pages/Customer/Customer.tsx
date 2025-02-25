import { Flex, Input, Select, DatePicker, Button, Tag, Space,Table, Col, Typography} from "antd";
import { CiSearch } from "react-icons/ci";
import { COLOR } from "../../App";
import { LuSlidersVertical } from "react-icons/lu";
import { MdTouchApp } from "react-icons/md";
import PlainTable from "../../components/Table/PlainTable";
import type { TableProps } from 'antd';
import Filter from "../../components/Filter/Filter";


const { RangePicker } = DatePicker;

interface DataType {
    key: string;
    id: string,
    customer: string;
    date: string;
    branch: string;
    accountType: string;
    status: string[];
}

const columns: TableProps<DataType>['columns'] = [
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
        title: 'Date Created',
        dataIndex: 'date',
        key: 'date',
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
const data: DataType[] = [
{
    key: '1',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['active']
},
{
    key: '2',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['inactive']
    },
    {
    key: '3',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['Pending Approval']
    },
    {
    key: '4',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['blacklisted']
    },
    {
    key: '5',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['active']
    },
    {
    key: '6',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['active']
    },
    {
    key: '7',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['active']
    },
    {
    key: '8',
    id:"#5089",
    customer: 'John Brown',
    date: "6 April, 2023",
    branch:"Lekki",
    accountType:"Savings",
    status: ['active']
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

const CustomerPage = () => {
    return (
        <>
            <Filter options={options} selectplaceholder="All Customer" name="Create New Customer" button="customer"/>
            {/* <Flex align="center" justify="space-between" style={{width:"100%"}}>
                <Flex align="center" gap={4} style={{width:"70%"}}>
                    <Input 
                        style={{
                            borderColor:"#4D6FED40",
                            fontSize: "14px",
                            color: "#9BA6BC",
                            fontWeight: 400,
                            padding: "11px",
                            width:"35%"
                        }}
                        placeholder="Search by Name, Customer ID, or Account Off...." 
                        prefix={<CiSearch/>} 
                    />
                    <Select
                        showSearch
                        className="custom-select"
                        style={{
                            width:200,
                            height:"42px",
                        }}
                        prefix={<LuSlidersVertical />}
                        placeholder="All Customer"
                        optionFilterProp="label"
                        filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={options}
                    />
                    <RangePicker
                    className="custom-picker"
                        style={{
                            height:"42px",
                        }}
                    />
                    <div
                        style={{
                            width: "35px",
                            height: "35px",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",      
                            backgroundColor: COLOR[50],
                            borderRadius: "2px"
                        }}  
                    >
                        <CiSearch style={{color: "white", fontSize:"1.2rem"}}/> 
                    </div>
                </Flex>
                <Flex>
                    <Button 
                        type="primary"  
                        size="large"
                        style={{
                            fontSize: "13.14px",
                            fontWeight: "700"
                        }}
                    >
                    + Create New Customer
                    </Button>
                </Flex>
            </Flex> */}
            <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data}/>
            </Col>   
        </>
    );
}
 
export default CustomerPage;