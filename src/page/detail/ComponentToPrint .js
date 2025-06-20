import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import GlobalContext from '../../contexts/createContext/context';
import calendar from "../../assets/image/calendar.png";
import money from "../../assets/image/money.png";
import tooth from "../../assets/image/teeth (2).png";
import './onprint.css'

const ComponentToPrint = React.forwardRef(({ props }, ref) => {

    const { surgeryType, doctorList } = useContext(GlobalContext)

    const location = useLocation();


    // bo dar kdni nawi surgery tpe
    const sid = surgeryType.map((d) => d.surgery_type_id);
    const sn = surgeryType.map((d) => d.surgery_type_name);
    // bo dar kdni nawi doctor
    const did = doctorList.map((d) => d.doctor_id);
    const dn = doctorList.map((d) => d.doctor_name);

    return (
        <div ref={ref} className='p-5 onprint' >
            {/** header print */}
            <div className='relative grid justify-center mt-3 border-b-2  pb-2 '>
                <div className=' w-fit flex flex-col items-center'>
                    {/** image  */}
                    <img src={tooth} className="p-0.5 w-28" alt='tooth img' />
                    {/** clinic name  */}
                    {props.map(sick => {
                        return (
                            <div key={sick.sick_id} className=''>
                                {sick.sick_id === location.state &&
                                    <div className=''>
                                        <i className='text-2xl  font-serif p-2 px-2  w-full rounded-full'>{dn[did.indexOf(`${sick.doctor_id}`)]}</i>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>




            {/** sick information print */}
            {props.map(sick => {
                return (
                    <div key={sick.sick_id} className='mb-10 mt-4'>
                        {
                            sick.sick_id === location.state &&
                            <div className='grid grid-cols-3'>

                                <p className='font-bold text-xl  text-gray-500'>Name : <span className='text-xl font-normal text-cyan-500 '>{sick.sick_name}</span></p>
                                <p className='font-bold text-xl text-gray-500  place-self-start ml-10'>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;<span className='text-xl font-normal text-cyan-500'>{sick.sick_age}</span></p>
                                <p className='font-bold text-xl text-gray-500 pl-5 ml-10'>Gender : <span className='text-xl font-normal text-cyan-500'>{sick.sick_gender}</span> </p>
                                <p className='font-bold text-xl  text-gray-500 mt-3'>Date &nbsp;&nbsp;&nbsp;: <span className='text-xl font-normal text-cyan-500 '>{sick.sick_date}</span> </p>
                                <p className='font-bold text-xl  text-gray-500 ml-10 mt-3'>Phone &nbsp;: &nbsp;&nbsp;<span className='text-xl font-normal text-cyan-500'>{sick.sick_phone}</span> </p>


                            </div>
                        }
                    </div>
                )
            })
            }

            {/** bashi box */}

            {props && props.map(sick => {
                return (
                    <div key={sick.sick_id} className=' '>
                        {sick.sick_id === location.state ? (
                            <div className='flex flex-col mb-4 pl-2 rounded-3xl   shadow-black/5 bg-white'>
                                <p className='text-xl  border-b-2 border-sky-300 w-fit mb-5'>History of Work </p>

                                {/* date div */}
                                {sick.sick_invoice && sick.sick_invoice.map((invoice, index) => {
                                    return (
                                        <div key={sick.sick_id + index + 1} className=' text-left flex  shadow-sm shadow-black/20 rounded-md mb-4 justify-between w-full  border-r-2   text-gray-700 text-xl '>

                                            {/** div date u price */}
                                            <div className='flex flex-col justify-around border-r  relative  pl-2 w-[30%]'>
                                                <div className='flex items-center' >
                                                    <img src={calendar} alt='calendar' className='w-5 h-5 mr-3' />
                                                    <span className='text-lg font-normal '>{invoice.sick_surgery_date}</span>
                                                </div>
                                                {/** price div */}
                                                <div key={sick.sick_id + index + 2} className='flex  items-center'>

                                                    <img src={money} alt='money' className='w-5 h-5 mr-3' /><span className='text-lg font-normal '>
                                                        {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice
                                                            .map(data => data.surgery_type_price)
                                                            .reduce((a, c) => parseInt(a) + parseInt(c))
                                                        }
                                                    </span>
                                                </div>

                                            </div>

                                            {/** div surgery type u description */}
                                            <div className='text-start pl-2 w-full'>
                                                {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice.map((data, index) => {
                                                    return (
                                                        <div key={sick.sick_id + index + 3} className='flex flex-col  m-2 '>
                                                            <div
                                                                className=' -tracking-tight  '>
                                                                <strong className='text-gray-600'>Working Tpye :</strong> <span className='text-base'> {sn[sid.indexOf(`${data.surgery_type_id}`)]}</span>
                                                                <br />
                                                                <span className='text-gray-600'>Description : </span> <span className='text-base'>{data.sick_surgery_invoice_note}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        ) : null
                        }
                    </div>
                )
            })}
        </div>


    )
})

export default ComponentToPrint 