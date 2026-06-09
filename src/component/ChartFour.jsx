import React from "react";
import Chart from "react-apexcharts";

const DonutChart = ({ series, colors, labels }) => {
  const state = {
    series: series || [33, 33, 34],
    options: {
      chart: {
        type: "donut",
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: colors || ["#D7ACD4", "rgba(130,179,212,0.4)", "#8F649E"],
      labels: labels || ["series-1", "series-2", "series-3"],
      legend: {
        position: "left",
        offsetY: 0,
        fontSize: "12px",
        markers: { width: 10, height: 10 },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { height: 180 },
            legend: {
              position: "bottom",
              fontSize: "11px",
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: { height: 160 },
            legend: {
              position: "left",
              fontSize: "11px",
            },
          },
        },
      ],
      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
    },
  };

  return (
    <div className="w-full">
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        height={160}
      />
    </div>
  );
};

export default DonutChart;
