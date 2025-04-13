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
import { LuUserRoundX } from "react-icons/lu";
import CreateWhitelistModal from "../../components/Modal/CreateWhitelistModal";
import CreatePayrollModal from "../../components/Modal/CreatePayrollModal";

interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    accountNumber: string;
    bankName: string;
    department: string;
    employeeNumber: string;
    employmentDate: string;
}


const data: DataType[] = [
    {
        key: '1',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '2',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '3',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '4',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '5',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '6',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '7',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
    },
    {
        key: '8',
        firstName: "Olademeji Bayo",
        lastName: "Temidayo Ojo",
        accountNumber: "22300915013",
        bankName: "GTB",
        department: "Transportation",
        employeeNumber: "001",
        employmentDate: "09-11-2021",
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

const Payroll = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [pendingModal, setPendingModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
      const items: MenuProps['items'] = [
            {
                key: '1',
                label: 'Blacklist',
                // icon: <FaTrash />,
                onClick: ()=>{setPendingModal(true)}
                //extra: '⌘P',
            },
        ];
        const columns: TableProps<DataType>['columns'] = [
            {
                title: 'First Name',
                dataIndex: 'firstName',
                key: 'firstName',
            },
            {
                title: 'Last Name',
                dataIndex: 'lastName',
                key: 'lastName',
            },
            {
                title: 'Account Number',
                dataIndex: 'accountNumber',
                key: 'accountNumber',
            },
            {
                title: 'Bank Name',
                dataIndex: 'bankName',
                key: 'bankName',
            },
            {
                title: 'Department',
                dataIndex: 'department',
                key: 'department',
            },
            {
                title: 'Employee Number',
                dataIndex: 'employeeNumber',
                key: 'employeeNumber',
            },
            {
                title: 'Employment Date',
                dataIndex: 'employmentDate',
                key: 'employmentDate',
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
         
        
            {pendingModal && (
                <ConfirmModal
                    setConfirmModal={setPendingModal}
                    confirmModal={pendingModal}
                    icon={
                        <LuUserRoundX
                            style={{
                                fontSize: "4rem"
                            }}
                        />
                    }
                    text="Blacklist User"
                    content="Are you sure you want to blacklist this user"
                    label="Yes Blacklist"
                    type="accept"
                />
            )}

            {depositModal && (
                <CreatePayrollModal
                    depositModal={depositModal}
                    setDepositModal={setDepositModal}
                />
            )}
          
        </>
    );
}
 
export default Payroll;