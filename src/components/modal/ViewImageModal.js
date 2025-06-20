import React, { useContext } from 'react'
import GlobalContext from '../../contexts/createContext/context';
import { useLocation } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Modal from '../ui/modal/Modal';

const ViewImageModal = ({ isVisible, setIsVisible }) => {
    const { sickList } = useContext(GlobalContext);
    const location = useLocation();

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

        <Modal>
            <button className='text-white text-xl place-self-end pr-[15rem] w-fit ' onClick={() => setIsVisible(false)}> X </button>
            <div className='flex  items-center overflow-x-scroll'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slidLeft} size={40} />
                <div id='slider' className=' bg-white rounded-md flex h-[500px]  w-[1000px] overflow-x-scroll scroll  scroll-smooth  scrollbar-hide whitespace-nowrap'>
                    {
                        sickList && sickList.map(sick => {
                            return (

                                <div key={sick.sick_id} className='flex' >
                                    {/** am classa sarawa flex chun scrolla ka leraya drus abe agar lai bay esh naka */}
                                    {/** am classa xwaraa flex chun hamui aka ba row */}
                                    {sick.sick_id === location.state ? (
                                        <div key={sick.sick_id} className='flex'>
                                            {sick.sick_invoice && sick.sick_invoice.map((invoice, index) => {

                                                return (
                                                    <div key={sick.sick_id + index + 1} className=' w-[300px] '>
                                                        {invoice.image && invoice.image.map((img, index) => {

                                                            return (

                                                                <div key={img.sick_surgery_invoice_image_id} className=' flex w-full h-full' >
                                                                    <img className=' p-3 pl-5 ' src={'https://freepaidaccount.com/clinic/api/uploads/' + img.sick_surgery_invoice_image_name} alt="view" />
                                                                </div>
                                                            )

                                                        })}
                                                    </div>


                                                )
                                            })}
                                        </div>

                                    ) : null}

                                </div>
                            )
                        })
                    }


                </div>

                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slidRight} size={40} />
            </div>


        </Modal>


    )
}

export default ViewImageModal

