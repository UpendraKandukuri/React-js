import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = ({ percentage, color }) => {
  return (
    <div className="w-28 h-28 relative">
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-23 h-23 rounded-full bg-white shadow flex items-center justify-center">
        <span className="text-black font-bold text-lg">{percentage}%</span>
      </div>

      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={15}
        styles={buildStyles({
          pathColor: color || "#4f46e5",
          trailColor: "#e5e7eb",
        })}
      />
    </div>
  );
};

export default CircularBar;
