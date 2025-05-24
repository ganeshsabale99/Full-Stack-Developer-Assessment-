import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ShipActivityChart = () => {
 
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Port Calls',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 55, 72, 80, 75],
        fill: false,
        borderColor: '#2563EB',
        backgroundColor: '#2563EB',
        tension: 0.4,
      },
      {
        label: 'Days at Sea',
        data: [28, 25, 30, 28, 25, 28, 30, 31, 28, 25, 27, 29],
        fill: false,
        borderColor: '#06B6D4',
        backgroundColor: '#06B6D4',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
  };

  return <Line data={data} options={options} />;
};

export default ShipActivityChart;