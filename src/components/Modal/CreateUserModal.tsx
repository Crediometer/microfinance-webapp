import { Button, Card, Col, Flex, Input, Modal, Radio, Row, Select, Typography } from "antd";
import { COLOR } from "../../App";
import styled from 'styled-components';
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import { FiEdit } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import { BsBank2 } from "react-icons/bs";
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

const CreateUserModal = ({createModal, setCreateModal}: any) => {
    const [confirmModal, setConfirmModal]=useState(false)
    const [step, setStep] = useState(0);
    const handleStep = () => {
        setStep(step + 1);
    }
    const options: CheckboxGroupProps<string>['options'] = [
        { label: 'Administrator', value: 'Administrator' },
        { label: 'Teller', value: 'Teller' },
        { label: 'Account Officer', value: 'Account Officer' },
    ];
    const options2: CheckboxGroupProps<string>['options'] = [
        { label: 'Can access', value: 'Can access' },
        { label: 'All branches', value: 'All branches' },
    ];
    const options3: CheckboxGroupProps<string>['options'] = [
        { label: 'Portal Administrator', value: 'Portal Administrator' },
    ];
    const options4: CheckboxGroupProps<string>['options'] = [
        { label: 'API Access', value: 'API Access' },
    ];
    return (
        <>
            {step === 0 && (
                <StyledModal
                    width={1000}
                    footer=""
                    centered
                    open={createModal}
                    onOk={() => setCreateModal(false)}
                    onCancel={() => setCreateModal(false)}
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
                    }}>New User</Typography.Title>
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
                                    <Typography.Text>First Name</Typography.Text><br></br>
                                    <Input
                                        style={{
                                            width:"100%",
                                            marginTop:"10px",
                                        }} 
                                        placeholder="Enter Name"
                                    />
                                </Col>
                                <Col
                                    style={{
                                        marginBottom:"24px"
                                    }}
                                >
                                    <Typography.Text>Last Name</Typography.Text><br></br>
                                    <Input
                                        style={{
                                            width:"100%",
                                            marginTop:"10px",
                                        }} 
                                        placeholder="Enter Name"
                                    />
                                </Col>
                                <Col
                                    style={{
                                        marginBottom:"24px"
                                    }}
                                >
                                    <Typography.Text>Position</Typography.Text><br></br>
                                    <Input
                                        style={{
                                            width:"100%",
                                            marginTop:"10px",
                                        }} 
                                        placeholder="enter"
                                    />
                                </Col>
                                <Col
                                    style={{
                                        marginBottom:"24px"
                                    }}
                                >
                                    <Typography.Text>Role</Typography.Text><br></br>
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
                                    <Typography.Text>Select Limits</Typography.Text><br></br>
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
                                    <Typography.Text>User Rights</Typography.Text><br></br>
                                    <Radio.Group options={options} style={{
                                        marginTop:"10px"
                                    }}/>
                                </Col>
                                <Col
                                    style={{
                                        marginBottom:"24px"
                                    }}
                                >
                                    <Typography.Text>Access Rights</Typography.Text><br></br>
                                    <Radio.Group  options={options2} style={{
                                        marginTop:"10px"
                                    }}/>
                                </Col>
                                <Col
                                    style={{
                                        marginBottom:"24px"
                                    }}
                                >
                                    <Typography.Text>Portal Administrator</Typography.Text><br></br>
                                    <Radio.Group  options={options3} style={{
                                        marginTop:"10px"
                                    }}/>
                                </Col>
                                <Col
                                    style={{
                                        marginBottom:"24px"
                                    }}
                                >
                                    <Typography.Text>API Access</Typography.Text><br></br>
                                    <Radio.Group options={options4} style={{
                                        marginTop:"10px"
                                    }}/>
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
                                Cancle
                            </Button>
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
                            onClick={()=>{handleStep()}}
                            >
                                Next
                            </Button>
                        </Flex>
                    </form>
                </StyledModal>
            )}
            {step === 1 && (
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
                 }}>Contact Information</Typography.Title>
                 <Typography.Title style={{
                     textAlign: "center",
                     color:"#231F2099",
                     fontSize:"16px"
                 }}>Provide Details </Typography.Title>
                 <form>
                     <Card>
                         <Col
                             style={{
                                 marginBottom:"16px"
                             }}
                         >
                             <Typography.Text>Mobile Phone</Typography.Text><br></br>
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
                            <Typography.Text>Address</Typography.Text><br></br>
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
                             <Typography.Text>Country</Typography.Text><br></br>
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
                                     value: 'Nigeria',
                                     label: 'Nigeria',
                                 },
                                 {
                                     value: 'Canada',
                                     label: 'Canada',
                                 },
                                 {
                                     value: 'Jamaica',
                                     label: 'Jamaica',
                                 },
                                 ]}
                             />
                         </Col>
                         <Col
                             style={{
                                 marginBottom:"24px"
                             }}
                         >
                             <Typography.Text>State</Typography.Text><br></br>
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
                                     value: 'Ondo',
                                     label: 'Ondo',
                                 },
                                 {
                                     value: 'Lagos',
                                     label: 'Lagos',
                                 },
                                 {
                                     value: 'Osun',
                                     label: 'Osun',
                                 },
                                 ]}
                             />
                         </Col>
                         <Col
                             style={{
                                 marginBottom:"16px"
                             }}
                         >
                             <Typography.Text>Zip Code</Typography.Text><br></br>
                             <Input
                                 style={{
                                     width:"100%",
                                     marginTop:"10px",
                                 }} 
                                 placeholder="Enter Comment"
                             />
                         </Col>
                        
                     </Card>
                     <Row
                        style={{
                             width:"100%",
                             marginTop:"35px"
                         }}
                     >
                         <Button
                             style={{
                                 width:"100%",
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
                             width:"100%",
                             height:"53px",
                             backgroundColor: COLOR["50"],
                             padding:"1rem",
                             color:"white",
                             fontSize:"16px",
                             fontFamily:"500",
                              marginTop:"10px"
                         }}
                         onClick={()=>{handleStep()}}
                         >
                           Next
                         </Button>
                     </Row>
                 </form>
             </StyledModal>
            )}
             {step === 2 && (
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
                 }}>Register Details</Typography.Title>
                 <Typography.Title style={{
                     textAlign: "center",
                     color:"#231F2099",
                     fontSize:"16px"
                 }}>Provide Details </Typography.Title>
                 <form>
                     <Card>
                         <Col
                             style={{
                                 marginBottom:"16px"
                             }}
                         >
                             <Typography.Text> Username</Typography.Text><br></br>
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
                            <Typography.Text>User Email Address</Typography.Text><br></br>
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
                             <Typography.Text>Password</Typography.Text><br></br>
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
                             <Typography.Text>Confirm password</Typography.Text><br></br>
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
                             <Typography.Text>Branch</Typography.Text><br></br>
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
                                     value: 'Ondo',
                                     label: 'Ondo',
                                 },
                                 {
                                     value: 'Lagos',
                                     label: 'Lagos',
                                 },
                                 {
                                     value: 'Osun',
                                     label: 'Osun',
                                 },
                                 ]}
                             />
                         </Col>
                         <Col
                             style={{
                                 marginBottom:"16px"
                             }}
                         >
                             <Typography.Text>Zip Code</Typography.Text><br></br>
                             <Input
                                 style={{
                                     width:"100%",
                                     marginTop:"10px",
                                 }} 
                                 placeholder="Enter Comment"
                             />
                         </Col>
                        
                     </Card>
                     <Row
                        style={{
                             width:"100%",
                             marginTop:"35px"
                         }}
                     >
                         <Button
                             style={{
                                 width:"100%",
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
                             width:"100%",
                             height:"53px",
                             backgroundColor: COLOR["50"],
                             padding:"1rem",
                             color:"white",
                             fontSize:"16px",
                             fontFamily:"500",
                             marginTop:"10px"
                         }}
                         onClick={()=>{setConfirmModal(true)}}
                         >
                            Create
                         </Button>
                     </Row>
                 </form>
             </StyledModal>
            )}
            {confirmModal && (
                <ConfirmModal 
                    confirmModal={confirmModal} 
                    setConfirmModal={setConfirmModal} 
                    icon={
                       <BsBank2
                            style={{
                                fontSize: "3rem"
                            }}
                        /> 
                    }
                    type="modify"
                    text="New User"
                    content="Are you sure you want to Modify this customer details "
                    label="Yes Modify"
                />
            )}     
        </> 

    );
}
 
export default CreateUserModal;