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
    taskSummary: string;
    status: string;
    assignedTo: string;
    dueDate: string;
    createdBy: string;
}


const data: DataType[] = [
    {
        key: '1',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '2',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '3',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '4',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '5',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '6',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '7',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
    },
    {
        key: '8',
        taskSummary:"Send request for BVN",
        status: 'Upcoming',
        assignedTo: "Temitope Ojo",
        dueDate:"22-04-2021",
        createdBy:"Adebayo Ibrahim",
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

const Task = () => {
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
                title: 'Task Summary',
                dataIndex: 'taskSummary',
                key: 'taskSummary',
            },
            {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: 'Assigned To',
                dataIndex: 'assignedTo',
                key: 'assignedTo',
            },
            {
                title: 'Due Date',
                dataIndex: 'dueDate',
                key: 'dueDate',
            },
            {
                title: 'Created By',
                dataIndex: 'createdBy',
                key: 'createdBy',
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
 
export default Task;