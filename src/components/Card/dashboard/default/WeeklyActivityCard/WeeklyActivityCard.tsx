import { Area } from '@ant-design/plots';
import { Card, CardProps, Flex, Select, Typography } from 'antd';

type Activity = {
  day: string;
  value: number;
};

type ChartProps = {
  data: Activity[];
};

const AreaChart = ({ data }: ChartProps) => {
  const config = {
    data,
    xField: 'day',
    yField: 'value',
    smooth: true,
    areaStyle: {
      // Apply radial gradient
      fill: 'rgba(0,0,0,0)',
    },
    xAxis: {
      grid: null, // Remove grid lines from X-axis
    },
    yAxis: {
      tickInterval: 500,
      min: 0,
      grid: null, // Remove grid lines from Y-axis
    },
    tooltip: {
      showMarkers: false,
    },
    interactions: [{ type: 'active-region' }],
  };

  return <Area {...config} />;
};

type Props = {
  data: Activity[];
} & CardProps;

export const WeeklyActivityCard = ({ data, ...others }: Props) => {
  return (
    <Card {...others} style={{
      height: "330px"
    }}>
      <Flex align='center' gap={80} >
        <Typography.Title level={4}>
          Gross Loan Portfolio
        </Typography.Title>
        <Select
            size='small'
            style={{ width: 130 }}
            showSearch
            placeholder="This Year"
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: '1', label: 'Monthly' },
              { value: '2', label: 'Weekly' }, 
              { value: '3', label: 'Daily' },
            ]}
          />
      </Flex>
      <AreaChart data={data} />
    </Card>
  );
};
