import { useState } from "react";
import DisbursementFilter from "../../components/Filter/DisbursementFilter";
import { Button, Col, Dropdown, MenuProps, TableProps } from "antd";
import DisbursmentTable from "../../components/Table/DisbursmentTable";
import { MdTouchApp } from "react-icons/md";
import PlainTable from "../../components/Table/PlainTable";
import TransactionViewModal from "../../components/Modal/TransactionViewModaL";
import { FaCircleCheck } from "react-icons/fa6";
import { COLOR } from "../../App";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import CreateTaskModal from "../../components/Modal/CreateTaskModal";

interface DataType {
    key: string;
    activityDescription: string;
    dateCreated: string;
    username: string;
    dueDate: string;
    action: string;
    affectedItem: string;
}


const data: DataType[] = [
    {
        key: '1',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '2',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '3',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '4',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '5',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '6',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '7',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    {
        key: '8',
        activityDescription: "Login",
        dateCreated: "22-04-2021",
        username: "Temitope Ojo",
        dueDate: "22-04-2021",
        action: "User Login",
        affectedItem: " Loan Account",
    },
    ];
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

const Activities = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Activity Description',
            dataIndex: 'activityDescription',
            key: 'activityDescription',
        },
        {
            title: 'Date Created',
            dataIndex: 'dateCreated',
            key: 'dateCreated',
        },
        {
            title: 'Username ',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
            key: 'dueDate',
        },
        {
            title: ' Action ',
            dataIndex: 'action',
            key: 'action',
        },
        {
            title: ' Affected Item Name ',
            dataIndex: 'affectedItem',
            key: 'affectedItem',
        },
        
    ];
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="New Activity" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
            {/* {depositModal && (
                <CreateTaskModal
                    createModal={depositModal}
                    setCreateModal={setDepositModal}
                />
            )} */}
          
        </>
    );
}
 
export default Activities;