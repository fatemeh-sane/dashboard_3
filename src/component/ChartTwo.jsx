import React from "react";
import Chart from "react-apexcharts";

const ChartTwo = () => {
  const state = {
    series: [
      {
        name: "ارائه نهایی شده",
        data: [44, 55, 41, 67, 22, 43, 21, 49, 21, 14, 15, 13],
      },
      {
        name: "ارائه نهایی نشده",
        data: [11, 17, 15, 15, 21, 14, 15, 13, 21, 14, 15, 13],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "100%",
        stacked: true,
        stackType: "100%",
        toolbar: { show: false },
      },
      xaxis: {
        categories: [
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ],
        labels: {
          rotate: -45,
          style: { fontSize: "10px" },
        },
      },
      yaxis: {
        labels: { style: { fontSize: "11px" } },
      },
      fill: { opacity: 1 },
      colors: ["#D7ACD4", "#8F649E"],
      legend: {
        position: "top",
        offsetX: 0,
        offsetY: 0,
        fontSize: "12px",
      },
      responsive: [
        {
          breakpoint: 640,
          options: {
            chart: { height: 220 },
            xaxis: {
              labels: { rotate: -60, style: { fontSize: "9px" } },
            },
            legend: { fontSize: "11px" },
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
        type="bar"
        height={300}
      />
    </div>
  );
};

export default ChartTwo;
