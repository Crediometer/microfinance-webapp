import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
import { Card, CardProps, Flex, Select, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

type Activity = {
  day: string;
  value: number;
};

type ChartProps = {
  data: Activity[];
};

const AreaChart = ({ data }: ChartProps) => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState<string | CanvasGradient>('rgba(0,0,0,0.1)');

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current as any;
      const ctx = chart.ctx;
      const gradientFill = ctx.createRadialGradient(
        ctx.canvas.width / 2,         // X-center of the gradient
        ctx.canvas.height * 0.18,     // Y-center (18.37% from the top)
        0,                            // Inner radius
        ctx.canvas.width / 2,         // X-center for outer radius
        ctx.canvas.height * 0.68,     // Outer radius reaching 68.44% from the center
        ctx.canvas.height             // Maximum reach
      );

      // Gradient colors
      gradientFill.addColorStop(0, 'rgba(0, 0, 0, 0.1)');
      gradientFill.addColorStop(1, 'rgba(0, 0, 0, 0)');
      setGradient(gradientFill);
    }
  }, []);
  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        data: data.map((item) => item.value),
        borderColor: '#000000', // Line color
        backgroundColor: gradient, // Light fill effect
        fill: true, // Enables the area effect
        tension: 0.4, // Makes the line smooth
        pointRadius: 0, 
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Removes the legend/title
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: { display: false }, // Hide X-axis grid
      },
      y: {
        grid: { display: false }, // Hide Y-axis grid
        ticks: {
          stepSize: 10000,
          beginAtZero: true,
        },
      },
    },
  };

  return <Line ref={chartRef} data={chartData} options={options} style={{ height: '100%', width: '100%' }} />;
};

type Props = {
  data: Activity[];
} & CardProps;

export const WeeklyActivityCard = ({ data, ...others }: Props) => {
  return (
    <Card {...others} style={{ height: '330px', overflow: 'hidden' }}>
      <Flex align='center' gap={80}>
        <Typography.Title level={4}>Gross Loan Portfolio</Typography.Title>
        <Select
          size='small'
          style={{ width: 130 }}
          showSearch
          placeholder='This Year'
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
      <div style={{ height: '250px' }}>
        <AreaChart data={data} />
      </div>
    </Card>
  );
};
