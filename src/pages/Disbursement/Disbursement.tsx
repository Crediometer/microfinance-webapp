import { useState } from "react";
import Filter from "../../components/Filter/Filter";
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
    { title: "Transaction Ref", dataIndex: "transactionRef", key: "transactionRef" },
    { title: "Request Date", dataIndex: "requestDate", key: "requestDate" },
    { title: "Source Account", dataIndex: "sourceAccount", key: "sourceAccount" },
    { title: "Sender Name", dataIndex: "senderName", key: "senderName" },
    { title: "Destination Account", dataIndex: "destinationAccount", key: "destinationAccount" },
    { title: "Destination Bank", dataIndex: "destinationBank", key: "destinationBank" },
  ];
  
  const expandableColumns = [
    { title: "Recipient Name", dataIndex: "recipientName", key: "recipientName" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Initiated By", dataIndex: "initiatedBy", key: "initiatedBy" },
    { title: "Approved By", dataIndex: "approvedBy", key: "approvedBy" },
    { title: "Session Id", dataIndex: "sessionId", key: "sessionId" },
  ];
  
  const dataSource = [
    {
      key: "1",
      transactionRef: "#5089",
      requestDate: "6 April, 2023",
      sourceAccount: "John Brown",
      senderName: "0098989098",
      destinationAccount: "Lekki",
      destinationBank: "Savings",
      expandableData: [
        {
          key: "1-1",
          recipientName: "Jane Doe",
          amount: "NGN 20,000",
          initiatedBy: "Alice",
          approvedBy: "Bob",
          sessionId: "8990995",
        },
      ],
    },
    {
      key: "2",
      transactionRef: "#5090",
      requestDate: "7 April, 2023",
      sourceAccount: "Jane Smith",
      senderName: "0098989000",
      destinationAccount: "Ikeja",
      destinationBank: "Current",
      expandableData: [
        {
          key: "2-1",
          recipientName: "John Doe",
          amount: "NGN 50,000",
          initiatedBy: "Charlie",
          approvedBy: "Dave",
          sessionId: "8990996",
        },
      ],
    },
  ];
  
const Disbursement = () => {
    const [depositModal, setDepositModal] = useState(false)
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="New Disbursement" button="deposit" modal={depositModal} setModal={setDepositModal}/>
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
 
export default Disbursement;