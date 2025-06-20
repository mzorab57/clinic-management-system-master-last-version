import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import GlobalContext from '../../contexts/createContext/context'

const DetailBodyTop = () => {

    const { sickList } = useContext(GlobalContext);
    const location = useLocation();

    return (
        <div className='rounded-md shadow-sm p-5 bg-white'>

            {sickList.map(sick => {
                return (
                    <div key={sick.sick_id}>
                        {
                            sick.sick_id === location.state &&
                            <div className='grid  grid-cols-2 md:grid-cols-3'>
                                <p className='font-bold text-xl  text-gray-500'>Name : <span className='text-xl font-normal text-cyan-500 '>{sick.sick_name}</span></p>
                                <p className='font-bold text-xl text-gray-500  place-self-start '>Age : <span className='text-xl font-normal text-cyan-500'>{sick.sick_age}</span></p>
                                <p className='font-bold text-xl text-gray-500  '>Gender : <span className='text-xl font-normal text-cyan-500'>{sick.sick_gender}</span> </p>
                                <p className='font-bold text-xl  text-gray-500 '>Date : <span className='text-xl font-normal text-cyan-500 '>{sick.sick_date}</span> </p>
                                <p className='font-bold text-xl  text-gray-500  '>Phone : <span className='text-xl font-normal text-cyan-500'>{sick.sick_phone}</span> </p>

                            </div>


                        }
                    </div>
                )
            })}
        </div>



    )
}

export default DetailBodyTop