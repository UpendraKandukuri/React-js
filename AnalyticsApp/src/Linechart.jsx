
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const Linechart = () => {
  const labels = Array.from({ length: 15 }, (_, i) => (i + 1) * 2);

  const data = {
    labels,
    datasets: [
      {
        label: "Line A",
        data: [500, 700, 800, 700, 650, 800, 900, 870, 850, 830, 860, 900, 920, 890, 720],
        fill: true,
        borderColor: "rgba(99, 102, 241, 1)", 
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        pointRadius: 3,
      },
      {
        label: "Line B",
        data: [850, 800, 750, 700, 670, 720, 780, 800, 810, 830, 840, 850, 860, 870, 880],
        fill: true,
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#111",
        titleColor: "#fff",
        bodyColor: "#fff",
        callbacks: {
          label: (context) => ` ${context.dataset.label}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#777",
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 500,
        max: 1000,
        ticks: {
          stepSize: 100,
          color: "#777",
        },
        grid: {
          color: "#eee",
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Linechart;
