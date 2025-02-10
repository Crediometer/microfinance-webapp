import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardProps, Flex, Typography } from 'antd';

ChartJS.register(ArcElement, Tooltip, Legend);

type Activity = {
  label: string;
  value: number;
};

type ChartProps = {
  data: Activity[];
};

const DoughnutChart = ({ data }: ChartProps) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: [
          '#000000',
          '#92BFFF',
          '#94E9B8',
          '#0500FF',
          '#9966FF',
          '#FF9F40',
        ],
        hoverBackgroundColor: [
          '#000000',
          '#92BFFF',
          '#94E9B8',
          '#0500FF',
          '#9966FF',
          '#FF9F40',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position:'right' as const,
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: '70%', // Makes it a doughnut chart
  };

  return <Doughnut data={chartData} options={options} style={{ height: '100%', width: '100%' }} />;
};

type Props = {
  data: Activity[];
} & CardProps;

export const PieChart = ({ data, ...others }: Props) => {
  return (
    <Card
      {...others}
      style={{
        width:"100%",
        height: '330px',
        overflow: 'hidden',
      }}
    >
      <Flex align='center' justify='space-between'>
        <Typography.Title level={4}>Loans in Arrears</Typography.Title>
        <Typography.Text  style={{ fontWeight: 400, fontSize: "30px" }}>
          238
        </Typography.Text>
      </Flex>
      <div style={{ height: 'calc(100% - 40px)' }}> {/* Adjusts chart height relative to title */}
        <DoughnutChart data={data} />
      </div>
    </Card>
  );
};
