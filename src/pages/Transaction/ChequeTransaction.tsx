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
    { title: "Cheque No", dataIndex: "chequeNo", key: "chequeNo" },
    { title: "Deposit Account", dataIndex: "depositAccount", key: "depositAccount" },
    { title: "Cheque Transaction", dataIndex: "chequeTransaction", key: "chequeTransaction" },
    { title: "CHEQUE Amount", dataIndex: "chequeAmount", key: "chequeAmount" },
    { title: "Currency", dataIndex: "currency", key: "currency" },
    { title: "Cheque State", dataIndex: "chequeState", key: "chequeState" },
];
  
const expandableColumns = [
    { title: "Posted By", dataIndex: "postedBy", key: "postedBy" },
    { title: "Request Date", dataIndex: "requestDate", key: "requestDate" },
    { title: "Reference ID", dataIndex: "referenceId", key: "referenceId" },
    { title: "Remarks", dataIndex: "remarks", key: "remarks" },
];

const dataSource = [
    {
        key: "1",
        chequeNo: "06022400000000",
        depositAccount: "0666545433",
        chequeTransaction: "Payout",
        chequeAmount: "NGN 600,000",
        chequeState: "Pending",
        currency: "NGN",
        expandableData: [
          {
            key: "1-1",
            postedBy: "Olademeji Bayo",
            requestDate: "6 April, 2023",
            referenceId: "0602240",
            remarks: "test fee/M13P0001010225",
          },
        ],
    },
    {
        key: "2",
        chequeNo: "06022400000000",
        depositAccount: "0666545433",
        chequeTransaction: "Payout",
        chequeAmount: "NGN 600,000",
        chequeState: "Pending",
        currency: "NGN",
        expandableData: [
          {
            key: "2-1",
            postedBy: "Olademeji Bayo",
            requestDate: "6 April, 2023",
            referenceId: "0602240",
            remarks: "test fee/M13P0001010225",
          },
        ],
    },
  ];
const ChequeTransaction = () => {
    const [depositModal, setDepositModal] = useState(false);
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="New Loan" button="deposit" modal={depositModal} setModal={setDepositModal}/>
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
 
export default ChequeTransaction;