import { Col } from "antd";
import Filter from "../../components/Filter/Filter";
import NestedTable from "../../components/Table/NestedTable";


const options = [
    {
        value: '1',
        label: 'All Customer',
    },
    {
        value: '2',
        label: 'Inactive Customer',
    },
    {
        value: '3',
        label: 'Registered Customer',
    },
    {
        value: '4',
        label: 'Active Customer',
    },
    ]

const DepositAccount = () => {
    return ( 
        <>
            <Filter options={options} selectplaceholder="Account State" name="Create Account"/>
            <Col 
                style={{
                    marginTop: "28px"
                }}
            >
                <NestedTable/>
            </Col>
        </>
    );
}
 
export default DepositAccount;