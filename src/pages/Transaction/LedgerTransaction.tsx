import { useState } from "react";
import DisbursementFilter from "../../components/Filter/DisbursementFilter";
import { Col } from "antd";
import DisbursmentTable from "../../components/Table/DisbursmentTable";

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
const LedgerTransaction = () => {
    const [depositModal, setDepositModal] = useState(false);
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <DisbursmentTable
                    columns={columns}
                    dataSource={dataSource}
                    expandableColumns={expandableColumns}
                />
            </Col>
        </>
    );
}
 
export default LedgerTransaction;