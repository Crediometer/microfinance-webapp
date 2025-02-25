import { Button, Col, Flex, Modal, Typography } from "antd";
import { FaCheck } from "react-icons/fa6";
import { COLOR } from "../../App";
import { FaTimes } from "react-icons/fa";
const ErrorModal = ({
    successModal, 
    setSuccessModal, 
    setConfirmModal, 
    setDepositModal,
    title,
    text
}: any) => {
    return ( 
        <Modal
            centered
            open={successModal}
            footer=""
            onOk={() => setSuccessModal(false)}
            onCancel={() => { 
                setSuccessModal(false);
                setConfirmModal(false);
                // setDepositModal(false)
            }}
        >
            <Flex style={{
                width: "100%",
                
            }} align="center" justify="center">
                <Col
                    style={{
                        width:"100px",
                        height:"100px",
                        borderRadius: "50%",
                        backgroundColor: "#E30E29",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center"  
                    }}
                >
                    <FaTimes
                        style={{
                            color:"white",
                            fontSize: "2rem"
                        }}
                    />
                </Col>
            </Flex>
            <Typography.Title level={3}
                style={{
                    textAlign:"center",
                    color:"#E30E29",
                    marginTop:"35px"
                }}
                color={COLOR["50"]}
            >
                {title}
            </Typography.Title>
            <Typography.Text 
                style={{
                    textAlign:"center",
                    color:"#00000099",
                    width: "100%",
                    fontSize:"20px",
                    backgroundColor:"yellow"
                }}
            >
                {text}
            </Typography.Text>
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
                    width:"100%",
                    height:"63px",
                    backgroundColor: COLOR["50"],
                    padding:"1rem",
                    color:"white",
                    fontSize:"16px",
                    fontFamily:"500"
                }}
                onClick={()=>{
                    setSuccessModal(false);
                    setConfirmModal(false);
                    // setDepositModal(false)
                }}
                >
                    Back to Account Management
                </Button>
            </Flex>
        </Modal>  
    );
}
 
export default ErrorModal;