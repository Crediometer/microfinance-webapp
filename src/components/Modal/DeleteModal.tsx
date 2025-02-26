import { Button, Col, Flex, Modal, Typography } from "antd";
import { COLOR } from "../../App";
import { TbBorderRadius } from "react-icons/tb";
import { FaTrash } from "react-icons/fa6";

const DeleteModal = ({deleteModal, setDeleteModal}: any) => {
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
                            width:"100px",
                            height:"100px",
                            borderRadius:"50%",
                            backgroundColor:"#F61818",
                            display: "flex",
                            alignItems:"center",
                            justifyContent:"center"
                        }}
                    >
                        <FaTrash color="white" style={{fontSize:"2.4rem"}}/>
                    </Col> 
                </Flex>
                <Typography.Title level={4}
                    style={{
                        textAlign:"center",
                        color:"#F61818",
                        marginTop:"35px"
                    }}
                >
                   Are you sure you want to <br></br>delete this vault
                </Typography.Title>

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
                    // onClick={()=>{setSuccessModal(true)}}
                    >
                        Yes Delete
                    </Button>
                </Flex>
            </Modal>
        </>
    );
}
 
export default DeleteModal;