import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Investment", "Rent", "Restaurant", "Food", "Insurance"],
    datasets: [
      {
        data: [20, 28, 18, 16, 18],
        backgroundColor: [
          "#4ade80", 
          "#3b82f6", 
          "#a855f7", 
          "#facc15", 
          "#f43f5e", 
        ],
        borderColor: "#ffffff",
        borderWidth: 5,
        cutout: "65%",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="w-42 h-42">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
