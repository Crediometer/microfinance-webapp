import { Card, Divider, Input, Table, Tag, Typography } from "antd";
import { useAccountType } from "../../../context/AccountTypeContext";
import { TbFileSearch } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  repayDay: string;
  paymentId: string;
  amount: string;
  status: string[];
  balance: string;
}

const statusTagColors: Record<string, string> = {
  'Successfull': '#068B6C',
  'Pending': '#1C1C1C66'
};

const columns: TableProps<DataType>['columns'] = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Repayment Date', dataIndex: 'repayDay', key: 'repayDay' },
  { title: 'Payment Id', dataIndex: 'paymentId', key: 'paymentId' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((tag) => (
          <Tag color={statusTagColors[tag] || '#1C1C1C66'} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </>
    )
  },
  { title: 'Balance', dataIndex: 'balance', key: 'Balance' },
];

const depositAccountFields = [
  { label: 'Account Number', placeholder: '978476455423' },
  { label: 'Product', placeholder: 'Savings' },
  { label: 'Branch', placeholder: 'Lekki' },
  { label: 'State', placeholder: 'Ondo' },
  { label: 'Date Opened', placeholder: '01-12-2025' },

  { label: 'Currency', placeholder: 'NGN' },
  { label: 'Ledger Balance', placeholder: '0' },
  { label: 'Available Balance', placeholder: 'Ondo' },
  { label: 'Uncleared Cheque', placeholder: '01-12-2025' }
];


const customerInfoFields = [
  { label: 'Currency', placeholder: 'NGN' },
  { label: 'Name', placeholder: 'Alade Omotayo' },
  { label: 'Branch', placeholder: 'Lekki' },
  { label: 'Client Code', placeholder: 'CL87' }
];

const mandateInfoFields = [
  { label: 'Account Name', placeholder: 'Alade Omotayo' },
  { label: 'Mandate Role', placeholder: 'Savings' },
  { label: 'Mandate Option', placeholder: 'Lekki' },
  { label: 'Passport', placeholder: 'Ondo', hasSearchIcon: true },
  { label: 'Signature', placeholder: '01-12-2025', hasSearchIcon: true }
];

const loanAccountFields = [
  { label: 'Loan Account Number', placeholder: '978476455423' },
  { label: 'Loan Product', placeholder: 'Lekki' },
  { label: 'Amount Borrowed', placeholder: 'Ondo' },
  { label: 'Outstanding Balance', placeholder: '01-12-2025' }
];

const loanBalanceFields = [
  { label: 'Interest Rate', placeholder: 'NGN' },
  { label: 'Loan Status', placeholder: '0' },
  { label: 'Loan Due Date', placeholder: 'Ondo' },
  { label: 'Repayment Schedule', placeholder: '01-12-2025' }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    repayDay: "May 15, 2022",
    paymentId: 'EFTOOM1271',
    amount: "N23,000.00",
    status: ['Successfull'],
    balance: "N203,000"
  },
  {
    key: '2',
    name: 'John Brown',
    repayDay: "May 15, 2022",
    paymentId: 'EFTOOM1271',
    amount: "N23,000.00",
    status: ['Pending'],
    balance: "N203,000"
  },
  {
    key: '3',
    name: 'John Brown',
    repayDay: "May 15, 2022",
    paymentId: 'EFTOOM1271',
    amount: "N23,000.00",
    status: ['Pending'],
    balance: "N203,000"
  },
];

const InputField = ({ label, placeholder, hasSearchIcon = false }: { 
  label: string; 
  placeholder: string; 
  hasSearchIcon?: boolean 
}) => (
  <div className="flex-1 min-w-[200px]">
    <Typography.Text className="text-base font-normal">
      {label}
    </Typography.Text>
    <Input 
      className="mt-2"
      placeholder={placeholder}
      suffix={hasSearchIcon ? <TbFileSearch /> : null}
    />
  </div>
);

const FormSection = ({ title, fields }: { title: string; fields: any[] }) => (
  <div className="mt-6">
    <Typography.Title level={4} className="!text-xl !font-normal">
      {title}
    </Typography.Title>
    <Divider />
    <Card className="w-full">
      <div className="flex flex-wrap gap-4">
        {fields.map((field, index) => (
          <InputField key={index} {...field} />
        ))}
      </div>
    </Card>
  </div>
);

const Teller = () => {
  const { accountType } = useAccountType();

  return (
    <div className="px-1 py-1">
      {accountType === "Deposit" ? (
        <div className="space-y-6">
          <FormSection title="Account Details" fields={depositAccountFields} />
          

          <FormSection title="Customer Information" fields={customerInfoFields} />
          <FormSection title="Mandate Information" fields={mandateInfoFields} />
        </div>
      ) : (
        <div className="space-y-6">
          <Input.Search 
            placeholder="Search using Account Number, Name, Product Type" 
            enterButton="Search"
            prefix={<CiSearch />}
            className="w-full"
          />

          <FormSection title="Account Details" fields={loanAccountFields} />
          
          <Card className="w-full">
            <div className="flex flex-wrap gap-4">
              {loanBalanceFields.map((field, index) => (
                <InputField key={index} {...field} />
              ))}
            </div>
          </Card>

          <div className="mt-6">
            <Typography.Title level={4} className="!text-xl !font-normal">
              Loan History
            </Typography.Title>
            <Divider />
            <Table<DataType> 
              columns={columns} 
              dataSource={data} 
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Teller;