import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import bin from '../../assets/image/bin.png'
import DetailImageIputModal from './DetailImageIputModal';

const DetailTypeOfWorkModal = ({ file, setFile, invoice, setinvoice }) => {

    const { surgeryType } = useContext(GlobalContext);


    const sid = surgeryType.map((d) => d.surgery_type_id);
    const sn = surgeryType.map((d) => d.surgery_type_name);

    //  console.log(invoice);
    const deleteHandller = id => setinvoice(invoice.filter(i => i.sick_surgery_invoice_id !== id));


    return (
        <div className={`flex flex-col my-7 duration-500 `}>
            <div className='flex justify-between items-center'>
                <p className='text-xl my-4 border-b-2 border-sky-300 w-fit'>Type of Work </p>

            </div>
            <table className=' overflow-hidden bg-white text-sm rounded-md shadow-md shadow-black/5 text-left text-gray-500 '>
                <thead className=" shadow-sm text-md text-white border-2 border-cyan-200 uppercase rounded-t-xl bg-cyan-500 ">
                    <tr className=''>
                        <th scope="col" className="pl-1.5 w-72">Surgery Type</th>
                        <th scope="col" className="pl-1.5 w-48">Price</th>
                        <th scope="col" className="pl-1.5 ">Not</th>
                        <th scope="col" className="pl-1.5 ">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {invoice && invoice.map((item, index) => {
                        return (
                            <tr key={index + 1}
                                className="text-left hover:bg-sky-50" >
                                <td className="pl-2 py-4">{sn[sid.indexOf(`${item.surgery_type_id}`)]}</td>
                                <td className="pl-2 py-4">{item.surgery_type_price}</td>
                                <td className="pl-2 py-4">{item.sick_surgery_invoice_note}</td>
                                <td onClick={() => deleteHandller(item.sick_surgery_invoice_id)} className="pl-2 py-4 cursor-pointer">
                                    <img src={bin} className='hover:bg-red-100  w-5 place-self-center ml-4' alt='delete icon' />
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>

            <DetailImageIputModal file={file} setFile={setFile} />

        </div>
    )
}

export default DetailTypeOfWorkModal