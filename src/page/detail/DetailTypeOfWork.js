import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context'
import bin from '../../assets/image/bin.png'
import DetailImage from './DetailImage';


const DetailTypeOfWork = ({ sick_surgery, clickAddWork, setsicksurgerys, file, setFile }) => {
    const { surgeryType } = useContext(GlobalContext);

    const sid =surgeryType && surgeryType.map((d) => d.surgery_type_id);
    const sn =surgeryType && surgeryType.map((d) => d.surgery_type_name);

    const deleteHandller = id => setsicksurgerys(sick_surgery && sick_surgery.filter(i => i.sick_surgery_id !== id));


    return (
        <div className={` flex flex-col my-7 duration-500`}>
            <div className='flex justify-between items-center'>
                <p className='text-xl my-4 border-b-2 border-sky-300 w-fit'>Type of Work </p>
                <button type='submit'
                    onClick={clickAddWork}
                    className='w-fit hover:text-white shadow-sm  shadow-gray-300 border text-sky-400 border-sky-300 h-fit p-1.5 px-3 rounded-md hover:bg-sky-300'>
                    Save
                </button>
            </div>
            <table className=' overflow-hidden bg-white text-sm rounded-md shadow-md shadow-black/5 text-left text-gray-500 '>
                <thead className=" shadow-sm text-md text-white border-2 border-cyan-200 uppercase rounded-t-xl bg-cyan-500 ">
                    <tr className=''>
                        <th scope="col" className="pl-1.5 w-72">work Type</th>
                        <th scope="col" className="pl-1.5 w-48">Price</th>
                        <th scope="col" className="pl-1.5 ">Note</th>
                        <th scope="col" className="pl-1.5 ">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {sick_surgery && sick_surgery.map((item, index) => {
                        return (
                            <tr key={index + 1}
                                className="text-left hover:bg-sky-50" >
                                <td className="pl-2 py-4">{sn[sid.indexOf(`${item.surgery_type_id}`)]}</td>
                                <td className="pl-2 py-4">{item.surgery_type_price}</td>
                                <td className="pl-2 py-4">{item.sick_surgery_invoice_note}</td>
                                <td onClick={() => deleteHandller(item.sick_surgery_id)} className="pl-2 py-4 cursor-pointer">
                                    <img src={bin} className='hover:bg-red-100  w-5 place-self-center ml-4' alt='delete icon' />
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            <DetailImage file={file} setFile={setFile} />

        </div>
    )
}

export default DetailTypeOfWork