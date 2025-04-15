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
    { title: "Sender Name", dataIndex: "senderName", key: "senderName" },
    { title: "Sender Account", dataIndex: "senderAccount", key: "senderAccount" },
    { title: "Beneficiary Name", dataIndex: "beneficiaryName", key: "beneficiaryName" },
    { title: "Beneficiary Account", dataIndex: "beneficiaryAccount", key: "beneficiaryAccount" },
    { title: "Beneficiary Bank Code", dataIndex: "beneficiaryBankCode", key: "beneficiaryBankCode" },
  ];
  
  const expandableColumns = [
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Status Code", dataIndex: "statusCode", key: "statusCode" },
    { title: "Transaction Message", dataIndex: "transactionMessage", key: "transactionMessage" },
    { title: "Transaction Description", dataIndex: "transactionDescription", key: "transactionDescription" },
    { title: "Date", dataIndex: "date", key: "date" },
  ];
  
  const dataSource = [
    {
      key: "1",
      senderName: "22300915013",
      senderAccount: "0065543542",
      beneficiaryName: "HY66365433",
      beneficiaryAccount: "APHC",
      beneficiaryBankCode: "NGN 5,000",
      expandableData: [
        {
          key: "1-1",
          amount: "873663",
          statusCode: "Completed",
          transactionMessage: "Sent",
          transactionDescription:"04-12-2024 ",
          date: "Bill Payment",
        },
      ],
    },
    {
      key: "2",
      senderName: "22300915013",
      senderAccount: "0065543542",
      beneficiaryName: "HY66365433",
      beneficiaryAccount: "APHC",
      beneficiaryBankCode: "NGN 5,000",
      expandableData: [
        {
          key: "2-1",
          amount: "873663",
          statusCode: "Completed",
          transactionMessage: "Sent",
          transactionDescription:"04-12-2024 ",
          date: "Bill Payment",
        },
      ],
    },
  ];
  
const Transfer = () => {
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
 
export default Transfer;