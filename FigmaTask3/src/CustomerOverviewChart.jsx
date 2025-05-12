
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const CustomerOverviewChart = () => {
  const data = {
    labels: Array.from({ length: 15 }, (_, i) => (i + 1) * 2),
    datasets: [
      {
        label: "New Customers",
        data: [12, 15, 10, 8, 6, 5, 3, 14, 17, 20, 15, 10, 8, 6, 3],
        backgroundColor: "rgba(0, 0, 255, 0.7)",
      },
      {
        label: "Returning Customers",
        data: [6, 8, 4, 5, 3, 2, 1, 6, 8, 10, 7, 5, 4, 3, 2],
        backgroundColor: "rgba(0, 0, 255, 0.3)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="p-2 rounded-xl shadow bg-white mt-6">
      <Bar data={data} options={options} />
    </div>
  );
};

export default CustomerOverviewChart;
