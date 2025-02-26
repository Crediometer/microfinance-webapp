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


const VaultModal = ({depositModal, setDepositModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    return ( 
        <>
            <StyledModal
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
                }}>Fund Account </Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide details to fund account </Typography.Title>
                <form>
                    <Card>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Enter Amount</Typography.Text><br></br>
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
                            <Typography.Text>Source Account</Typography.Text><br></br>
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
                            Cancle
                        </Button>
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
                        >
                            Fund
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
                                fontSize: "8rem"
                            }}
                        /> 
                    }
                    type="create"
                    text="Are you sure you want to create this account"
                    label="Yes Create"
                />
            )}
        </>
    );
}
 
export default VaultModal;