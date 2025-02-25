import { Button, Card, Col, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { FaCircleCheck } from "react-icons/fa6";

const StyledModal = styled(Modal)`
    .ant-modal-content {
        background-color: #F5F5FA !important;  /* Change background */
        border-radius: 8px; /* Optional: Adjust border radius */
        padding: 24px; /* Optional: Adjust padding */
    }

    .ant-modal-header {
        background-color: transparent !important; /* Remove header background */
        border-bottom: none !important;
    }

    .ant-modal-footer {
        display: none; 
    }
`;


const LoanModal = ({depositModal, setDepositModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    return ( 
        <>
            <StyledModal
                width={850}
                footer=""
                centered
                open={depositModal}
                onOk={() => setDepositModal(false)}
                onCancel={() => setDepositModal(false)}
                style={{
                    backgroundColor: "#F5F5FA",
                    borderRadius: "4px",
                }}
            >
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#070707E5",
                    fontSize:"20px"
                }}>Create a Loan Account</Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide Client details</Typography.Title>
                <form>
                    <Flex gap={40} style={{
                        backgroundColor: "white",
                        padding:"18px 30px"
                    }}>
                        <Col
                            style={{
                                width:"50%"
                            }}
                        >
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Client Name</Typography.Text><br></br>
                                <Select
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }}
                                    showSearch
                                    placeholder="Search Client Name"
                                    optionFilterProp="label"
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                    ]}
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Product Type</Typography.Text><br></br>
                                <Select
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }}
                                    showSearch
                                    placeholder="Saving"
                                    optionFilterProp="label"
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    options={[
                                    {
                                        value: 'personal',
                                        label: 'Personal Loan',
                                    },
                                    {
                                        value: 'cooperate',
                                        label: 'Cooperate Loan',
                                    },
                                    ]}
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Currency</Typography.Text><br></br>
                                <Select
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }}
                                    showSearch
                                    placeholder="NGN"
                                    optionFilterProp="label"
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    options={[
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
                                    ]}
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Interest Rate</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter Interest Rate"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Loan Amount </Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter Amount"
                                />
                                <Typography.Text 
                                    style={{
                                        marginTop: "6px",
                                        color:"#8B909A",
                                        fontSize:"11.65px",

                                    }}
                                >Max ₦1,500,000 - Min ₦5,000 </Typography.Text>
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Branch</Typography.Text><br></br>
                                <Select
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }}
                                    showSearch
                                    placeholder="Select"
                                    optionFilterProp="label"
                                    // onChange={onChange}
                                    // onSearch={onSearch}
                                    options={[
                                    {
                                        value: 'akure',
                                        label: 'Akure',
                                    },
                                    {
                                        value: 'ondo',
                                        label: 'Ondo',
                                    },
                                    {
                                        value: 'lagos',
                                        label: 'Lagos',
                                    },
                                    ]}
                                />
                            </Col>
                        </Col>
                        <Col
                        style={{
                            width:"50%"
                        }}
                        >
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Installments</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter Amount"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Maximum Withdrawal Amount (NGN)</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter Amount"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Anticipated Disbursement</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="NGN"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>First Repayment Date</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="NGN67,000"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"24px"
                                }}
                            >
                                <Typography.Text>Loan Officer</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="NGN200,000"
                                />
                            </Col>
                        </Col>
                    </Flex>
                    <Button
                        style={{
                            marginTop:"6px",
                            width:"100%",
                            backgroundColor: COLOR["50"],
                            fontSize:"13.14px",
                            fontWeight:"700",
                            color: "white"
                        }}      
                        onClick={()=>{setConfirmModal(true);}}
                    >
                        Submit
                    </Button>
                </form>
            </StyledModal>
            {confirmModal && (
                <ConfirmModal 
                    confirmModal={confirmModal} 
                    setConfirmModal={setConfirmModal} 
                    setDepositModal={setDepositModal}
                    icon={
                       <FaCircleCheck 
                            style={{
                                color: COLOR["50"],
                                fontSize: "7rem"
                            }}
                        /> 
                    }
                    type="create"
                    text="Are you sure you want to create this loan account"
                    label="Yes Create"
                />
            )}
        </>
    );
}
 
export default LoanModal;