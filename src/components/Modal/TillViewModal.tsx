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
const TillViewModal = ({viewModal, setViewModal}: any) => {
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
            }}>View Till Details</Typography.Title>
            <Flex 
                gap={13}
                style={{
                    backgroundColor: "white",
                    padding:"18px 40px"
                }}
            >
                <Col
                    style={{
                        width:"50%",
                        backgroundColor: "transparent"
                    }}
                >
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Till ID</Typography.Text><br></br>
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
                        <Typography.Text>Teller Name</Typography.Text><br></br>
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
                        <Typography.Text>Branch:</Typography.Text><br></br>
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
                        <Typography.Text>Status</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Open"
                        />
                    </Col>
                </Col>
                <Col
                 style={{
                    width:"50%",
                    backgroundColor: "transparent"
                 }}
                >
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Opening Date</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="1/02/2025"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Closing Date</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="18/04/2024"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Balance</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="NGN 20,000"
                        />
                    </Col>
                    <Col
                        style={{
                            marginBottom:"24px"
                        }}
                    >
                        <Typography.Text>Currency Type</Typography.Text><br></br>
                        <StyledInput
                            style={{
                                width:"100%",
                                marginTop:"10px",
                            }} 
                            placeholder="Naira"
                        />
                    </Col>
                </Col>
            </Flex>
        </StyledModal>
        
    </>
    );
}
 
export default TillViewModal;