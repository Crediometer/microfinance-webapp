import { Card, Col, Divider, Flex, Input, Typography } from "antd";
import { TbFileSearch } from "react-icons/tb";

const Teller = () => {
    return ( 
        <>
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
        </>    
    );
}
 
export default Teller;