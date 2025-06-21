import { Button, DatePicker, Flex, Input, Select } from "antd";
import { CiSearch } from "react-icons/ci";
import { PlusCircleOutlined } from "@ant-design/icons";
import { LuSlidersVertical } from "react-icons/lu";
import { IoRefreshOutline } from "react-icons/io5";

const { RangePicker } = DatePicker;

interface FilterProps {
  options: { value: string; label: string }[];
  selectplaceholder: string;
  name: string;
  button?: "deposit" | "customer";
  onClick: () => void;
}

const Filter = ({
  options,
  selectplaceholder,
  name,
  button,
  onClick,
}: FilterProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-3/4">
        <Input
          placeholder="Search by Name, Customer ID, or Account Off...."
          prefix={<CiSearch className="text-gray-400" />}
          className="w-full sm:w-auto flex-1"
        />
        
        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <Select
            showSearch
            placeholder={selectplaceholder}
            optionFilterProp="label"
            suffixIcon={<LuSlidersVertical />}
            className="w-full sm:w-[200px]"
            options={options}
            filterSort={(optionA, optionB) =>
              String(optionA?.label ?? '')
                .toLowerCase()
                .localeCompare(String(optionB?.label ?? '').toLowerCase())
            }
          />
          
          <RangePicker className="w-full sm:w-auto" />
          
          <Button 
            icon={<IoRefreshOutline />} 
            className="w-full sm:w-auto"
          >
            <span className="hidden sm:inline">Refresh</span>
          </Button>
        </div>
      </div>

      {/* Action Button Section */}
      {button && (
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={onClick}
          className="w-full md:w-auto"
        >
          {name}
        </Button>
      )}
    </div>
  );
};

export default Filter;