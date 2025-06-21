import { Card, Statistic, Flex, Typography } from "antd";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

interface StatCardProps {
  name: string;
  value: number;
  color: string;
  status: string;
}

const StatCard: React.FC<StatCardProps> = ({ name, value, color, status }) => {
  return (
    <Card
      className="rounded-2xl"
      style={{ backgroundColor: color }}
      bodyStyle={{ padding: '16px' }}
    >
      <div className="flex flex-col gap-4">
        <Typography.Text 
          className="text-sm line-clamp-1 truncate"
          ellipsis={{ tooltip: name }}
        >
          {name}
        </Typography.Text>
        
        <div className="flex justify-between items-end">
          <Statistic 
            value={value}
            className="[&_.ant-statistic-content]:text-3xl [&_.ant-statistic-content]:font-bold [&_.ant-statistic-content]:m-0 [&_.ant-statistic-content]:leading-none"
          />
          <div className="flex items-center gap-1 text-sm ml-2">
            <span>{status}</span>
            <FaArrowTrendUp className="text-xs" />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;