import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ActiveUsersChart = () => {
  const data = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [
      {
        label: "Active Users",
        data: [800, 600, 400, 900, 700, 850, 500, 450, 750],
        backgroundColor: "#ffffff",
        borderRadius: 5,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 1000,
        grid: {
          color: "rgba(255,255,255,0.2)",
        },
        ticks: {
          color: "#ffffff",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-[#1f2335] to-[#2b2f4a] p-6 rounded-2xl w-full max-w-2xl h-60 flex items-center  shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActiveUsersChart;
