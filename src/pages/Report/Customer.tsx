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
import CreateTaskModal from "../../components/Modal/CreateTaskModal";

interface DataType {
    key: string;
    customerId: string;
    customerName: string;
    customerType: string;
    status: string;
    dateOfRegistration: string;
    branchName: string;
    assignedOfficer: string;
}


const data: DataType[] = [
    {
        key: '1',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '2',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '3',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '4',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '5',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '6',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '7',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
    },
    {
        key: '8',
        customerId: "22300915013",
        customerName: "Olademeji Bayo",
        customerType: "Customer 1",
        status: "Active",
        dateOfRegistration: "09-11-2021",
        branchName: "Lekki",
        assignedOfficer: "Olademeji Bayo",
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

const Customer = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
      const items: MenuProps['items'] = [
            {
                key: '1',
                label: '',
                // icon: <FaTrash />,
                onClick: ()=>{setPendingModal(true)}
                //extra: '⌘P',
            },
        ];
        const columns: TableProps<DataType>['columns'] = [
            {
                title: 'Customer ID',
                dataIndex: 'customerId',
                key: 'customerId',
            },
            {
                title: 'Customer Name',
                dataIndex: 'customerName',
                key: 'customerName',
            },
            {
                title: 'Customer Type',
                dataIndex: 'customerType',
                key: 'customerType',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Date of Registration',
                dataIndex: 'dateOfRegistration',
                key: 'dateOfRegistration',
            },
            {
                title: ' Branch Name',
                dataIndex: 'branchName',
                key: 'branchName',
            },
            {
                title: 'Assigned officer',
                dataIndex: 'assignedOfficer',
                key: 'assignedOfficer', 
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
            <DisbursementFilter options={options} selectplaceholder="Account State" name="New Task" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
             {depositModal && (
                <CreateTaskModal
                    createModal={depositModal}
                    setCreateModal={setDepositModal}
                />
            )}
          
        </>
    );
}
 
export default Customer;