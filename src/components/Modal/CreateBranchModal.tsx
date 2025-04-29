import { Button, Card, Col, DatePicker, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { BsBank2 } from "react-icons/bs";
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


const CreateBranchModal = ({createModal, setCreateModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    return ( 
        <>
            <StyledModal
                footer=""
                centered
                open={createModal}
                onOk={() => setCreateModal(false)}
                onCancel={() => setCreateModal(false)}
                style={{
                    backgroundColor: "#F5F5FA",
                    borderRadius: "4px",
                }}
            >
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#070707E5",
                    fontSize:"20px"
                }}>Open Branch</Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide details to open new branch</Typography.Title>
                <form>
                    <Card>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Branch Name</Typography.Text><br></br>
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
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Branch State</Typography.Text><br></br>
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
                                    value: 'john',
                                    label: 'john',
                                },
                                {
                                    value: 'mark',
                                    label: 'mark',
                                },
                                {
                                    value: 'Henry',
                                    label: 'Henry',
                                },
                                ]}
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Created Date</Typography.Text><br></br>
                            <DatePicker
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Select"
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Branch Closure Date</Typography.Text><br></br>
                            <DatePicker
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Select"
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Notes</Typography.Text><br></br>
                            <Input
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Enter Comment"
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
                            Open Branch
                        </Button>
                    </Flex>
                </form>
            </StyledModal>
            {/* {confirmModal && (
                <SuccessModal
                    successModal={confirmModal}
                    setSuccessModal={setConfirmModal}
                    setConfirmModal={setCreateModal}
                    title="Vault created Successfully"
                />
            )} */}
            {confirmModal && (
                <ConfirmModal
                    setConfirmModal={setConfirmModal}
                    confirmModal={confirmModal}
                    icon={
                        <BsBank2    
                            style={{
                                fontSize: "3rem"
                            }}
                        />
                    }
                    text="Open Branch"
                    content="Are you sure you want to open Branch"
                    label="Yes Open"
                    type="create"
                />
            )}
        </>
    );
}
 
export default CreateBranchModal;