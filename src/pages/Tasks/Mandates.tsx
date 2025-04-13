import { useState } from "react";
import Filter from "../../components/Filter/Filter";
import DisbursementFilter from "../../components/Filter/DisbursementFilter";
import { Col } from "antd";
import DisbursmentTable from "../../components/Table/DisbursmentTable";
import DisbursementModal from "../../components/Modal/DisbursementModal";
import CreateMandateModal from "../../components/Modal/CreateMandateModal";
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
    { title: "Mandate Type", dataIndex: "mandateType", key: "mandateType" },
    { title: "Payer Name", dataIndex: "payerName", key: "payerName" },
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Start Date", dataIndex: "startDate", key: "startDate" },
    { title: "End Date", dataIndex: "endDate", key: "endDate" },
  ];
  
  const expandableColumns = [
    { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Payer Address", dataIndex: "payerAddress", key: "payerAddress" },
    { title: "Debit Frequency", dataIndex: "debitFrequency", key: "debitFrequency" },
    { title: "Bank Name", dataIndex: "bankName", key: "bankName" },
    { title: "Account Number", dataIndex: "accountNumber", key: "accountNumber" },
    { title: "Account Name", dataIndex: "accountName", key: "accountName" },
    { title: "Mandate Image", dataIndex: "mandateImage", key: "mandateImage" },
    { title: "Narration", dataIndex: "narration", key: "narration" },
];
  
  const dataSource = [
    {
      key: "1",
      mandateType: "E-Mandate",
      payerName: "Joseph Wheeler",
      product: "pro",
      amount: "NGN 600,00",
      startDate: "6 April, 2023",
      endDate: "10 April, 2023",
      expandableData: [
        {
          key: "1-1",
          phoneNumber: "09288700063",
          email: "joseph@gmail.com",
          payerAddress: "No 9 Igble ",
          debitFrequency: "One-off",
          bankName: "GTB",
          accountNumber: "0666545433",
          accountName: "Joseph Wheeler",
          mandateImage: "8990995",
          narration: "Disbursement/Remita Dsbursment Channel/Loan application has been disbursed ",
        },
      ],
    },
    {
        key: "2",
        mandateType: "E-Mandate",
        payerName: "Joseph Wheeler",
        product: "pro",
        amount: "NGN 600,00",
        startDate: "6 April, 2023",
        endDate: "10 April, 2023",
        expandableData: [
          {
            key: "2-1",
            phoneNumber: "09288700063",
            email: "joseph@gmail.com",
            payerAddress: "No 9 Igble ",
            debitFrequency: "One-off",
            bankName: "GTB",
            accountNumber: "0666545433",
            accountName: "Joseph Wheeler",
            mandateImage: "8990995",
            narration: "Disbursement/Remita Dsbursment Channel/Loan application has been disbursed ",
          },
        ],
      },
  ];
  
const Mandates = () => {
    const [depositModal, setDepositModal] = useState(false)
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="Create New" button="deposit" modal={depositModal} setModal={setDepositModal}/>
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
            {depositModal && (
              <CreateMandateModal
                  depositModal={depositModal}
                  setDepositModal={setDepositModal}
              />
            )}
        </>
    );
}
 
export default Mandates;