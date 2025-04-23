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
import CreateBranchModal from "../../components/Modal/CreateBranchModal";
import DeleteModal from "../../components/Modal/DeleteModal";
import DeleteModalComponent from "../../components/Modal/DeleteModal2";
import { AddRoleModal } from "../../components/Modal/RoleModal";

interface DataType {
    key: string;
    roleName: string;
    numberOfUsers: string;
    createdDate: string;
}


const data: DataType[] = [
    {
        key: '1',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '2',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '3',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '4',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '5',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '6',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '7',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
    },
    {
        key: '8',
        roleName: "Account  Controller",
        numberOfUsers: "05",
        createdDate: "22-04-2021",
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

const Role = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: 'Edit',
          //extra: '⌘P',
        },
        {
            key: '2',
            label: 'Delete',
            onClick: () => setDeleteModal(true),
            //extra: '⌘P',
          }
      ];
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Role Name',
            dataIndex: 'roleName',
            key: 'roleName',
        },
        {
            title: 'Number of Users ',
            dataIndex: 'numberOfUsers',
            key: 'numberOfUsers',
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate', 
            key: 'createdDate',
        },
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
    return ( 
        <>
            <DisbursementFilter options={options} selectplaceholder="Account State" name="Add Role" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
            {depositModal && (
                 <AddRoleModal visible={depositModal}  onCancel={()=>setDepositModal(false)} onSubmit={()=>setDepositModal(false)}/>
            )}
            {deleteModal && (
                <DeleteModalComponent
                    deleteModal={deleteModal}
                    setDeleteModal={setDeleteModal}
                    text="Delete Role"
                    content="Are you sure you want to delete this role?"
                    type="role"
                />
            )}
        </>
    );
}
 
export default Role;