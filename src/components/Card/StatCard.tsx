import { Card, Col, Flex, Typography } from "antd";
import React from "react";
import CountUp from "react-countup";
import { FaArrowTrendUp } from "react-icons/fa6";

interface StatCardProps {
    name: string;
    value: number;
    color: string;
    staus: string
  }

const StatCard: React.FC<StatCardProps> = (props) => {
    return ( 
        <Card
            style={{
                backgroundColor: props.color,
                width:300,
                borderRadius: "16px",
            }}
        >
            <Flex vertical gap="middle">
            <Typography.Text style={
                {
                    fontSize:"14px",
                }
            }>{props.name}</Typography.Text>
            <Flex align="center" justify="space-between" style={{
                marginTop: "10px",
            }}>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    <CountUp end={props.value}/>
                </Typography.Title>
                <Flex align="center">
                    <Typography.Text>
                        {props.staus}
                    </Typography.Text>
                    <FaArrowTrendUp style={{
                        fontSize: "10px",
                    }} />
                </Flex>
            </Flex>        
            </Flex>
        </Card>
     );
}
 
export default StatCard;