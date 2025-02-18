import { Card, Col, Divider, Flex, Input, Table, Tag, Typography } from "antd";
import { useState } from "react";
import { TbFileSearch } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import type { TableProps } from 'antd';
import { useAccountType } from "../../../context/AccountTypeContext";

const { Search } = Input;
// type TellerProps = {
//   accountType: any;
// };
interface DataType {
    key: string;
    name: string;
    repayDay: string;
    paymentId: string;
    amount: string;
    status: string[];
    balance: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Repayment Date',
      dataIndex: 'repayDay',
      key: 'repayDay',
    },
    {
      title: 'Payment Id',
      dataIndex: 'paymentId',
      key: 'paymentId',
    },
    {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color;
            if (tag === 'Successfull') {
              color = '#068B6C';
            }else{
                color="#1C1C1C66"
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </> 
      )
    },
    {
      title: 'Balance',
      dataIndex: 'balance',
      key: 'Balance',
     
    },
  ];
  
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    repayDay: "May 15, 2022",
    paymentId: 'EFTOOM1271',
    amount: "N23,000.00",
    status: ['Successfull'],
    balance:"N203,000"
  },
  {
   key: '2',
   name: 'John Brown',
   repayDay: "May 15, 2022",
   paymentId: 'EFTOOM1271',
   amount: "N23,000.00",
   status: ['Pending'],
   balance:"N203,000"
  },
  {
   key: '3',
   name: 'John Brown',
   repayDay: "May 15, 2022",
   paymentId: 'EFTOOM1271',
   amount: "N23,000.00",
   status: ['Pending'],
   balance:"N203,000"
  },
];

const Teller = () => {
    const { accountType } = useAccountType();
    // const [accountType, setAccountType] = useState("Deposit")
    return ( 
        <>
            {accountType === "Deposit" ? (
                <Col style={{padding: 40}}>
                    <Col>
                        <Typography.Title level={4}>Account Details</Typography.Title>
                        <Divider></Divider>
                        <Card>
                            <Flex gap={16}>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Account Number</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="978476455423"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Product</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Savings"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Branch</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Lekki"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >State</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Ondo"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Date Opened</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="01-12-2025"></Input>
                                </Col>
                            </Flex>
                            <Flex gap={16} style={{marginTop: 47}}>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Currency</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="NGN"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Ledger Balance</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="0"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Available Balance  </Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Ondo"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Uncleared Cheque</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="01-12-2025"></Input>
                                </Col>
                            </Flex>
                        </Card>
                    </Col>
                    <Col style={{marginTop: 24}}>
                        <Typography.Title level={4}>Customer information </Typography.Title>
                        <Divider></Divider>
                        <Card>
                            <Flex gap={16}>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Currency</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="NGN"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Name</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Alade Omotayo"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Branch</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Lekki"></Input>
                                </Col>
                            
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    > Client Code</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="CL87"></Input>
                                </Col>
                            </Flex>
                        </Card>
                    </Col>
                    <Col style={{marginTop: 24}}>
                        <Typography.Title level={4}>Mandate information </Typography.Title>
                        <Divider></Divider>
                        <Card>
                            <Flex gap={16}>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Account Name</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Alade Omotayo"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Mandate Role</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Savings"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Mandate Option</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Lekki"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Passport</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Ondo"
                                        suffix={<TbFileSearch/>}
                                    ></Input>
                                </Col>
                                <Col>
                                    <Typography.Text    
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Signature</Typography.Text>
                                    <Input 
                                        style={{
                                            marginTop: 8
                                        }} 
                                        placeholder="01-12-2025"
                                        suffix={<TbFileSearch/>}
                                    ></Input>
                                </Col>
                            </Flex>
                        </Card>
                    </Col>
                </Col>
            ): (
                <Col
                style={{
                    paddingLeft: 80,
                    paddingRight: 80
                }}
                >
                    <Col 
                        style={{
                            paddingLeft: 160,
                            paddingRight: 160
                        }}
                    >
                        <Search placeholder="Search using Account Number, Name, Product Type " enterButton="Search" size="large" prefix={<CiSearch/>}/>
                    </Col>
                    <Col style={{marginTop: 48}}>
                        <Typography.Title 
                            style={{
                                fontSize: 20,
                                fontWeight: 400,

                            }}
                        >Account Details</Typography.Title>
                        <Divider></Divider>
                        <Card>
                            <Flex gap={16}>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    > Loan Account Number</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="978476455423"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Loan Product</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Lekki"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Amount Borrowed</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Ondo"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Outstanding Balance</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="01-12-2025"></Input>
                                </Col>
                            </Flex>
                            <Flex gap={16} style={{marginTop: 47}}>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Interest Rate</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="NGN"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Loan Status</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="0"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Loan Due Date </Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="Ondo"></Input>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "16px",
                                            fontWeight: 400,
                                        }}
                                    >Repayment Schedule</Typography.Text>
                                    <Input style={{
                                        marginTop: 8
                                    }} placeholder="01-12-2025"></Input>
                                </Col>
                            </Flex>
                        </Card>
                    </Col>

                    <Col style={{marginTop: 24}} >
                        <Typography.Title 
                        style={{
                            fontSize: 20,
                            fontWeight: 400,

                            }}
                        >Loan History</Typography.Title>
                        <Divider></Divider>
                        <Table<DataType> columns={columns} dataSource={data} />
                    </Col>
                </Col>
            )}
       
        </>    
    );
}
 
export default Teller;