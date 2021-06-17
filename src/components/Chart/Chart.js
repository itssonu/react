import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const values = props.dataPoints.map((data) => {
    return data.value;
  });
  const maxValue = Math.max(...values);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          id={data.label}
          label={data.label}
          value={data.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
