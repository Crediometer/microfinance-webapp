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
import CreateBranchModal from "../../components/Modal/CreateBranchModal";

interface DataType {
    key: string;
    branchName: string;
    branchState: string;
    createdDate: string;
    modifiedDate: string;
}


const data: DataType[] = [
    {
        key: '1',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '2',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '3',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '4',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '5',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '6',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '7',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
    },
    {
        key: '8',
        branchName: "Lekki",
        branchState: "Open",
        createdDate: "22-04-2021",
        modifiedDate: "22-04-2021",
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

const BranchManagement = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Branch Name',
            dataIndex: 'branchName',
            key: 'branchName',
        },
        {
            title: 'Branch State',
            dataIndex: 'branchState',
            key: 'branchState',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
        },
        {
            title: 'Last Modified Date',
            dataIndex: 'modifiedDate',
            key: 'modifiedDate',
        },
    ];
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="Create New Branch" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
            {depositModal && (
                <CreateBranchModal
                    createModal={depositModal}
                    setCreateModal={setDepositModal}
                />
            )}
          
        </>
    );
}
 
export default BranchManagement;