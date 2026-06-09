import React from "react";
import Chart from "react-apexcharts";

const ChartOne = () => {
  const state = {
    series: [
      {
        name: "Desktops",
        data: [10, 555, 35, 51, 85, 62, 450, 91, 148],
      },
    ],
    options: {
      chart: {
        height: "100%",
        type: "line",
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      stroke: { curve: "straight" },
      colors: ["#7E518D"],
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ["۲۰۲۰", "۲۰۲۱", "۲۰۲۲", "۲۰۲۳", "۲۰۲۴", "۲۰۲۵", "۲۰۲۶"],
        labels: {
          style: { fontSize: "11px" },
        },
      },
      yaxis: {
        labels: {
          style: { fontSize: "11px" },
        },
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: { height: 220 },
            xaxis: {
              labels: { style: { fontSize: "10px" } },
            },
          },
        },
      ],
    },
  };

  return (
    <div className="w-full">
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        height={280}
      />
    </div>
  );
};

export default ChartOne;
