import { Button, Card, Col, DatePicker, Flex, Input, Modal, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { FaCircleCheck } from "react-icons/fa6";
import { TbClipboardText } from "react-icons/tb";
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


const CreateTaskModal = ({createModal, setCreateModal}: any) => {
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
                }}>Create New Task</Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide details to create new task</Typography.Title>
                <form>
                    <Card>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Task Summary</Typography.Text><br></br>
                            <Input
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Enter Summary"
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Assigned To</Typography.Text><br></br>
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
                            <Typography.Text>Due Date</Typography.Text><br></br>
                            <DatePicker
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Enter Summary"
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Comment (Optional)</Typography.Text><br></br>
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
                        onClick={()=>{setConfirmModal(true)}}
                        >
                            Create Task
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
                        <TbClipboardText    
                            style={{
                                fontSize: "3rem"
                            }}
                        />
                    }
                    text="Create Task"
                    content="Are you sure you want to create this task"
                    label="Yes Create"
                    type="create"
                />
            )}
        </>
    );
}
 
export default CreateTaskModal;