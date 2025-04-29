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
const ChequeViewModal = ({approveModal, setApproveModal, setViewModal, viewModal}: any) => {
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
            }}>View Cheque</Typography.Title>
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
                        <Typography.Text>Cheque No</Typography.Text><br></br>
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
                        <Typography.Text>Deposit Account</Typography.Text><br></br>
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
                        <Typography.Text>Cheque Transaction</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Payout"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Cheque Amount</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="NGN 600,000"
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
                        <Typography.Text>Cheque State</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Pending"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Posted By</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Olademeji Bayo"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Request Date</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="6 April, 2023"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Reference ID</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="0602240"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Remarks</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="test fee/M13P0001010225"
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
                {/* <Button
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
                    cancel                </Button> */}
                <Button
                style={{
                    width:"100%",
                    height:"43px",
                    backgroundColor: COLOR["50"],
                    padding:"1rem",
                    color:"white",
                    fontSize:"16px",
                    fontFamily:"500"
                
                }}
                onClick={() => setViewModal(false)}
                >
                    OK
                </Button>
            </Flex>
        </StyledModal>
        
    </>
    );
}
 
export default ChequeViewModal;