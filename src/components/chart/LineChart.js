import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js/auto";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const LineChart = ({ chartData }) => {

    const options = {
        plugins: {

            legend: {
                display: true, // To display the legend
                position: 'top', // Change the legend position (top, bottom, left, right)
                align: 'center',
                labels: {
                    padding: 15, // The padding between legend labels and the color box
                    boxWidth: 70,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    // color: 'blue', // Change the legend label text color
                    font: {
                        size: 12, // Change the legend label font size
                        // family: 'Arial', // Change the legend label font family
                    },
                },
            },
        },

        scales: {
            y: {
                type: 'linear',
                position: 'left',
                // reverse: true,
                min: 40,
                beginAtZero: true,
                ticks: {
                    display: true,           // Whether to display tick marks on the X axis

                },

                grid: {
                    display: false,
                    drawOnChartArea: false,
                    drawBorder: false,
                    border: false

                }

            },
            x: {
                type: 'linear',
                position: 'bottom',
                // reverse: true,


            },
        }
    }

    return (
        <div className="chart  shrink-0 sm:pt-5 sm:h-full flex flex-1 justify-start rounded-2xl   bg-white/80  shadow-sm shadow-gray-200  p-3" >
            <Line className="  " data={chartData} options={options} height={0} width={0} />
        </div >
    )
}

export default LineChart