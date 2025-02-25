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
const LoanViewModal = ({viewModal, setViewModal}: any) => {
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
            }}>Profile View</Typography.Title>
            <Flex gap={6}>
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
                        <Typography.Text>ID</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="#51083"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Customer  Name</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Temitayo Testing"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Product Type</Typography.Text><br></br>
                        <StyledInput
                            disabled
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Personal loan"
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
                        <Typography.Text>Interest Rate</Typography.Text><br></br>
                        <StyledInput
                            disabled
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="5%"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Loan Amount</Typography.Text><br></br>
                        <StyledInput
                            disabled
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="NGN 50,000"
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
                        <Typography.Text>Branch </Typography.Text><br></br>
                        <StyledInput
                            disabled
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Lekki"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Installments</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="6"
                        />
                    </Col>
                  
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Maximum Withdrawal Amount (NGN)</Typography.Text><br></br>
                        <StyledInput
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
                        <Typography.Text>Anticipated Disbursement</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="2/03/2025"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>First Repayment Date</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="2/03/2025"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Loan Officer</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="2/03/2025"
                        />
                    </Col>
                </Card>
            </Flex>
        </StyledModal>
        
    </>
    );
}
 
export default LoanViewModal;