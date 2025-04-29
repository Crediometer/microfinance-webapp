import { Button, Col, Flex, Modal, Typography } from "antd";
import { FaCheck, FaCircleCheck, FaTrash } from "react-icons/fa6";
import { COLOR } from "../../App";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

const DeleteModalComponent = ({
    deleteModal, 
    setDeleteModal, 
    text, 
    content,
    type
}: any) => {
    const [successModal, setSuccessModal]=useState(false)
    return ( 
        <>
            <Modal
                centered
                open={deleteModal}
                footer=""
                onOk={() => setDeleteModal(false)}
                onCancel={() => setDeleteModal(false)}
            >
                <Flex style={{
                    width: "100%",
                }} align="center" justify="center">
                    <Col
                        style={{
                            backgroundColor:COLOR["50"],
                            color:"white",
                            width:"100px",
                            height:"100px",
                            borderRadius:"50%",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                        }}
                    >
                        <FaTrash color="white" style={{fontSize:"2.4rem"}}/> 
                    </Col>
                </Flex>
                <Typography.Title level={4}
                    style={{
                        textAlign:"center",
                        color:COLOR["50"],
                        marginTop:"35px"
                    }}
                    color={COLOR["50"]}
                >
                   {text}
                </Typography.Title>
                <p
                    style={{
                        textAlign:"center",
                        color:"#00000099",
                        fontWeight: "500",
                        fontSize:"20px",
                    }}
                    
                >
                   {content}
                </      p>
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
                        cancel                    </Button>
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
                    onClick={()=>{setSuccessModal(true)}}
                    >
                        Yes Delete
                    </Button>
                </Flex>
            </Modal>
            {successModal && (
                <> 
                    {type === "role" && (
                        <SuccessModal
                            successModal={successModal}
                            setSuccessModal={setSuccessModal}
                            setConfirmModal={setDeleteModal}
                            title="Role deleted Successfully"
                            //text="User have been approved"
                            button="Back to Role Managment"
                        />
                    )}
                </>
            )} 
        </>   
    );
}
 
export default DeleteModalComponent;