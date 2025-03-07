import { Button, Col, Dropdown} from "antd";
import type {MenuProps } from 'antd';
import DisbursementFilter from "../../components/Filter/DisbursementFilter";
import DisbursmentTable from "../../components/Table/DisbursmentTable";
import { useState } from "react";
import { MdTouchApp } from "react-icons/md";

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
 const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'View Batch',
      //extra: '⌘P',
    }
  ];

const columns = [
    { title: "Batch Description", dataIndex: "batchDescription", key: "batchDescription" },
    { title: "Batch Reference", dataIndex: "batchReference", key: "batchReference" },
    { title: "Total Amount", dataIndex: "totalAmount", key: "totalAmount" },
    { title: "Date Initiated", dataIndex: "dateInitiated", key: "dateInitiated" },
    { title: "Batch Status", dataIndex: "batchStatus", key: "batchStatus" },
    { title: "Initiated By", dataIndex: "initiatedBy", key: "initiatedBy" },
    {
        title: '',
        key: 'action',
        render: (_: any) => (
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
  
// const expandableColumns = [
//     { title: "Recipient Name", dataIndex: "recipientName", key: "recipientName" },
//     { title: "Amount", dataIndex: "amount", key: "amount" },
//     { title: "Initiated By", dataIndex: "initiatedBy", key: "initiatedBy" },
//     { title: "Approved By", dataIndex: "approvedBy", key: "approvedBy" },
//     { title: "Session Id", dataIndex: "sessionId", key: "sessionId" },
// ];
  
const dataSource = [
    {
        key: "1",
        batchDescription: "Payroll for March",
        batchReference: "PR-202503",
        totalAmount: 15000.75,
        dateInitiated: "2025-03-07T10:30:00Z",
        batchStatus: "Pending",
        initiatedBy: "John Doe"
      },
      {
        key: "2",
        batchDescription: "Supplier Payment",
        batchReference: "SP-202503",
        totalAmount: 25000.00,
        dateInitiated: "2025-03-06T14:00:00Z",
        batchStatus: "Completed",
        initiatedBy: "Jane Smith"
      },
      {
        key: "3",
        batchDescription: "Office Expenses",
        batchReference: "OE-202503",
        totalAmount: 5000.50,
        dateInitiated: "2025-03-05T09:15:00Z",
        batchStatus: "Processing",
        initiatedBy: "Michael Johnson"
      }
];
const Batches = () => {
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
                // expandableColumns={expandableColumns}
                />
            </Col>
        </>
    );
}
 
export default Batches;