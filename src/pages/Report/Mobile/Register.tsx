import { useState } from "react";
import Filter from "../../../components/Filter/Filter";
import DisbursementFilter from "../../../components/Filter/DisbursementFilter";
import { Col } from "antd";
import DisbursmentTable from "../../../components/Table/DisbursmentTable";
import DisbursementModal from "../../../components/Modal/DisbursementModal";
import LoanFilter from "../../../components/Filter/LoanFilter";
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
    { title: "CIF", dataIndex: "cif", key: "cif" },
    { title: "First Name", dataIndex: "firstName", key: "firstName" },
    { title: "Last name", dataIndex: "lastName", key: "lastName" },
    { title: "Username", dataIndex: "userName", key: "userName" },
    { title: "Phone Num", dataIndex: "phoneNumber", key: "phoneNumber" },
    { title: "email", dataIndex: "email", key: "email" },
    { title: "profile status", dataIndex: "profileStatus", key: "profileStatus" },
  ];
  
  const expandableColumns = [
    { title: "BVN Sync", dataIndex: "bvnSync", key: "bvnSync" },
    { title: "Date Created", dataIndex: "dateCreated", key: "dateCreated" },
  ];
  
  const dataSource = [
    {
      key: "1",
      cif: "22300915013",
      firstName: "Olademeji ",
      lastName: "Brown",
      userName: "Bayo@1",
      phoneNumber: "08176355436",
      email: "Olademeji@gmail.com",
      profileStatus: "Active",
      expandableData: [
        {
          key: "1-1",
          bvnSync: "6365543542",
          dateCreated: "09-11-2021",
        },
      ],
    },
    {
      key: "2",
      cif: "22300915013",
      firstName: "Olademeji ",
      lastName: "Brown",
      userName: "Bayo@1",
      phoneNumber: "08176355436",
      email: "Olademeji@gmail.com",
      profileStatus: "Active",
      expandableData: [
        {
          key: "2-1",
          bvnSync: "6365543542",
          dateCreated: "09-11-2021",
        },
      ],
    },
  ];
  
const Registration = () => {
    const [depositModal, setDepositModal] = useState(false)
    return ( 
        <>
            <LoanFilter options={options} selectplaceholder="Account State" name="New Disbursement" button="deposit" modal={depositModal} setModal={setDepositModal}/>
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
            {/* {depositModal && (
              <DisbursementModal
                  depositModal={depositModal}
                  setDepositModal={setDepositModal}
              />
            )} */}
        </>
    );
}
 
export default Registration;