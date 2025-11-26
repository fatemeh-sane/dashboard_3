import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";

const ChartOne= () => {

    const state = {
        series: [{
            name: 'ارائه نهایی شده',
            data: [44, 55, 41, 67, 22, 43, 21, 49, 21, 14, 15, 13]
        },  {
            name: 'ارائه نهایی نشده',
            data: [11, 17, 15, 15, 21, 14, 15, 13, 21, 14, 15, 13]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%'
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            xaxis: {
                categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'ابان', 'اذر','دی', 'بهمن', 'اسفند'],

            },
            fill: {
                opacity: 1
            },
            colors: ['#D7ACD4','#8F649E'],

            legend: {
                position: 'top',
                offsetX: 0,
                offsetY: 0
            },
        },
    }
    return <div>

        <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height="300"
        />
    </div>
}


export default ChartOne