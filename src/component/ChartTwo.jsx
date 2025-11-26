import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";

  const ChartOne= () => {

     const state = {

         series: [{
             name: "Desktops",
             data: [10, 555, 35, 51, 85, 62, 450, 91, 148]
         }],
         options: {
             chart: {
                 height: 350,
                 type: 'line',
                 zoom: {
                     enabled: false
                 }
             },
             dataLabels: {
                 enabled: false
             },
             stroke: {
                 curve: 'straight'
             },
             colors: ['#7E518D'],


             grid: {
                 row: {
                     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                     opacity: 0.5
                 },
             },
             xaxis: {
                 categories: ['۲۰۲۰', '۲۰۲۱', '۲۰۲۲', '۲۰۲۳', '۲۰۲۱', '۲۰۲۱', '۲۰۲۱'],

             }
         },


     };


     return <div>

         <Chart
             options={state.options}
             series={state.series}
             type="line"
             height="280"
         />
     </div> }
export default ChartOne