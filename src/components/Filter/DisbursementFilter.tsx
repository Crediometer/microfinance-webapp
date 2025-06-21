import { Button, DatePicker, Dropdown, Flex, Input, Select, Space } from "antd";
import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { IoRefreshOutline } from "react-icons/io5";

const { RangePicker } = DatePicker;

const DisbursementFilter = ({
    options,
    selectplaceholder,
    name,
    button,
    modal,
    setModal,
    modal2,
    setModal2
}: any) => {
    const dropdownItems = [
        {
            key: '1',
            label: 'Loan',
            onClick: () => handleMenuClick('Loan')
        },
        {
            key: '2',
            label: 'Deposit',
            onClick: () => handleMenuClick('Deposit')
        },
    ];

    const handleMenuClick = (type: string) => {
        console.log(`Selected: ${type}`);
        if (type === 'Deposit') {
            setModal(true);
        }
        if (type === 'Loan') {
            setModal2(true);
        }
    };

    return (
        <Flex
            align="center"
            justify="space-between"
            wrap="wrap"
            gap={16}
            style={{ width: "100%" }}
        >
            <Flex
                align="center"
                gap={8}
                wrap="wrap"
                style={{
                    flex: 1,
                    minWidth: 0,
                    maxWidth: "100%"
                }}
            >
                <Select
                    showSearch
                    placeholder={selectplaceholder}
                    optionFilterProp="label"
                    filterSort={(optionA, optionB) =>
                        String(optionA?.label ?? '').toLowerCase().localeCompare(String(optionB?.label ?? '').toLowerCase())
                    }
                    options={options}
                    style={{
                        minWidth: 120,
                        flex: "0 1 200px"
                    }}
                />
                <RangePicker
                    style={{
                        minWidth: 200,
                        flex: "0 1 300px"
                    }}
                />
                <Input
                    placeholder="Search by Name, Customer ID, or Account Off...."
                    style={{
                        minWidth: 200,
                        flex: "1 1 300px"
                    }}
                />
                <Button
                    icon={<IoRefreshOutline />}
                    className="w-full sm:w-auto"
                >
                    <span className="hidden sm:inline">Refresh</span>
                </Button>
            </Flex>

            <Flex
                wrap="wrap"
                gap={8}
                style={{
                    flexShrink: 0
                }}
            >
                {(button === "deposit") && (
                    <Button
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        onClick={() => {
                            setModal(true)
                        }}
                    >
                        {name}
                    </Button>
                )}
                {(button === "customer") && (
                    <Button
                        type="primary"
                        icon={<PlusCircleOutlined />}
                    >
                        {name}
                    </Button>
                )}
                {(button === "product") && (
                    <Dropdown
                        menu={{ items: dropdownItems }}
                        placement="bottomRight"
                        trigger={['click']}
                    >
                        <Button
                            type="primary"
                            icon={<PlusCircleOutlined />}
                        >
                            <Space>
                                {name}
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                )}
            </Flex>
        </Flex>
    );
}

export default DisbursementFilter;