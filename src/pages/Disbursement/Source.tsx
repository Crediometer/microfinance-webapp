import { Button, Col, Dropdown, Typography} from "antd";
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
const columns = [
    { title: "Source Account Name", dataIndex: "accountName", key: "accountName" },
    { title: "Source Account Number", dataIndex: "accountNumber", key: "accountNumber" },
    { title: "Source Account Channel", dataIndex: "accountChannel", key: "accountChannel" },
    { 
        title: "Enabled Status", 
        dataIndex: "status", 
        key: "status",
        render: (_: any, {status}:any) => (
            <>
              {status.map((tag: string) => {
                let color
                if (tag === "active") {
                  color = '#058B42';
                }else{
                    color = "#B11226"
                }
                return (
                    <Typography.Text
                        color={color}
                        style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            color: color,
                            textTransform: "capitalize"
                        }}
                    >{tag}</Typography.Text>
                );
              })}
            </>
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
        accountName: "James Watkins",
        accountNumber: "002503450",
        accountChannel: "	city_monee_disbursement",
        status: ["active"],
      },
      {
        key: "2",
        accountName: "Henry Patrick",
        accountNumber: "002503450",
        accountChannel: "	city_monee_disbursement",
        status: ["inactive"],
      },
      {
        key: "3",
        accountName: "John Doe",
        accountNumber: "002503450",
        accountChannel: "	city_monee_disbursement",
        status: ["active"],
      }
];
const Source = () => {
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
 
export default Source;