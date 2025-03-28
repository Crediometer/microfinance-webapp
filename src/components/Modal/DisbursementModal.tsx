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


const DisbursementModal = ({depositModal, setDepositModal}: any) => {
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
                }}>New Disbursement</Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide details</Typography.Title>
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
                                <Typography.Text>Transaction Source</Typography.Text><br></br>
                                <Select
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }}
                                    showSearch
                                    placeholder="Source"
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
                                <Typography.Text>Source Account</Typography.Text><br></br>
                                <Select
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }}
                                    showSearch
                                    placeholder="Source"
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
                                <Typography.Text>Destination Bank</Typography.Text><br></br>
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
                                <Typography.Text>Destination Account</Typography.Text><br></br>
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
                                <Typography.Text>Amount (NGN)</Typography.Text><br></br>
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
                                <Typography.Text>Narration</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="NGN"
                                />
                            </Col>
                        </Col>
                    </Flex>
                    <Flex gap={10}>
                        <Button
                            style={{
                                marginTop:"6px",
                                width:"50%",
                                backgroundColor: "transparent",
                                fontSize:"13.14px",
                                fontWeight:"700",
                                border:"1px solid",
                                borderColor: COLOR["50"],
                                color: COLOR["50"],
                            }}      
                            onClick={()=>{setConfirmModal(true);}}
                        >
                            Cancle
                        </Button>
                        <Button
                            style={{
                                marginTop:"6px",
                                width:"50%",
                                backgroundColor: COLOR["50"],
                                fontSize:"13.14px",
                                fontWeight:"700",
                                color: "white"
                            }}      
                            onClick={()=>{setConfirmModal(true);}}
                        >
                            Submit
                        </Button>
                    </Flex>
                    
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
                    text="New Disbursement"
                    content="Are you sure you want to create this disbursement"
                    label="Yes Create"
                />
            )}
        </>
    );
}
 
export default DisbursementModal;