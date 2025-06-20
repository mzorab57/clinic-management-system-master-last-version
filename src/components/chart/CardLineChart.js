import React, { useState } from 'react'
import LineChart from './LineChart';


const CardOne = () => {



    const [userData, setUserData] = useState({
        labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [
            {
                label: "Male",
                data: [50, 100, 80, 95, 120, 125, 135, 55],
                backgroundColor: "#C9E1FD",
                tension: 0.4,
                borderColor: "#156CDD",
                pointStyle: 'circle',
                borderJoinStyle: "round",
                pointBorderColor: "#156CDD",
                pointHoverBorderColor: "#156CDD",
                pointHoverBackgroundColor: "white",
                hoverBorderWidth: 2,
                pointHoverRadius: 5,
                fill: true,


            },
            {
                label: "Female",
                data: [100, 160, 120, 130, 145, 165, 175, 85],
                backgroundColor: "#E7F6F6",
                tension: 0.4,
                borderColor: "#62C0BC",
                borderJoinStyle: "round",
                pointBorderColor: "#62C0BC",
                pointHoverBorderColor: "#62C0BC",
                pointHoverBackgroundColor: "white",
                hoverBorderWidth: 2,
                pointHoverRadius: 5,
                pointStyle: 'circle',      // Marker style for data points (options: 'circle', 'cross', 'crossRot', 'dash', 'line', 'rect', 'rectRounded', 'rectRot', 'star', 'triangle')
                fill: true,

            },


        ]

    });

    return (
        <div className='mt-3  md:w-2/3  sm:h-[18rem] flex-1  '>
            <LineChart chartData={userData} setUserData={setUserData} />
        </div>

    )
}

export default CardOne