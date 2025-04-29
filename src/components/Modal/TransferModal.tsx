import { Button, Card, Col, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { FaCircleCheck } from "react-icons/fa6";
import SuccessModal from "./SuccessModal";

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


const TransferModal = ({transferModal, setTransferModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    return ( 
        <>
            <StyledModal
                footer=""
                centered
                open={transferModal}
                onOk={() => setTransferModal(false)}
                onCancel={() => setTransferModal(false)}
                style={{
                    backgroundColor: "#F5F5FA",
                    borderRadius: "4px",
                }}
            >
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#070707E5",
                    fontSize:"20px"
                }}>Transfer</Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide details</Typography.Title>
                <form>
                    <Card>
                         <Col
                            style={{
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Recipient Type</Typography.Text><br></br>
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
                                    value: 'saving',
                                    label: 'Saving',
                                },
                                {
                                    value: 'Loan',
                                    label: 'Loan',
                                },
                                ]}
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Recipient Account Number</Typography.Text><br></br>
                            <Input
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Recipient Account Number"
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Transfer Amount</Typography.Text><br></br>
                            <Input
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Enter Amount"
                            />
                        </Col>
                       
                    </Card>
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
                                height:"53px",  
                                padding:"1rem",
                                border:"1px solid #234FE3",
                                color:"#234FE3",
                                fontSize:"16px",
                                fontFamily:"500"
                            }}
                        >
                            cancel                        </Button>
                        <Button
                        style={{
                            width:"50%",
                            height:"53px",
                            backgroundColor: COLOR["50"],
                            padding:"1rem",
                            color:"white",
                            fontSize:"16px",
                            fontFamily:"500"
                        }}
                        onClick={()=>{setConfirmModal(true)}}
                        >
                            Transfer
                        </Button>
                    </Flex>
                </form>
            </StyledModal>
            {confirmModal && (
               <SuccessModal
                    successModal={confirmModal}
                    setSuccessModal={setConfirmModal}
                    setConfirmModal={setTransferModal}
                    title="Transfer Successful"
                />
            )}
        </>
    );
}
 
export default TransferModal;