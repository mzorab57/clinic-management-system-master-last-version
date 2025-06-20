import React from 'react'
import tooth from "../../assets/image/teeth (2).png";


const SickDetailHeader = ({ sickDetail }) => {

    return (
        <div className='relative grid justify-center mt-3 border-b-2  pb-2 '>
            <div className=' w-fit flex flex-col items-center'>
                {/** image  */}
                <img src={tooth} className="p-0.5 w-28" alt='tooth img' />
                {/** clinic name  */}
                <div>
                    <i className='text-2xl  font-serif p-2 px-2  w-full rounded-full'>{sickDetail.doctor_name}</i>
                </div>
            </div>
        </div>
    )
}

export default SickDetailHeader