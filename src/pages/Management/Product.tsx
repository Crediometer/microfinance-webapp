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
import { LoanProductModal } from "../../components/Modal/LoanProductModal";

interface DataType {
    key: string;
    productName: string;
    currency: string;
    productCode: string;
    productType: string;
    lastModified: string;
    status: string;
}


const data: DataType[] = [
    {
        key: '1',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '2',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '3',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '4',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '5',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '6',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '7',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
    },
    {
        key: '8',
        productName: "Loan take",
        currency: "NGN",
        productCode: "NG827",
        productType: "Savings",
        lastModified: "09-11-2021",
        status: "Active",
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

const Product = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [loanModal, setLoanModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);
    const [createModal, setCreateModal] = useState(false)
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: 'Edit Product',
          //extra: '⌘P',
        },
        {
            key: '2',
            label: 'Deposit',
            onClick: () => setDeleteModal(true),
            //extra: '⌘P',
          }
      ];
    const columns: TableProps<DataType>['columns'] = [
        {
            title: ' Product Name  ',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        },
        {
            title: 'Product Code',
            dataIndex: 'productCode',
            key: 'productCode', 
        },
        {
            title: 'Product Type',
            dataIndex: 'productType',
            key: 'productType', 
        },
        {
            title: 'Last Modified',
            dataIndex: 'lastModified',
            key: 'lastModified', 
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status', 
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
            <DisbursementFilter options={options} selectplaceholder="Account State" name="Add New Product" button="product" modal={depositModal} setModal={setDepositModal} modal2={loanModal} setModal2={setLoanModal}/>
             <Col
                style={{
                    marginTop: "28px"
                }}
            >
                <PlainTable<DataType> dataType="Customer" columns={columns} data={data} />
            </Col>
         
            {depositModal && (
                 <LoanProductModal visible={depositModal} setmodal={setDepositModal}  onCancel={()=>setDepositModal(false)} onSubmit={()=>setDepositModal(false)}/>
            )}
            {loanModal && (
                 <LoanProductModal visible={loanModal} setmodal={setLoanModal}  onCancel={()=>setLoanModal(false)} onSubmit={()=>setLoanModal(false)}/>
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
 
export default Product;