import { Button, Card, Col, Flex, Form, Input, Row, theme, Typography } from "antd";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";


type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const SignIn = () => {
    const {
        token: { colorPrimary },
        
      } = theme.useToken();
      
    return ( 
        <>
            <Row style={{overflow: "hidden", minHeight:"100vh"}}>
                <Col  xs={24} lg={12}>
                   <Flex
                    vertical
                    align="center"
                    justify="center"
                    style={{backgroundColor: colorPrimary, height:"100%"}}
                   >
                        <Card
                            // style={{width: ""}}
                        >
                            <img
                                src={logo}
                                style={{
                                    maxWidth: "126.71px",
                                    maxHeight: "158px"
                                }}
                                alt=""
                            >
                            </img>

                        </Card>
                   </Flex>
                </Col>
                <Col  xs={24} lg={12}>
                    <Flex
                        vertical
                        align="center"
                        justify="center"
                        style={{height:"100%"}}
                    >
                        <Typography.Title level={2} style={{textAlign:"center", marginBottom: "32px"}}>Welcome to <Typography.Text style={{ color: "#234FE3", fontSize:"30px" }}>Bio</Typography.Text>Bank</Typography.Title>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ width: "50%" }}
                            initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                           <Col 
                            style={{
                                marginBottom: "24px"
                            }}
                           >
                                <Typography.Text>Username</Typography.Text>
                                <Input size="large" placeholder="Enter a username"
                                    style={{
                                       marginTop: "6px"
                                    }} 
                                />
                            </Col>
                            <Col
                               style={{
                                    marginBottom: "24px"
                                }}
                            >
                                <Typography.Text>Password</Typography.Text>
                                <Input.Password size="large" placeholder="Enter a Password"
                                    style={{
                                        marginTop: "6px"
                                    }}  
                                />
                            </Col>
                            {/* <Form.Item label={null}> */}
                            <Button
                                style={{
                                    padding: '20px'
                                }}
                                type="primary" 
                                block
                            >
                                Log In
                            </Button>
                            <Flex
                                justify="right"
                                style={{
                                    marginTop:"8px"
                                }}
                            >
                                <Link to="/auth/password-reset">
                                    <Typography.Text color="secondary" style={{
                                        color: colorPrimary
                                    }}>Forgot Password?</Typography.Text>
                                </Link>
                                
                            </Flex>
                            {/* </Form.Item> */}
                        </Form>
                    {/* <Col style={{width: "60%"}}>
                      <Typography.Title level={3} style={{textAlign:"center", marginBottom: "32px"}}>Welcome to BioBank</Typography.Title>
                      <Col>
                        <Typography.Text>Username</Typography.Text>
                        <Input size="large" placeholder="Enter a username"/>
                      </Col>
                      <Col>
                        <Typography.Text>Password</Typography.Text>
                        <Input size="large" placeholder="Enter a username"/>
                      </Col>
                    </Col> */}
                   </Flex>
                </Col>
            </Row>
        </>
    );
}
 
export default SignIn;