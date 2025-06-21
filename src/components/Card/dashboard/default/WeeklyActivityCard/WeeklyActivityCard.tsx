import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { Card, CardProps, Flex, Select, Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

type Activity = {
  day: string;
  value: number;
};

type ChartProps = {
  data: Activity[];
};

const AreaChart = ({ data }: ChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
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
        borderColor: '#000000',
        backgroundColor: gradient,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { display: false },
        ticks: { stepSize: 10000, beginAtZero: true },
      },
    },
  };

  return (
    <Line
      ref={chartRef as any}
      data={chartData}
      options={options}
      style={{ height: '100%', width: '100%' }}
    />
  );
};

type Props = {
  data: Activity[];
} & CardProps;

export const WeeklyActivityCard = ({ data, ...others }: Props) => {
  return (
    <Card {...others} style={{ height: 330, overflow: 'hidden' }}>
      <Flex align="center" justify="space-between" style={{ marginBottom: 16 }}>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Gross Loan Portfolio
        </Typography.Title>
        <Select
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
      <div style={{ height: 250 }}>
        <AreaChart data={data} />
      </div>
    </Card>
  );
};
