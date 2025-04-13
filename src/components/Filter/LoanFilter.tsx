import { Button, Col, DatePicker, Flex, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { COLOR } from "../../App";
import { LuSlidersVertical } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { BiPrinter } from "react-icons/bi";
const { RangePicker } = DatePicker;

const LoanFilter = ({ options, selectplaceholder, name, button, modal, setModal }:any) => {
    return ( 
        <Flex align="center" justify="space-between" style={{width:"100%"}}>
            <Flex align="center" gap={4} style={{width:"90%"}}>
                <Select
                    showSearch
                    className="custom-select"
                    style={{
                        width:200,
                        height:"42px",
                    }}
                    prefix={<LuSlidersVertical />}
                    placeholder={selectplaceholder}
                    optionFilterProp="label"
                    filterSort={(optionA, optionB) =>
                        String(optionA?.label ?? '').toLowerCase().localeCompare(String(optionB?.label ?? '').toLowerCase())
                    }
                    options={options}
                />
                <Select
                    showSearch
                    className="custom-select"
                    style={{
                        width:200,
                        height:"42px",
                    }}
                    prefix={<LuSlidersVertical />}
                    placeholder={selectplaceholder}
                    optionFilterProp="label"
                    filterSort={(optionA, optionB) =>
                        String(optionA?.label ?? '').toLowerCase().localeCompare(String(optionB?.label ?? '').toLowerCase())
                    }
                    options={options}
                />
                <Select
                    showSearch
                    className="custom-select"
                    style={{
                        width:200,
                        height:"42px",
                    }}
                    prefix={<LuSlidersVertical />}
                    placeholder={selectplaceholder}
                    optionFilterProp="label"
                    filterSort={(optionA, optionB) =>
                        String(optionA?.label ?? '').toLowerCase().localeCompare(String(optionB?.label ?? '').toLowerCase())
                    }
                    options={options}
                />
                <RangePicker
                className="custom-picker"
                    style={{
                        height:"42px",
                    }}
                />
                <Input
                    style={{
                        borderColor:"#4D6FED40",
                        fontSize: "14px",
                        color: "#9BA6BC",
                        fontWeight: 400,
                        padding: "11px",
                        width:"35%"
                    }}
                    placeholder="Search by Name, Customer ID, or Account Off...." 
                    prefix={<CiSearch/>} 
                />
                <div
                    style={{
                        width: "35px",
                        height: "35px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",      
                        backgroundColor: COLOR[50],
                        borderRadius: "2px"
                    }}  
                >
                    <CiSearch style={{color: "white", fontSize:"1.2rem"}}/> 
                </div>
            </Flex>
            <Flex gap={10}>
                <Col style={{
                    padding:"0.3rem",
                    border:"1px solid #8B909A",
                    borderRadius:"10px",
                }}>
                    <FaRegFilePdf style={{
                        fontSize:"1.3rem",
                        color: "#8B909A"
                    }}/>
                </Col>
                <Col style={{
                    padding:"0.3rem",
                    border:"1px solid #8B909A",
                    borderRadius:"10px",
                }}>
                    <BiPrinter style={{
                        fontSize:"1.3rem",
                        color: "#8B909A"
                    }}/>
                </Col>
            </Flex>
        </Flex>
    );
}
 
export default LoanFilter;