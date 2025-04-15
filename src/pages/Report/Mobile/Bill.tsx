import { useState } from "react";
import Filter from "../../../components/Filter/Filter";
import DisbursementFilter from "../../../components/Filter/DisbursementFilter";
import { Col } from "antd";
import DisbursmentTable from "../../../components/Table/DisbursmentTable";
import DisbursementModal from "../../../components/Modal/DisbursementModal";
import LoanFilter from "../../../components/Filter/LoanFilter";
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
    { title: "CIF", dataIndex: "cif", key: "cif" },
    { title: "Account Number", dataIndex: "accountNumber", key: "accountNumber" },
    { title: "Subscriber's ID", dataIndex: "subscriberId", key: "SubscriberId" },
    { title: "Provider", dataIndex: "provider", key: "provider" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Transaction Reference", dataIndex: "transactionReference", key: "transactionReference" },
  ];
  
  const expandableColumns = [
    { title: "Payment Code", dataIndex: "paymentCode", key: "paymentCode" },
    { title: "Transaction Status", dataIndex: "transactionStatus", key: "transactionStatus" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Request Status", dataIndex: "requestStatus", key: "requestStatus" },
    { title: "Message", dataIndex: "message", key: "message" },
  ];
  
  const dataSource = [
    {
      key: "1",
      cif: "22300915013",
      accountNumber: "0065543542",
      subscriberId: "HY66365433",
      provider: "APHC",
      amount: "NGN 5,000",
      transactionReference: "TY83676",
      expandableData: [
        {
          key: "1-1",
          paymentCode: "873663",
          transactionStatus: "Completed",
          date: "Sent",
          requestStatus:"04-12-2024 ",
          message: "Bill Payment",
        },
      ],
    },
    {
      key: "2",
      cif: "22300915013",
      accountNumber: "0065543542",
      subscriberId: "HY66365433",
      provider: "APHC",
      amount: "NGN 5,000",
      transactionReference: "TY83676",
      expandableData: [
        {
          key: "2-1",
          paymentCode: "873663",
          transactionStatus: "Completed",
          date: "Sent",
          requestStatus:"04-12-2024 ",
          message: "Bill Payment",
        },
      ],
    },
  ];
  
const Bill = () => {
    const [depositModal, setDepositModal] = useState(false)
    return ( 
        <>
            <LoanFilter options={options} selectplaceholder="Account State" name="New Disbursement" button="deposit" modal={depositModal} setModal={setDepositModal}/>
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
            {/* {depositModal && (
              <DisbursementModal
                  depositModal={depositModal}
                  setDepositModal={setDepositModal}
              />
            )} */}
        </>
    );
}
 
export default Bill;