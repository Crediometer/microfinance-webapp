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
    { title: "Network Provider", dataIndex: "networkProvider", key: "networkProvider" },
    { title: "Recipient", dataIndex: "recipient", key: "recipient" },
    { title: "Transaction Reference", dataIndex: "transactionReference", key: "transactionReference" },
    { title: "Transaction Status", dataIndex: "transactionStatus", key: "transactionStatus" },
  ];
  
  const expandableColumns = [
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Request Status", dataIndex: "requestStatus", key: "requestStatus" },
    { title: "date", dataIndex: "date", key: "date" },
    { title: "Message", dataIndex: "message", key: "message" },
  ];
  
  const dataSource = [
    {
      key: "1",
      cif: "22300915013",
      accountNumber: "0065543542",
      networkProvider: "MTN",
      recipient: "08176355436",
      transactionReference: "TY83676",
      transactionStatus: "Active",
      expandableData: [
        {
          key: "1-1",
          amount: "NGN 500",
          requestStatus: "Paid",
          date: "04-12-2024",
          message: "Airtime",
        },
      ],
    },
    {
      key: "2",
      cif: "22300915013",
      accountNumber: "0065543542",
      networkProvider: "MTN",
      recipient: "08176355436",
      transactionReference: "TY83676",
      transactionStatus: "Active",
      expandableData: [
        {
          key: "2-1",
          amount: "NGN 500",
          requestStatus: "Paid",
          date: "04-12-2024",
          message: "Airtime",
        },
      ],
    },
  ];
  
const Airtime = () => {
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
 
export default Airtime;