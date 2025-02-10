import { Card, Col, Flex, Image, Row, Select, Typography } from "antd";
import { useStylesContext } from '../../context';
import CountUp from "react-countup";
import StatCard from "../../components/Card/StatCard";
import { WeeklyActivityCard } from "../../components/Card/dashboard";
import { COLOR } from "../../App";
import { RiHandCoinFill } from "react-icons/ri";
import { FaRegUser, FaWifi } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import customer from "../../assets/customer2.png";
import customer2 from "../../assets/customer.png";
import customer3 from "../../assets/Customer3.png";
import customer4 from "../../assets/customer4.png";
import customer5 from "../../assets/customer6.png";

const ACTIVITY_DATA = [
    {
      day: 'Monday',
      value: 10,
    },
    {
      day: 'Tuesday',
      value: 22,
    },
    {
      day: 'Wednesday',
      value: 25,
    },
    {
      day: 'Thursday',
      value: 26,
    },
    {
      day: 'Friday',
      value: 15,
    },
    {
      day: 'Saturday',
      value: 12,
    },
    {
      day: 'Sunday',
      value: 3,
    },
  ];
const Dashboard = () => {
    const stylesContext = useStylesContext();
    return ( 
        <div>
          <Flex
            gap={24}
          >
            <Col xs={24} lg={18} >
              <Row {...stylesContext?.rowProps}>
                <Col xs={24} md={24}>
                  <Flex gap={20} className="stat"  style={{
                     overflow:"scroll"
                  }}>
                    <Col xs={24} lg={6}>
                        <StatCard 
                            name="Active Customers"
                            value={7265}
                            staus="+11.01%"
                            color="#EDEEFC"
                        />
                    </Col>
                    <Col xs={24} lg={6}>
                        <StatCard
                        name="Active Saving"
                        value={36}
                        staus="+6.01%"
                        color="#E6F1FD"
                        />
                    </Col>
                    <Col xs={24} lg={6}>
                        <StatCard
                        name="Loans Pending Approval"
                        value={15}
                        staus="+11.01%"
                        color="#EDEEFC"
                        />
                    </Col>
                    <Col xs={24} lg={6}>
                        <StatCard
                        name="Loans Due Today"
                        value={2}
                        staus="+15.05%"
                        color="#E6F1FD"
                        
                        />
                    </Col>
                  </Flex>
                </Col>
                <Flex style={{
                    width:"100%",
                    marginTop:"28px"
                }} gap={14}>
                    <Col xs={24} lg={18}>
                    <WeeklyActivityCard data={ACTIVITY_DATA} />
                    </Col>
                    <Col xs={24} lg={6}>
                        <Card>
                            <Typography.Title
                                level={5}
                            >
                                Repayments Today
                            </Typography.Title>
                            <Col>
                                <Flex
                                    justify="space-between" 
                                    align="center"
                                    style={{
                                            marginTop: "24px"
                                    }}        
                                >
                                    <Typography.Text
                                    >
                                        Koray Okumus
                                    </Typography.Text>
                                    <Typography.Text>
                                        N10,000
                                    </Typography.Text>
                                </Flex>
                                <Flex
                                    justify="space-between" 
                                    align="center"
                                    style={{
                                            marginTop: "24px"
                                    }}        
                                >
                                    <Typography.Text
                                    >
                                        Koray Okumus
                                    </Typography.Text>
                                    <Typography.Text>
                                        N10,000
                                    </Typography.Text>
                                </Flex>
                                <Flex
                                    justify="space-between" 
                                    align="center"
                                    style={{
                                            marginTop: "24px"
                                    }}        
                                >
                                    <Typography.Text
                                    >
                                        Koray Okumus
                                    </Typography.Text>
                                    <Typography.Text>
                                        N10,000
                                    </Typography.Text>
                                </Flex>
                                <Flex
                                    justify="space-between" 
                                    align="center"
                                    style={{
                                            marginTop: "24px"
                                    }}        
                                >
                                    <Typography.Text
                                    >
                                        Koray Okumus
                                    </Typography.Text>
                                    <Typography.Text>
                                        N10,000
                                    </Typography.Text>
                                </Flex>
                                <Flex
                                    justify="space-between" 
                                    align="center"
                                    style={{
                                            marginTop: "24px"
                                    }}        
                                >
                                    <Typography.Text
                                    >
                                        Koray Okumus
                                    </Typography.Text>
                                    <Typography.Text>
                                        N10,000
                                    </Typography.Text>
                                </Flex>
                            </Col>
                        </Card>
                    </Col>
                </Flex>

                <Flex style={{
                    width:"100%",
                    marginTop:"28px"
                }} justify="space-between" gap={14}>
                    <Col xs={24} lg={12}>
                    <WeeklyActivityCard data={ACTIVITY_DATA} />
                    </Col>
                    <Col xs={24} lg={12}>
                        <Card
                            style={{
                                height:"330px"
                            }}
                        >
                            <Flex 
                                align="center"
                                justify="space-between"
                            >
                                <Typography.Title
                                    level={5}
                                >
                                    Vault Balance Section
                                </Typography.Title>
                                <Select
                                    size='small'
                                    style={{ width: 130 }}
                                    showSearch
                                    placeholder="Currency"
                                    filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                    { value: '1', label: 'Naira' },
                                    { value: '2', label: 'Dollar' }, 
                                    { value: '3', label: 'Pound' },
                                    ]}
                                />
                            </Flex>
                            <Flex
                                vertical
                                justify="center"
                                align="center"
                                gap={0}
                                style={{
                                    marginTop:"65px",
                                }}
                            >
                                <h1 
                                    style={{
                                        fontFamily: "Inter",
                                        fontSize:"50px"
                                    }}
                                >
                                    <CountUp end={17870}/>
                                </h1>
                                <Typography.Title
                                    level={5}
                                 style={{
                                    color: COLOR['50']
                                }}
                                >
                                    NGN
                                </Typography.Title>
                            </Flex>
                        
                        </Card>
                    </Col>
                </Flex>
               
                {/* <Col span={24}>
                  <TasksListCard
                    data={tasksListData}
                    error={tasksListError}
                    loading={tasksListLoading}
                  />
                </Col> */}
              </Row>
            </Col>
            <Col md={24} lg={6}>
                <Card>
                    <Col
                        style={{
                            marginBottom:"16px"
                        }}
                    >
                        <Typography.Title level={5}>
                            Notifications
                        </Typography.Title>
                        <Col>
                            <Flex
                                style={{
                                    marginBottom:"12px"
                                }}
                                align="center"
                                gap={10}
                            >
                                <Col
                                    style={{
                                        width:"35px",
                                        height:"35px",
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        backgroundColor:"#EDEEFC",
                                        borderRadius:"8px"
                                    }}
                                >
                                    <RiHandCoinFill/>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Loan Request</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >Just now</Typography.Text>
                                </Col>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"12px"
                                }}
                                align="center"
                                gap={10}
                            >
                                <Col
                                    style={{
                                        width:"35px",
                                        height:"35px",
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        backgroundColor:"#EDEEFC",
                                        borderRadius:"8px"
                                    }}
                                >
                                    <FaRegUser/>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >New Customer Joined</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >59 minutes ago</Typography.Text>
                                </Col>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"12px"
                                }}
                                align="center"
                                gap={10}
                            >
                                <Col
                                    style={{
                                        width:"35px",
                                        height:"35px",
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        backgroundColor:"#EDEEFC",
                                        borderRadius:"8px"
                                    }}
                                >
                                    <LuArrowLeftRight />
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >New Transaction</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >12 hours ago</Typography.Text>
                                </Col>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"12px"
                                }}
                                align="center"
                                gap={10}
                            >
                                <Col
                                    style={{
                                        width:"35px",
                                        height:"35px",
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center",
                                        backgroundColor:"#EDEEFC",
                                        borderRadius:"8px"
                                    }}
                                >
                                    <FaWifi/>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Disbursement</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >Today, 11:59 AM</Typography.Text>
                                </Col>
                            </Flex>
                        </Col>
                    </Col>
                    <Col
                        style={{
                            marginBottom:"16px"
                        }}
                    >
                        <Typography.Title level={5}>
                        Customer Activities
                        </Typography.Title>
                        <Col>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                                <Col>
                                    <Image
                                        src={customer}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>

                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Temitayo Ope Joined</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >Just now</Typography.Text>
                                </Col>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                               <Col>
                                    <Image
                                        src={customer2}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Femi David Joined</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >59 minutes ago</Typography.Text>
                                </Col>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                                <Col>
                                    <Image
                                        src={customer3}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>
                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Temidayo Freeman</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >12 hours ago</Typography.Text>
                                </Col>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                              <Col
                                   
                                >
                                    <Image
                                        src={customer4}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >

                                    </Image>

                                </Col>
                                <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Ferunmi Olubunmi</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >Today, 11:59 AM</Typography.Text>
                                </Col>
                            </Flex>
                        </Col>
                    </Col>

                    <Col
                        style={{
                            marginBottom:"16px"
                        }}
                    >
                        <Typography.Title level={5}>
                            Customer Transaction                 
                        </Typography.Title>
                        <Col>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                                <Col>
                                    <Image
                                        src={customer}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>
                                </Col>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    gap={15}
                                >
                                    <Col>
                                        <Typography.Text
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "500"
                                            }}
                                        >Temitayo Ope Joined</Typography.Text><br></br>
                                        <Typography.Text
                                        style={{
                                            fontSize: "12px",
                                            color:"#00000066"
                                        }}
                                        >Just now</Typography.Text>
                                    </Col>
                                    <Typography.Text
                                        style={{
                                            color: COLOR["100"]
                                        }}
                                    >N500</Typography.Text>
                                </Flex>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                                <Col>
                                <Image
                                        src={customer2}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>
                                </Col>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    //gap={15}
                                >
                                 <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Femi David Joined</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >59 minutes ago</Typography.Text>
                                </Col>
                                    <Typography.Text
                                        style={{
                                            color: COLOR["100"]
                                        }}
                                    >N500</Typography.Text>
                                </Flex>
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                                <Col
                                >
                                    <Image
                                        src={customer3}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>
                                </Col>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    gap={15}
                                >
                                  <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Temidayo Freeman</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >12 hours ago</Typography.Text>
                                </Col>
                                    <Typography.Text
                                        style={{
                                            color: COLOR["100"]
                                        }}
                                    >N500</Typography.Text>
                                </Flex>
                              
                            </Flex>
                            <Flex
                                style={{
                                    marginBottom:"15px"
                                }}
                                align="center"
                                gap={15}
                            >
                                <Col
                                >
                                   <Image
                                        src={customer4}
                                        style={{
                                            width:"40px",
                                            height:"40px",
                                            borderRadius: "50%"
                                        }}
                                    >
                                    </Image>
                                </Col>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    gap={15}
                                >
                                    <Col>
                                    <Typography.Text
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "500"
                                        }}
                                    >Ferunmi Olubunmi</Typography.Text><br></br>
                                    <Typography.Text
                                    style={{
                                        fontSize: "12px",
                                        color:"#00000066"
                                    }}
                                    >Today, 11:59 AM</Typography.Text>
                                </Col>
                                    <Typography.Text
                                        style={{
                                            color: COLOR["100"]
                                        }}
                                    >N500</Typography.Text>
                                </Flex>
                             
                            </Flex>
                        </Col>
                    </Col>
                </Card>
            </Col>
          </Flex>
      </div>
     );
}
 
export default Dashboard;