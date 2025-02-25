import { Button, Col, Flex, Modal, Typography } from "antd";
import { FaCheck } from "react-icons/fa6";
import { COLOR } from "../../App";
const SuccessModal = ({
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
                        backgroundColor: COLOR["50"],
                        display: "flex",
                        alignItems: "center",
                        justifyContent:"center"  
                    }}
                >
                    <FaCheck
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
                    color:COLOR["50"],
                    marginTop:"35px"
                }}
                color={COLOR["50"]}
            >
                {title}
            </Typography.Title>
            <p
                style={{
                    textAlign:"center",
                    color:"#00000099",
                    fontWeight: "500",
                    fontSize:"20px",
                }}
            >
                {text}
            </p>
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
                    height:"53px",
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
 
export default SuccessModal;