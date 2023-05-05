// src/components/DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


const DonutChart = ({ data }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    return <Doughnut data={data} />;
};

export default DonutChart;
