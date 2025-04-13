import { useState } from "react";
import DisbursementFilter from "../../../components/Filter/DisbursementFilter";
import { Button, Col, Dropdown, MenuProps, TableProps } from "antd";
import DisbursmentTable from "../../../components/Table/DisbursmentTable";
import { MdTouchApp } from "react-icons/md";
import PlainTable from "../../../components/Table/PlainTable";
import TransactionViewModal from "../../../components/Modal/TransactionViewModaL";
import { FaCircleCheck } from "react-icons/fa6";
import { COLOR } from "../../../App";
import ConfirmModal from "../../../components/Modal/ConfirmModal";
import CreateTaskModal from "../../../components/Modal/CreateTaskModal";
import LoanFilter from "../../../components/Filter/LoanFilter";

interface DataType {
    key: string;
    loanId: string;
    transactionId: string;
    transactionType: string;
    amount: string;
    date: string;
    balance: string;
}


const data: DataType[] = [
    {
        key: '1',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '2',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '3',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '4',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '5',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '6',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '7',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
    },
    {
        key: '8',
        loanId: "22300915013",
        transactionId: "Olademeji Bayo",
        transactionType: "NGN 3000",
        amount: "NGN 60,000",
        date: "09-11-2021",
        balance: "NGN 60,000",
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

const Disbursement = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
      const items: MenuProps['items'] = [
            {
                key: '1',
                label: '',
                // icon: <FaTrash />,
                onClick: ()=>{setPendingModal(true)}
                //extra: '⌘P',
            },
        ];
        const columns: TableProps<DataType>['columns'] = [
            {
                title: 'Loan ID',
                dataIndex: 'loanId',
                key: 'loanId',
            },
            {
                title: 'Transaction ID',
                dataIndex: 'transactionId',
                key: 'transactionId',
            },
            {
                title: 'Transaction Type',
                dataIndex: 'transactionType',
                key: 'transactionType',
            },
            {
                title: 'Amount',
                dataIndex: 'Amount',
                key: 'Amount',
            },
            {
                title: 'Date',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: 'Balance',
                dataIndex: 'balance',
                key: 'balance',
            },
          
        ];
    return ( 
        <>
            <LoanFilter options={options} selectplaceholder="Account State" name="New Task" button="deposit" modal={depositModal} setModal={setDepositModal}/>
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
 
export default Disbursement;