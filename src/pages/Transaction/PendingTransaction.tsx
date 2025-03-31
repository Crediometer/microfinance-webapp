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

interface DataType {
    key: string;
    transactionId: string;
    accountNumber: string;
    amount: string;
    reference: string;
    currency: string;
    reason:string;
}


const data: DataType[] = [
    {
        key: '1',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '2',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '3',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '4',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '5',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '6',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '7',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
    },
    {
        key: '8',
        transactionId:"06022400000000",
        accountNumber: '0666545433',
        currency: "NGN",
        amount:"NGN 600,000",
        reference:"1905211867000",
        reason: 'Payment',
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
const columns = [
    { title: "Account Holder", dataIndex: "accountHolder", key: "accountHolder" },
    { title: "Account Number", dataIndex: "accountNumber", key: "accountNumber" },
    { title: "Client ID", dataIndex: "clientId", key: "clientId" },
    { title: "Transaction Type", dataIndex: "transactionType", key: "transactionType" },
    { title: "Transaction Amount", dataIndex: "transactionAmount", key: "transactionAmount" },
    { title: "Currency", dataIndex: "currency", key: "currency" },
];
  
const expandableColumns = [
    { title: "Transaction ID", dataIndex: "transactionId", key: "transactionId" },
    { title: "State", dataIndex: "state", key: "state" },
    { title: "Username", dataIndex: "userName", key: "userName" },
    { title: "Entry Date", dataIndex: "entryDate", key: "entryDate" },
    { title: "Narration", dataIndex: "narration", key: "narration" },
];

const dataSource = [
    {
        key: "1",
        accountHolder: "Bawo Oritsejeo",
        accountNumber: "0666545433",
        clientId: "#5089",
        transactionType: "Deposit",
        transactionAmount: "NGN 600,000",
        currency: "NGN",
        expandableData: [
          {
            key: "1-1",
            transactionId: "06022400000000",
            state: "Completed",
            userName: "Superadmin",
            entryDate: "Superadmin",
            narration: "Disbursement/Remita Dsbursment Channel/Loan application has been disbursed ",
          },
        ],
    },
    {
        key: "2",
        accountHolder: "Bawo Oritsejeo",
        accountNumber: "0666545433",
        clientId: "#5089",
        transactionType: "Deposit",
        transactionAmount: "NGN 600,000",
        currency: "NGN",
        expandableData: [
          {
            key: "2-1",
            transactionId: "06022400000000",
            state: "Completed",
            userName: "Superadmin",
            entryDate: "Superadmin",
            narration: "Disbursement/Remita Dsbursment Channel/Loan application has been disbursed ",
          },
        ],
    },
  ];
const PendingTransaction = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
      const items: MenuProps['items'] = [
            {
                key: '1',
                label: 'Approve',
                // icon: <FaTrash />,
                onClick: ()=>{setPendingModal(true)}
                //extra: '⌘P',
            },
        ];
        const columns: TableProps<DataType>['columns'] = [
            {
                title: 'Transaction ID',
                dataIndex: 'transactionId',
                key: 'transactionId',
            },
            {
                title: 'Account Number',
                dataIndex: 'accountNumber',
                key: 'accountNumber',
            },
            {
                title: 'Amount',
                dataIndex: 'amount',
                key: 'amount',
            },
            {
                title: 'Reference',
                dataIndex: 'reference',
                key: 'reference',
            },
            {
                title: 'Currency',
                dataIndex: 'currency',
                key: 'currency',
            },
            {
                title: 'Reason',
                key: 'reason',
                dataIndex: 'reason',
            },
            {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Dropdown menu={{ items }}>
                <Button style={{
                    backgroundColor: 'transparent',
                    border:"1px solid #C4C4C4",
                    fontSize: "13px",
                    fontWeight:"500",
                    color:"#9BA6BC"
                    }}
                    onClick={(e) => e.preventDefault()}
                >
                    Action <MdTouchApp color="#000000" />
                </Button>
                </Dropdown>
            ),
            },
        ];
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="New Pending" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
            {pendingModal && (
                <TransactionViewModal
                    viewModal={pendingModal}
                    setViewModal={setPendingModal}
                    approveModal={approveModal}
                    setApproveModal={setApproveModal}
                />
            )}
            {approveModal && (
                <ConfirmModal
                    setConfirmModal={setApproveModal}
                    confirmModal={approveModal}
                    icon={
                        <FaCircleCheck
                            style={{
                                color: COLOR["50"],
                                fontSize: "8rem"
                            }}
                        />
                    }
                    text="Approve User"
                    content="Are you sure you want to approve this user"
                    label="Yes Approve"
                    type="accept"
                />
            )}
        </>
    );
}
 
export default PendingTransaction;