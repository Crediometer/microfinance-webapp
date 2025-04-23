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
import { FaTrashAlt } from "react-icons/fa";
import AccountViewModal from "../../components/Modal/AccountViewModal";
import AccountModal from "../../components/Modal/AccountModal";

interface DataType {
    key: string;
    documentName: string;
    documentType: string;
    uploadDate: string;
    uploadedBy: string;
}


const data: DataType[] = [
    {
        key: '1',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '2',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '3',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '4',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '5',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '6',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '7',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
    },
    {
        key: '8',
        documentName: "Acounts of 2023",
        documentType: "PDF",
        uploadDate: "22-04-2021",
        uploadedBy: "Adebayo Ibrahim",
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

const Accounting = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
      const items: MenuProps['items'] = [
            {
                key: '1',
                label: 'View',
                // icon: <FaTrash />,
                onClick: ()=>{setViewModal(true)}
                //extra: '⌘P',
            },
            {
                key: '2',
                label: 'Download',
                // icon: <FaTrash />,
                // onClick: ()=>{setPendingModal(true)}
                //extra: '⌘P',
            },
            {
                key: '3',
                label: 'Delete',
                // icon: <FaTrash />,
                onClick: ()=>{setDeleteModal(true)}
                //extra: '⌘P',
            },
        ];
        const columns: TableProps<DataType>['columns'] = [
            {
                title: 'Document Name',
                dataIndex: 'documentName',
                key: 'documentName',
            },
            {
                title: 'Document Type',
                dataIndex: 'documentType',
                key: 'documentType',
            },
            {
                title: 'Upload Date',
                dataIndex: 'uploadDate',
                key: 'uploadDate',
            },
            {
                title: 'Uploaded By',
                dataIndex: 'uploadedBy',
                key: 'uploadedBy',
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
            <DisbursementFilter options={options} selectplaceholder="Account State" name="Upload Document" button="deposit" modal={depositModal} setModal={setDepositModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
        
            {deleteModal && (
                <ConfirmModal
                    setConfirmModal={setDeleteModal}
                    confirmModal={deleteModal}
                    icon={
                        <FaTrashAlt
                            style={{
                                fontSize: "4rem"
                            }}
                        />
                    }
                    text="Delete Account"
                    content="Are you sure you want to delete this account"
                    label="Yes Delete"
                    type="delete"
                />
            )}

            {depositModal && (
                <AccountModal
                    depositModal={depositModal}
                    setDepositModal={setDepositModal}
                />
            )}
            {viewModal && (
                <AccountViewModal
                    viewModal={viewModal}
                    setViewModal={setViewModal}
                />
            )}
          
        </>
    );
}
 
export default Accounting;