import React, { useContext } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import bin from '../../assets/image/bin.png'
import GlobalContext from '../../contexts/createContext/context';


const DetailViewImageModal = ({ invoiceImage, idUpdate, onClose }) => {

    const { deleteSurgeryImage } = useContext(GlobalContext)
    // console.log(invoiceImage);
    const deleteHandller = id => {
        deleteSurgeryImage(id)
        console.log(id);
        // setinvoiceImage(invoiceImage.image.filter(i => i.sick_surgery_invoice_image_id !== idUpdate));
    }

    const slidLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const slidRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;

    }

    return (
        <div>


            {invoiceImage.sick_surgery_id && invoiceImage.sick_surgery_id === idUpdate &&
                <div className='flex justify-center items-center'>

                    <MdChevronLeft className='opacity-50  cursor-pointer hover:opacity-100' onClick={slidLeft} size={40} />
                    <div className='flex flex-col'>
                        <div className=' flex  justify-center w-[1000px] items-center bg-white  rounded-md '>
                            {/** amsh bo drusbuni actiony scrollakaw u hidn scroll ka ba karde */}
                            <div id='slider' key={invoiceImage.sick_surgery_id + 1} className='flex overflow-x-scroll scrollbar-hide scroll whitespace-nowrap  scroll-smooth ' >
                                {invoiceImage.image && invoiceImage.image.map((img, index) => {
                                    //{/* am div xwarawa nabe scrollka durs nabe hamu nwenakan ba statiki yatawa */ }
                                    return (
                                        <div key={img.sick_surgery_invoice_image_id + 1} className='flex flex-col' >
                                            <img onClick={() => { deleteHandller(img.sick_surgery_invoice_image_id); onClose(false) }} src={bin} className='hover:bg-red-100  w-5 place-self-center ml-4' alt='delete icon' />
                                            <div key={img.sick_surgery_invoice_image_id} className='w-[200px]' >
                                                <img className='object-cover p-3 w-[200px] h-[200px]' src={'https://freepaidaccount.com/clinic/api/uploads/' + img.sick_surgery_invoice_image_name} alt="view" />
                                            </div>
                                        </div>
                                    )


                                })
                                }
                            </div>

                        </div>
                    </div>
                    {/** am div xwarawa nabe wenakan hamui nahenetawa inja width kai lera diyari akai hi image modalaka */}

                    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slidRight} size={40} />

                </div>

            }
        </div >
    )
}

export default DetailViewImageModal