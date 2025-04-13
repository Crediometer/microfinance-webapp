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
import CreateUserModal from "../../components/Modal/CreateUserModal";

interface DataType {
    key: string;
    fullName: string;
    username: string;
    email: string;
    updatedDate: string;
    role: string;
    state: string;
    branch: string;
}


const data: DataType[] = [
    {
        key: '1',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '2',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '3',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '4',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '5',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '6',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '7',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
    },
    {
        key: '8',
        fullName: 'Olademeji Bayo',
        username: 'Bay23',
        email: "bayo@gmail.com",
        updatedDate: "6 April, 2023",
        role: "IT Administrator",
        state: "Active",
        branch: "Lekki",
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

const User = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
    const columns: TableProps<DataType>['columns'] = [
        {
            title: ' Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Last Updated Date',
            dataIndex: 'updatedDate',
            key: 'updatedDate',
        },
        {
            title: 'Role ',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
        },
        {
            title: 'Branch',
            dataIndex: 'branch',
            key: 'branch',
        },
    ];
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="New User" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
            {depositModal && (
                <CreateUserModal
                    createModal={depositModal}
                    setCreateModal={setDepositModal}
                />
            )}
          
        </>
    );
}
 
export default User;