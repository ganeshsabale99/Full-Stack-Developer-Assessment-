import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const VesselTypeChart = ({ ships = [] }) => {
  const shipTypeCount = ships.reduce((acc, ship) => {
    acc[ship.type] = (acc[ship.type] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(shipTypeCount),
    datasets: [
      {
        data: Object.values(shipTypeCount),
        backgroundColor: [
          "#3B82F6",
          "#06B6D4",
          "#F59E0B",
          "#10B981",
          "#EF4444",
          "#8B5CF6",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 15,
          padding: 15,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            const total = context.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            );
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "50%",
  };

  if (ships.length === 0 || Object.keys(shipTypeCount).length <= 1) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Not enough data to display chart</p>
      </div>
    );
  }

  return <Pie data={data} options={options} />;
};

export default VesselTypeChart;
