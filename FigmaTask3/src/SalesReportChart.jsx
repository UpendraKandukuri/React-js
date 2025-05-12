
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);

const SalesReportChart = () => {
  const data = {
  labels: Array.from({ length: 15 }, (_, i) => (i + 1) * 2),
    datasets: [
      {
        label: 'Sales',
        data: [10, 20, 10, 25, 15, 5, 0, 18, 22, 13, 11, 10, 20, 25, 18,],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: true,
        stepped: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="p-2 rounded-xl shadow bg-white">
      <Line data={data} options={options} />
    </div>
  );
};

export default SalesReportChart;
