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
    customerName: string;
    loanProduct: string;
    loanAmount: string;
    outstandingBal: string;
    loanStatus: string;
    disbursement: string;
    maturityDate: string;
}


const data: DataType[] = [
    {
        key: '1',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '2',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '3',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '4',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '5',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '6',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '7',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
    },
    {
        key: '8',
        loanId: "22300915013",
        customerName: "Olademeji Bayo",
        loanProduct: "loan",
        loanAmount: "NGN 60,000",
        outstandingBal: "NGN 30,000",
        loanStatus: "Active",
        disbursement: "09-11-2021",
        maturityDate: "10-11-2021",
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

const Portfolio = () => {
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
                title: 'Customer Name',
                dataIndex: 'customerName',
                key: 'customerName',
            },
            {
                title: 'Loan Product',
                dataIndex: 'loanProduct',
                key: 'loanProduct',
            },
            {
                title: 'Loan Amount',
                dataIndex: 'loanAmount',
                key: 'loanAmount',
            },
            {
                title: 'Outstanding Bal',
                dataIndex: 'outstandingBal',
                key: 'outstandingBal',
            },
            {
                title: 'Loan Status',
                dataIndex: 'loanStatus',
                key: 'loanStatus',
            },
            {
                title: 'Disbursement',
                dataIndex: 'disbursement',
                key: 'disbursement',
            },
            {
                title: 'Maturity Date',
                dataIndex: 'maturityDate',
                key: 'maturityDate',
            },
            // {
            // title: 'Action',
            // key: 'action',
            // render: (_, record) => (
            //     <Dropdown menu={{ items }}>
            //     <Button style={{
            //         backgroundColor: 'transparent',
            //         border:"1px solid #C4C4C4",
            //         fontSize: "13px",
            //         fontWeight:"500",
            //         color:"#9BA6BC"
            //         }}
            //         onClick={(e) => e.preventDefault()}
            //     >
            //         Action <MdTouchApp color="#000000" />
            //     </Button>
            //     </Dropdown>
            // ),
            // },
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
 
export default Portfolio;