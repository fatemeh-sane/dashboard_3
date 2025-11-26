import ApexCharts from 'apexcharts'
import React, { Component } from "react";
import Chart from "react-apexcharts";

const ChartOne= () => {

    const state = {

        series: [33, 33, 33],
        options: {
            chart: {
                position: 'left',

                width: 380,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],            colors: ['#D7ACD4','rgba(130,179,212,0.4)','#8F649E',],

            legend: {
                position: 'left',
                offsetY: 0,
                height: 230,
            }
        },


    };


    return <div>

        <Chart
            options={state.options}
            series={state.series}
            type="donut"
            height="150"
        />
    </div>
}


export default ChartOne