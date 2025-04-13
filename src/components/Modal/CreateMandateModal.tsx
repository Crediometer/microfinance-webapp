import { Button, Card, Col, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
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


const CreateMandateModal = ({depositModal, setDepositModal}: any) => {
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
                }}>Create New</Typography.Title>
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
                                <Typography.Text>Mandate Type</Typography.Text><br></br>
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
                                <Typography.Text>Payer Name</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Product</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Start Date</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Start Date</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Bank Name</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Account Number</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
                                />
                            </Col>
                            <Col
                                style={{
                                    marginBottom:"16px"
                                }}
                            >
                                <Typography.Text>Narration</Typography.Text><br></br>
                                <Input
                                    style={{
                                        width:"100%",
                                        marginTop:"10px",
                                    }} 
                                    placeholder="Enter"
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
                                <Typography.Text>End Date</Typography.Text><br></br>
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
                                <Typography.Text>Phone Number</Typography.Text><br></br>
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
                                <Typography.Text>Email</Typography.Text><br></br>
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
                                <Typography.Text>Payer Address</Typography.Text><br></br>
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
                                <Typography.Text>Debit Frequency </Typography.Text><br></br>
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
                                <Typography.Text>Account Name</Typography.Text><br></br>
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
                                <Typography.Text>Mandate Image</Typography.Text><br></br>
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
                        <FaCheck
                            style={{
                                fontSize: "3rem"
                            }}
                        /> 
                    }
                    type="create"
                    text="Create User"
                    content="Are you sure you want to create this user"
                    label="Yes Create"
                />
            )}
        </>
    );
}
 
export default CreateMandateModal;