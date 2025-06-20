import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context'


const SickDetailBodyTop = ({ sickDetail }) => {

    const { sickList } = useContext(GlobalContext);



    return (

        <div className='rounded-md shadow-sm p-5'>
            {sickList.map(sick => {
                return (
                    <div key={sick.sick_id}>
                        {
                            sick.sick_id === sickDetail.sick_id &&
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
            })}



        </div>



    )
}

export default SickDetailBodyTop