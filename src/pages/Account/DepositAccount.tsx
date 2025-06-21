import { Col } from "antd";
import Filter from "../../components/Filter/Filter";
import NestedTable from "../../components/Table/NestedTable";
import { useState } from "react";
import DepositModal from "../../components/Modal/DepositModal";


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
    const [depositModal, setDepositModal] = useState(false)
    return (
        <>
            <Filter options={options}
                selectplaceholder="Account State"
                name="Create Account" button="deposit"
                onClick={() => setDepositModal(!depositModal)} />

            <NestedTable />


            <DepositModal
                depositModal={depositModal}
                setDepositModal={setDepositModal}
            />

        </>
    );
}

export default DepositAccount;