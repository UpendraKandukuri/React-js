import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const VendorBarChart = () => {
  const data = {
    labels: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
    datasets: [
      {
        label: "Tier 1",
        data: [20, 30, 15, 35, 25, 18, 22, 28, 34, 26, 18, 10],
        backgroundColor: "#4339F2",
        stack: "stack1",
        
      },
      {
        label: "Tier 2",
        data: [15, 25, 10, 30, 20, 14, 18, 24, 28, 20, 14, 8],
        backgroundColor: "#6A5AE0",
        stack: "stack1",
      },
      {
        label: "Tier 3",
        data: [10, 20, 8, 25, 15, 10, 14, 20, 24, 18, 10, 6],
        backgroundColor: "#A193F4",
        stack: "stack1",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default VendorBarChart;
