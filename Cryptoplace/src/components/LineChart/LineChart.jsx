import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.forEach((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  const options = {
    backgroundColor: {
      fill: "none",
      stroke: "none",
      gradient: {
        color1: "#4a148c",
        color2: "#0d47a1",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
      },
    },

    chartArea: { left: "10%", top: "10%", width: "80%", height: "70%" },

    colors: ["#ffab00"],

    hAxis: {
      textStyle: { color: "#ffffff" },
      gridlines: { color: "rgba(255, 255, 255, 0.2)" },
    },

    vAxis: {
      textStyle: { color: "#ffffff" },
      gridlines: { color: "rgba(255, 255, 255, 0.2)" },
    },

    legend: { textStyle: { color: "#ffffff" } },
  };

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;
