import { Button, Card, Col, DatePicker, Input, message, Modal, Select, Typography, Upload, UploadProps } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { FaCheck, FaCircleCheck } from "react-icons/fa6";
import { UploadOutlined } from '@ant-design/icons';
import { RcFile } from "antd/es/upload";
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


const AccountModal = ({depositModal, setDepositModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    const [fileList, setFileList] = useState<RcFile[]>([]);
    const [uploading, setUploading] = useState<boolean>(false);
    const uploadProps: UploadProps = {
        beforeUpload: (file) => {
          const isValidType = file.type === 'application/pdf' || 
                              file.type === 'application/vnd.ms-excel' || 
                              file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                              file.type === 'text/csv';
          
          if (!isValidType) {
            message.error('You can only upload PDF, Excel or CSV files!');
            return Upload.LIST_IGNORE;
          }
          
          const isLessThan5M = file.size / 1024 / 1024 < 5;
          if (!isLessThan5M) {
            message.error('File must be smaller than 5MB!');
            return Upload.LIST_IGNORE;
          }
          
          // Store file
          setFileList([file]);
          return false; // Prevent auto upload
        },
        fileList,
        onRemove: () => {
          setFileList([]);
        },
        maxCount: 1,
      };
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
                }}>Upload Document</Typography.Title>
                <Typography.Title style={{
                    textAlign: "center",
                    color:"#231F2099",
                    fontSize:"16px"
                }}>Provide Details</Typography.Title>
                <form>
                    <Card>
                        <Col
                            style={{
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Upload Document</Typography.Text><br></br>
                            <Upload.Dragger 
                                {...uploadProps} 
                                style={{ padding: '10px', borderStyle: 'dashed' }}
                                height={90}
                            >
                            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <UploadOutlined style={{ color: '#1677ff', fontSize: '24px', marginRight: '10px' }} />
                                <span>Upload Document</span>
                            </p>
                            </Upload.Dragger>
                        </Col>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Document Name</Typography.Text><br></br>
                            <Input
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Enter document name"
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"24px"
                            }}
                        >
                            <Typography.Text>Document Type</Typography.Text><br></br>
                            <Select
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }}
                                showSearch
                                placeholder="Saving"
                                optionFilterProp="label"
                                // onChange={onChange}
                                // onSearch={onSearch}
                                options={[
                                {
                                    value: 'pdf',
                                    label: 'PDF',
                                },
                                {
                                    value: 'doc',
                                    label: 'DOC',
                                },
                                {
                                    value: 'excel',
                                    label: 'EXCEL',
                                },
                                ]}
                            />
                        </Col>
                        <Col
                            style={{
                                marginBottom:"16px"
                            }}
                        >
                            <Typography.Text>Document period </Typography.Text><br></br>
                            <DatePicker
                                style={{
                                    width:"100%",
                                    marginTop:"10px",
                                }} 
                                placeholder="Select"
                            />
                        </Col>  
                    </Card>
                    <Button
                        style={{
                            marginTop:"6px",
                            width:"100%",
                            backgroundColor: COLOR["50"],
                            fontSize:"13.14px",
                            fontWeight:"700",
                            color: "white"
                        }}      
                        onClick={()=>{setConfirmModal(true);}}
                    >
                        Submit
                    </Button>
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
                    text="Are you sure you want to create this account"
                    label="Yes Create"
                />
            )}
        </>
    );
}
 
export default AccountModal;