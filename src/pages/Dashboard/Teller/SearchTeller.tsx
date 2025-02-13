import { Card, Col, Typography } from "antd";
import { CiSearch } from "react-icons/ci";
import { Input } from 'antd';

const { Search } = Input;
const SearchTeller = () => {
    return ( 
        <>
            <Col style={{
                padding: 40
            }}>
                <Col 
                    style={{
                        padding: 40
                    }}
                >
                    <Search placeholder="Search using Account Number, Name, Product Type " enterButton="Search" size="large" prefix={<CiSearch/>}/>
                </Col>
                <Card style={{
                    height: "60vh",
                    display:"flex",
                    alignItems: "center",
                    justifyContent:"center"
                }}>
                    <Typography.Title level={4}>
                        No date searched make a quick search
                    </Typography.Title>
                </Card>
            </Col>
        </>
    );
}
 
export default SearchTeller;