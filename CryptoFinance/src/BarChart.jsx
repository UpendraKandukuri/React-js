
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
    datasets: [
      {
        label: 'Overview Balance',
        data: [300, 500, 450, 320, 250, 400, 390, 410, 420, 430, 470, 600],
        backgroundColor: '#2F1C6A',
        borderRadius: 5,
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value >= 1000 ? `${value / 1000}k` : `${value}k`;
          },
        },
        grid: {
          drawBorder: false,
          color: '#eee',
        },
      },
      x: {
        grid: {
          display: false,
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
    <div className="w-full h-72">
      <Bar data={data} options={options} />
    </div>
  );
};
 
export default BarChart;
