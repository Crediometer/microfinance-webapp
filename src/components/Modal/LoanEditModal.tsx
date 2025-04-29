import { Button, Card, Col, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { FiEdit } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

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

const LoanEditModal = ({editModal, setEditModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    return (
        <>
          <StyledModal
                width={850}
                footer=""
                centered
                open={editModal}
                onOk={() => setEditModal(false)}
                onCancel={() => setEditModal(false)}
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
                }}>Modify Profile</Typography.Title>
                <form>
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
                                <Input
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
                                <Input
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
                                <Input
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
                                <Typography.Text>Interest Rate</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="5%"
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
                                <Typography.Text>Loan Amount</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="NGN 46,000"
                                />
                            </Col>
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
                                    placeholder="6"
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
                                    placeholder="NGN 39,000"
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
                                    placeholder="NGN67,000"
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
                                    placeholder="1/04/2025"
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
                        >
                            cancel                        </Button>
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
                        onClick={()=>{setConfirmModal(true);}}
                        
                        >
                            modify
                        </Button>
                    </Flex>
                </form>
            </StyledModal>
            {confirmModal && (
                <ConfirmModal 
                    confirmModal={confirmModal} 
                    setConfirmModal={setConfirmModal} 
                    icon={
                        <FaCheck
                            style={{
                                fontSize: "3rem"
                            }}
                        /> 
                    }
                    type="modify"
                    text="Are you sure you want to Modify this customer details "
                    label="Yes Modify"
                />
            )}     
        </> 

    );
}
 
export default LoanEditModal;