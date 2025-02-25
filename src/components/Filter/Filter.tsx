import { Button, DatePicker, Flex, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { COLOR } from "../../App";
import { LuSlidersVertical } from "react-icons/lu";

const { RangePicker } = DatePicker;

const Filter = ({ options, selectplaceholder, name, button, modal, setModal }:any) => {
    return ( 
        <Flex align="center" justify="space-between" style={{width:"100%"}}>
            <Flex align="center" gap={4} style={{width:"70%"}}>
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
            <Flex>
                {(button === "deposit") && (
                    <Button 
                        type="primary"  
                        size="large"
                        style={{
                            fontSize: "13.14px",
                            fontWeight: "700"
                        }}
                        onClick={()=>{
                            setModal(true)
                        }}
                    >
                    + {name}
                    </Button>
                )}
                {(button === "customer") && (
                    <Button 
                        type="primary"  
                        size="large"
                        style={{
                            fontSize: "13.14px",
                            fontWeight: "700"
                        }}
                    >
                    + {name}
                    </Button>
                )}
            </Flex>
        </Flex>
    );
}
 
export default Filter;