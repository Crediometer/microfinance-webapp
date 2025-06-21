import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, CardProps, Flex, Typography, theme } from 'antd';
import { useMemo } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

type Activity = {
  label: string;
  value: number;
  color?: string; // Allow custom colors per item
};

type ChartProps = {
  data: Activity[];
  cutout?: string;
  showLegend?: boolean;
  legendPosition?: 'top' | 'bottom' | 'left' | 'right';
};

// Default color palette - more professional colors
const DEFAULT_COLORS = [
  '#1890ff', // Ant Design primary blue
  '#52c41a', // Success green
  '#faad14', // Warning yellow
  '#f5222d', // Error red
  '#722ed1', // Purple
  '#fa8c16', // Orange
  '#13c2c2', // Cyan
  '#eb2f96', // Magenta
];

const DoughnutChart = ({ 
  data, 
  cutout = '70%', 
  showLegend = true, 
  legendPosition = 'right' 
}: ChartProps) => {
  const { token } = theme.useToken();

  const chartData = useMemo(() => ({
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map((item, index) => 
          item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]
        ),
        hoverBackgroundColor: data.map((item, index) => 
          item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]
        ),
        borderWidth: 2,
        borderColor: token.colorBgContainer,
        hoverBorderWidth: 3,
      },
    ],
  }), [data, token.colorBgContainer]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: legendPosition,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            size: 12,
            family: token.fontFamily,
          },
          color: token.colorText,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: token.colorBgElevated,
        titleColor: token.colorText,
        bodyColor: token.colorText,
        borderColor: token.colorBorder,
        borderWidth: 1,
        callbacks: {
          label: (context: any) => {
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: ${context.parsed} (${percentage}%)`;
          },
        },
      },
    },
    cutout,
    animation: {
      animateRotate: true,
      animateScale: false,
      duration: 1000,
    },
  }), [showLegend, legendPosition, cutout, token]);

  return <Doughnut data={chartData} options={options} />;
};

type Props = {
  data: Activity[];
  title?: string;
  totalValue?: number;
  subtitle?: string;
  showTotal?: boolean;
  chartProps?: Partial<ChartProps>;
} & CardProps;

export const PieChart = ({ 
  data, 
  title = "Loans in Arrears",
  totalValue,
  subtitle,
  showTotal = true,
  chartProps,
  ...cardProps 
}: Props) => {
  const { token } = theme.useToken();
  
  // Calculate total if not provided
  const calculatedTotal = useMemo(() => 
    totalValue ?? data.reduce((sum, item) => sum + item.value, 0),
    [data, totalValue]
  );

  return (
    <Card
      {...cardProps}
      style={{
        width: "100%",
        height: '400px',
        ...cardProps.style,
      }}
      styles={{
        body: { 
          height: '100%', 
          padding: token.paddingLG,
          display: 'flex',
          flexDirection: 'column',
        }
      }}
    >
      {/* Header */}
      <Flex align='center' justify='space-between' style={{ marginBottom: token.marginMD }}>
        <div>
          <Typography.Title level={4} style={{ margin: 0, marginBottom: 4 }}>
            {title}
          </Typography.Title>
          {subtitle && (
            <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
              {subtitle}
            </Typography.Text>
          )}
        </div>
        
        {showTotal && (
          <div style={{ textAlign: 'right' }}>
            <Typography.Text 
              style={{ 
                fontWeight: 600, 
                fontSize: "28px",
                color: token.colorPrimary,
                display: 'block',
                lineHeight: 1,
              }}
            >
              {calculatedTotal.toLocaleString()}
            </Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: '12px' }}>
              Total
            </Typography.Text>
          </div>
        )}
      </Flex>
      
      {/* Chart Container */}
      <div style={{ 
        flex: 1, 
        minHeight: 0, // Important for flex child with chart
        position: 'relative',
      }}> 
        <DoughnutChart 
          data={data} 
          cutout="65%"
          showLegend={true}
          legendPosition="right"
          {...chartProps}
        />
      </div>
    </Card>
  );
};