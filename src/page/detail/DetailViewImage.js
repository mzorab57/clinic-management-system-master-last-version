import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const DetailViewImage = ({ isVisible, setIsVisible, id, invoice }) => {

    const slidLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const slidRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;

    }

    if (!isVisible) return null;
    return (
        <div>
            {isVisible && invoice.sick_surgery_id === id &&

                <div className=' fixed z-20   inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex  justify-center items-center'>

                    <MdChevronLeft className='opacity-50  cursor-pointer hover:opacity-100' onClick={slidLeft} size={40} />
                    <div className='flex flex-col'>
                        <button className='place-self-end  text-xl text-black  w-fit ' onClick={() => setIsVisible(false)}> X </button>
                        <div className=' flex  justify-center w-[800px] items-center bg-white  rounded-md '>
                            {/** amsh bo drusbuni actiony scrollakaw u hidn scroll ka ba karde */}
                            <div id='slider' key={invoice.sick_surgery_id + 1} className='flex overflow-x-scroll scrollbar-hide scroll whitespace-nowrap  scroll-smooth ' >
                                {invoice.image && invoice.image.map(img => {
                                    //   {/* am div xwarawa nabe scrollka durs nabe hamu nwenakan ba statiki yatawa */ }
                                    return (
                                        <div key={img.sick_surgery_invoice_image_id + 1} className='flex' >
                                            <div key={img.sick_surgery_invoice_image_id} className='w-[400px]' >
                                                <img className='object-cover p-3 w-[400px] h-[400px]' src={'https://clinic.muno-seo.site/api/uploads/' + img.sick_surgery_invoice_image_name} alt="view" />
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

export default DetailViewImage