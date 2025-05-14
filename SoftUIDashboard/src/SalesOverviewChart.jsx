import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const SalesOverviewChart = () => {
  const data = {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales 1",
        data: [50, 100, 250, 200, 500, 300, 400, 200, 500],
        borderColor: "#cb0c9f",
        backgroundColor: "rgba(203, 12, 159, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
      {
        label: "Sales 2",
        data: [30, 90, 150, 100, 150, 150, 450, 100, 450],
        borderColor: "#3A416F",
        backgroundColor: "rgba(58, 65, 111, 0.2)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#f0f0f0",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-75">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesOverviewChart;
