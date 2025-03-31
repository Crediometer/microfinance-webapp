import { useState } from "react";
import DisbursementFilter from "../../components/Filter/DisbursementFilter";
import { Button, Col, Dropdown, MenuProps } from "antd";
import DisbursmentTable from "../../components/Table/DisbursmentTable";
import { MdTouchApp } from "react-icons/md";
import ChequeViewModal from "../../components/Modal/chequeViewModaL copy";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import { FaEraser } from "react-icons/fa6";
import { COLOR } from "../../App";
import { FaRegTimesCircle } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";

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
const UnClearedChequeTransaction = () => {
    const [depositModal, setDepositModal] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [clearModal, setClearModal] = useState(false);
    const [bounceModal, setBounceModal] = useState(false);
    const [cancleModal, setCancleModal] = useState(false);
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
            label: 'Clear',
            // icon: <FaTrash />,
            onClick: ()=>{setClearModal(true)}
            //extra: '⌘P',
        },
        {
            key: '3',
            label: 'Bounce',
            // icon: <FaTrash />,
            onClick: ()=>{setBounceModal(true)}
            //extra: '⌘P',
        },
        {
            key: '4',
            label: 'Cancel Cheque',
            // icon: <FaTrash />,
            onClick: ()=>{setCancleModal(true)}
            //extra: '⌘P',
        },
    ];
    const columns = [
        { title: "Cheque No", dataIndex: "chequeNo", key: "chequeNo" },
        { title: "Deposit Account", dataIndex: "depositAccount", key: "depositAccount" },
        { title: "Cheque Transaction", dataIndex: "chequeTransaction", key: "chequeTransaction" },
        { title: "CHEQUE Amount", dataIndex: "chequeAmount", key: "chequeAmount" },
        { title: "Currency", dataIndex: "currency", key: "currency" },
        { title: "Cheque State", dataIndex: "chequeState", key: "chequeState" },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, record: typeof dataSource[number]) => (
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
            {viewModal && (
                <ChequeViewModal
                    viewModal={viewModal}
                    setViewModal={setViewModal}
                />
            )}
            {clearModal && (
                <ConfirmModal
                    setConfirmModal={setClearModal}
                    confirmModal={clearModal}
                    icon={
                        <FaEraser
                            style={{
                                color: COLOR["50"],
                                fontSize: "8rem"
                            }}
                        />
                    }
                    text="Clear Cheque"
                    content="Are you sure you want to clear this cheque"
                    label="Yes Clear"
                    type="accept"
                />
            )}
            {bounceModal && (
                <ConfirmModal
                    setConfirmModal={setBounceModal}
                    confirmModal={bounceModal}
                    icon={
                        <ImBlocked
                            style={{
                                color: COLOR["50"],
                                fontSize: "8rem"
                            }}
                        />
                    }
                    text="Bounce Cheque"
                    content="Are you sure you want to bounce this cheque"
                    label="Yes Bounce"
                    type="accept"
                />
            )}
             {cancleModal && (
                <ConfirmModal
                    setConfirmModal={setCancleModal}
                    confirmModal={cancleModal}
                    icon={
                        <FaRegTimesCircle
                            style={{
                                color: COLOR["50"],
                                fontSize: "8rem"
                            }}
                        />
                    }
                    text="Cancel Cheque"
                    content="Are you sure you want to Cancel Cheque this cheque"
                    label="Yes Cancel Cheque"
                    type="accept"
                />
            )}
        </>
    );
}
 
export default UnClearedChequeTransaction;