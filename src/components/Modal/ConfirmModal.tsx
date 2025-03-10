import { Button, Col, Flex, Modal, Typography } from "antd";
import { FaCheck, FaCircleCheck } from "react-icons/fa6";
import { COLOR } from "../../App";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

const ConfirmModal = ({
    confirmModal, 
    setConfirmModal, 
    setDepositModal, 
    icon, 
    text, 
    label,
    content,
    type
}: any) => {
    const [successModal, setSuccessModal]=useState(false)
    return ( 
        <>
            <Modal
                centered
                open={confirmModal}
                footer=""
                onOk={() => setConfirmModal(false)}
                onCancel={() => setConfirmModal(false)}
            >
                <Flex style={{
                    width: "100%",
                }} align="center" justify="center">
                    {icon}  
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
                    onClick={()=>{setSuccessModal(true)}}
                    >
                        {label}
                    </Button>
                </Flex>
            </Modal>
            {successModal && (
                <>
                    {type === "accept" && (
                        <SuccessModal
                            successModal={successModal}
                            setSuccessModal={setSuccessModal}
                            setConfirmModal={setConfirmModal}
                            title="Approve Successful"
                            text="User have been approved"
                        />
                    )}
                   {type === "modify" && (
                        <SuccessModal
                            successModal={successModal}
                            setSuccessModal={setSuccessModal}
                            setConfirmModal={setConfirmModal}
                            title="Account Modified Successfully "
                        />
                    )}
                    {type === "create" && (
                        <SuccessModal
                            successModal={successModal}
                            setSuccessModal={setSuccessModal}
                            setConfirmModal={setConfirmModal}
                            setDepositModal={setDepositModal}
                            title="Account Created Successful"
                        />
                    )}
                    {type === "reject" && (
                        <SuccessModal
                            successModal={successModal}
                            setSuccessModal={setSuccessModal}
                            setConfirmModal={setConfirmModal}
                            title="Reject Successful"
                            text="User have been Rejected"
                        />
                    )}
                </>
            )} 
        </>   
    );
}
 
export default ConfirmModal;