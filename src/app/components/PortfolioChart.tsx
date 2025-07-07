// components/PortfolioChart.tsx
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function PortfolioChart({ data }: { data: { timestamps: string[]; values: number[] } }) {
  const chartData = {
    labels: data.timestamps,
    datasets: [
      {
        label: 'Portfolio Value',
        data: data.values,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
      },
    ],
  }

  return <Line data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
}