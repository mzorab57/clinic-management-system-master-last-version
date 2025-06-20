import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context';

const CardAppointment = () => {
    const { appointmentListDashbord } = useContext(GlobalContext);


    return (
        <div className='overflow-auto mx-2 shadow-md bg-white p-2 border-t border-t-gray-100  shadow-gray-200 mt-2  rounded-t-3xl '>

            <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs rounded-2xl  text-gray-900 uppercase ">
                    <tr>
                        <th scope="col" className="md:px-6 px-2 md:py-3 py-1">ID </th>
                        <th scope="col" className="md:px-6 px-2 md:py-3 py-1">Name</th>
                        <th scope="col" className="md:px-6 px-2 md:py-3 py-1">Dr.name </th>
                        <th scope="col" className="md:px-6 px-2 md:py-3 py-1">Date</th>
                        <th scope="col" className="md:px-6 px-2 md:py-3 py-1">Time </th>
                        <th scope="col" className="md:px-6 px-2 md:py-3 py-1">Note </th>
                    </tr>
                </thead>

                <tbody className='flex-1'>
                    {appointmentListDashbord && appointmentListDashbord.map((appointment, index) => {
                        return <tr
                            key={index}

                            className=" cursor-pointer select-none hover:bg-gray-50 duration-100 ">
                            <th scope='row' className="md:px-5 px-1 md:py-4 py-1">&nbsp;&nbsp;{index + 1}</th>
                            <td className="md:px-6 px-2 md:py-4 py-1 ">{appointment.sick_name}</td>
                            <td className="md:px-6 px-2 md:py-4 py-1 ">{appointment.doctor_name}</td>
                            <td className="md:px-6 px-2 md:py-4 py-1 ">{appointment.appointment_date}</td>
                            <td className="md:px-6 px-2 md:py-4 py-1 ">{appointment.appointment_time}</td>
                            <td className="md:px-6 px-2 md:py-4 py-1 ">{appointment.appointment_note}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default CardAppointment