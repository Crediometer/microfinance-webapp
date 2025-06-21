import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { IoRefreshOutline } from "react-icons/io5";
import { LuSlidersVertical } from "react-icons/lu";

interface VaultFilterProps {
    currencyPlaceholder: string;
    currencyOption: Array<{ label: string; value: string }>;
    statusPlaceholder: string;
    statusOption: Array<{ label: string; value: string }>;
    branchPlaceholder: string;
    branchOption: Array<{ label: string; value: string }>;
    name: string;
    button: "deposit" | "customer";
    modal?: boolean;
    setModal?: (value: boolean) => void;
}

const VaultFilter: React.FC<VaultFilterProps> = ({
    currencyPlaceholder,
    currencyOption,
    statusPlaceholder,
    statusOption,
    branchPlaceholder,
    branchOption,
    name,
    button,
    setModal,
}) => {
    const handleSearchClick = () => {
        // Add search functionality here
        console.log("Search clicked");
    };

    const handleAddButtonClick = () => {
        if (button === "deposit" && setModal) {
            setModal(true);
        }
        // Add other button functionality here
    };

    const selectConfig = {
        showSearch: true,
        className: "",
        optionFilterProp: "label" as const,
        filterSort: (optionA: any, optionB: any) =>
            String(optionA?.label ?? "")
                .toLowerCase()
                .localeCompare(String(optionB?.label ?? "").toLowerCase()),
    };

    return (
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1 lg:max-w-[70%]">


                <Input
                    className="w-full sm:w-[200px] lg:w-[250px] border-[#4D6FED40] text-sm text-[#9BA6BC] font-normal"
                    placeholder="Search by Name, Customer ID, or Account Off...."
                />

                <Select
                    {...selectConfig}
                    className="w-full sm:w-[200px] lg:w-[250px] "
                    placeholder={currencyPlaceholder}
                    options={currencyOption}
                    suffixIcon={<LuSlidersVertical className="text-[#9BA6BC]" />}
                />

                <Select
                    {...selectConfig}
                    className="w-full sm:w-[200px] lg:w-[250px] "
                    placeholder={statusPlaceholder}
                    options={statusOption}
                    suffixIcon={<LuSlidersVertical className="text-[#9BA6BC]" />}
                />

                <Select
                    {...selectConfig}
                    className="w-full sm:w-[200px] lg:w-[250px] "
                    placeholder={branchPlaceholder}
                    options={branchOption}
                    suffixIcon={<LuSlidersVertical className="text-[#9BA6BC]" />}
                />
                <Button
                    icon={<IoRefreshOutline />}
                    className="w-full sm:w-auto"
                >
                    <span className="hidden sm:inline">Refresh</span>
                </Button>

            </div>

            {/* Action Button Section */}
            <div className="flex justify-end">
                <Button
                    icon={<PlusCircleOutlined />}
                    type="primary"
                    onClick={handleAddButtonClick}
                >
                     {name}
                </Button>
            </div>
        </div>
    );
};

export default VaultFilter;