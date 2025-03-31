import { Button, Card, Col, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";

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

const StyledInput = styled(Input)`
    color: #737373 !important;
    font-size: 10px !important;
    font-weight: 400 !important;
    padding: 12px !important;

    &.ant-input {
        background-color: #F0F1F3 !important;
        border: 0.33px solid #707070 !important;
        width:100%;
    }
`;
const TransactionViewModal = ({approveModal, setApproveModal, setViewModal, viewModal}: any) => {
    return ( 
        <>
        <StyledModal
            width={850}
            footer=""
            centered
            open={viewModal}
            onOk={() => setViewModal(false)}
            onCancel={() => setViewModal(false)}
            style={{
                // maxWidth: "90vw",
                backgroundColor: "#F5F5FA",
                borderRadius: "4px",
            }}
        >
            <Typography.Title style={{
                textAlign: "center",
                color:"#070707E5",
                fontSize:"20px"
            }}>Approve Pending</Typography.Title>
            <Flex gap={6} style={{
                backgroundColor: "#ffffff",
            }}>
                <Card
                    style={{
                        width:"50%",
                        backgroundColor: "transaparent",
                    }}
                >
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Transaction ID</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="06022400000000"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Account Number</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="03764563773"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Amount</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="NGN 600,000"
                        />
                    </Col>
                </Card>
                <Card
                 style={{
                    width:"50%"
                 }}
                >
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Reference</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="1905211867000"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Currency</Typography.Text><br></br>
                        <StyledInput
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
                        <Typography.Text>Reason</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Payment"
                        />
                    </Col>
                </Card>
            </Flex>
            <Flex
                style={{
                    width:"100%",
                    marginTop:"35px"
                }}
                align="center"
                gap="24px"
            >
                <Button
                    style={{
                        width:"50%",
                        height:"43px",  
                        padding:"1rem",
                        border:"1px solid #234FE3",
                        backgroundColor:"transparent",
                        color:"#234FE3",
                        fontSize:"16px",
                        fontFamily:"500"
                    }}
                    onClick={() => setViewModal(false)}
                >
                    Cancle
                </Button>
                <Button
                style={{
                    width:"50%",
                    height:"43px",
                    backgroundColor: COLOR["50"],
                    padding:"1rem",
                    color:"white",
                    fontSize:"16px",
                    fontFamily:"500"
                
                }}
                onClick={() => setApproveModal(true)}
                >
                    Approve
                </Button>
            </Flex>
        </StyledModal>
        
    </>
    );
}
 
export default TransactionViewModal;