
//donut chart

// pass in some random data to make donut chart work
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DonutChart = ({data}) => {
    //DONUT TIME

    return(
        <Doughnut data={data} />
    )
}

export default DonutChart