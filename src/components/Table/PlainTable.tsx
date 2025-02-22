import { Table, Button, Typography } from "antd";
import type { TableProps } from 'antd';
import { MdTouchApp } from "react-icons/md";

interface CustomTableProps<T> {
    dataType: string;
    columns: TableProps<T>["columns"];
    data: T[];
}

const PlainTable = <T extends object>({ dataType, columns, data }: CustomTableProps<T>) => {
    return (
        <div>
            {/* <Typography.Title level={4}>{dataType} Table</Typography.Title> */}
            <Table<T> columns={columns} dataSource={data} />
        </div>
    );
};


export default PlainTable