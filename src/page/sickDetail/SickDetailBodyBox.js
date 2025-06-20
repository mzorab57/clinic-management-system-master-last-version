import React, { useState } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import { useContext } from 'react';
import DetailViewImage from './SickDetailViewImage';
import money from "../../assets/image/money.png";
import gallery from "../../assets/image/image-gallery (1).png";
//import SickComponentToPrint from './SickComponentToPrint';
import calendar from "../../assets/image/calendar.png";
//import { useReactToPrint } from 'react-to-print';

// lam basha bangi page kani detail krabw gorim ba sickdetail 


function SickDetailBodyBox({ sickDetail }) {
    const { surgeryType, sickList } = useContext(GlobalContext);
    const [isVisible, setIsVisible] = useState(false);
    const [id, setId] = useState(0);

    const sid = surgeryType.map((d) => d.surgery_type_id)
    const sn = surgeryType.map((d) => d.surgery_type_name)

    // const componentRef = useRef()
    // const handlePrint = useReactToPrint({
    //     content: () => componentRef.current,
    // });



    return (
        <div className=''>

            {/** sickSurgery && la gall  item.sick_visit &&  am dwana zor grngn bo away agar yakekian la katy map krdinish propertykay nabu nalle map reading undefined*/}
            {sickList && sickList.map(sick => {
                return (
                    <div key={sick.sick_id} >
                        {
                            sick.sick_id && sick.sick_id === sickDetail.sick_id &&
                            <div className='flex justify-between my-4'>
                                {/** invisible bo away dyar nabe absolute bo awaia design tek nache  */}
                                <div className='absolute invisible bg-red-300'>
                                    {/* <SickComponentToPrint sickDetail={sickDetail} props={sickList} ref={componentRef} /> */}
                                </div>
                                <p className='text-xl  border-b-2 border-sky-300 w-fit'>History of Work </p>
                                <button
                                    //   onClick={() => { handlePrint() }}
                                    className='hover:text-white shadow-sm shadow-gray-300 border text-sky-400 border-sky-300 h-fit p-1.5 px-7 tracking-wider rounded-md hover:bg-sky-300'>
                                    Print History
                                </button>
                            </div>
                        }

                    </div>
                )
            })}

            {sickList && sickList.map(sick => {
                return (
                    <div key={sick.sick_id} className=' '>
                        {sick.sick_id === sickDetail.sick_id ? (
                            <div className='box flex flex-col rounded-3xl shadow-black/5 bg-white'>

                                {/* date div */}
                                {sick.sick_invoice && sick.sick_invoice.map((invoice, index) => {
                                    return (
                                        <div key={sick.sick_id + index + 1} className=' text-left flex  shadow-sm shadow-black/10 bg-gray-50/50 rounded-md mb-4 justify-between w-full p-2.5    text-gray-700 text-xl '>

                                            {/** div date u price */}
                                            <div className='flex flex-col justify-around border-r  relative  pl-2 w-[30%]'>
                                                <div className='flex items-center mb-2' >
                                                    <img src={calendar} alt='calendar' className='w-6 h-6 mr-3' />
                                                    <span className='text-lg font-normal '>{invoice.sick_surgery_date}</span>
                                                </div>
                                                {/** price div */}
                                                <div key={sick.sick_id + index + 2} className='flex  items-center'>

                                                    <img src={money} alt='money' className='w-6 h-6 mr-3' /><span className='text-lg font-normal '>
                                                        {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice
                                                            .map(data => data.surgery_type_price)
                                                            .reduce((a, c) => parseInt(a) + parseInt(c))
                                                        }
                                                    </span>
                                                </div>

                                            </div>

                                            {/** div surgery type u description */}
                                            <div className='text-start pl-2 w-full '>
                                                {invoice.sick_surgery_invoice && invoice.sick_surgery_invoice.map((data, index) => {
                                                    return (
                                                        <div key={sick.sick_id + index + 3} className='flex flex-col  m-2 '>
                                                            <div
                                                                className=' -tracking-tight  '>
                                                                <strong className='text-gray-600'>Surgery Tpye :</strong> <span className='text-base'> {sn[sid.indexOf(`${data.surgery_type_id}`)]}</span>
                                                                <br />
                                                                <span className='text-gray-600'>Description : </span> <span className='text-base'>{data.sick_surgery_invoice_note}</span>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            {/** image icon */}
                                            {/** setId bo awaya bzani kam box awe wenay aw box bo benetawa */}
                                            <div className=' cursor-pointer flex ' >

                                                <div className=' hover:bg-black/10 duration-200 rounded-lg h-fit p-0.5'>
                                                    <img src={gallery} alt='fahs' className='w-10 h-10  ' onClick={() => { setIsVisible(true); setId(invoice.sick_surgery_id) }} />
                                                </div>
                                                <DetailViewImage isVisible={isVisible} setIsVisible={setIsVisible} id={id} setId={setId} invoice={invoice} />
                                            </div>
                                        </div>
                                    )
                                })}


                                {/* <DetailViewImage isVisible={isVisible} setIsVisible={setIsVisible} /> */}
                            </div>
                        ) : null
                        }
                    </div>
                )
            })}






        </div>


    )
}

export default SickDetailBodyBox