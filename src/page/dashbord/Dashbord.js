import React from 'react'
import CardBody from '../../components/card/CardBody'
import CardCalendar from '../../components/card/CardCalendar'
import CardAppointment from '../../components/card/CardAppointment'
import CardLineChart from '../../components/chart/CardLineChart'




const Dashbord = () => {

    return (
        <div className='dashbord '>
            <div className='2xl:-mt-14 -mt-10  '>
                < div className='flex-1 flex-col ' >
                    <CardBody />
                    <div className='md:flex  gap-3 gap-x-7 grid  mx-2  '>
                        <CardLineChart />
                        <CardCalendar />
                    </div>
                    <CardAppointment />
                </div >
            </div>
        </div>
    )
}

export default Dashbord