import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import GlobalContext from "../../contexts/createContext/context";
import DetailTypeOfWork from './DetailTypeOfWork';
import uuid from "react-uuid";
import { VscAdd } from "react-icons/vsc";




const DetailBodyInput = () => {

    const location = useLocation();
    const { surgeryType, addSickSurgery } = useContext(GlobalContext)

    const [surgery_type_id, set_surgery_type_id] = useState(0)
    const [surgery_type_name, set_surgery_type_name] = useState("")
    const [surgery_type_price, set_surgery_type_price] = useState()
    const [sick_surgery_invoice_note, set_sick_surgery_invoice_note] = useState("");
    const [show, set_show] = useState(false);
    const [showError, set_showError] = useState(false);


    const [file, setFile] = useState([]);

    // id doctor
    // let doctor_id = doctorList.map(doctor => doctor.doctor_id === location.state.doctor_id && doctor.doctor_id).filter(f => f !== false)

    // bo bashy detail katek aw dctoray login krdwa esh bo naxoshek 
    const user = localStorage.getItem("data");
  let token = user && JSON.parse(user).token;
 

    //sick_id
    let sick_id = location.state;
    
    // to day
    let sick_surgery_date = (new Date().toISOString().slice(0, 10));

    // TEMP bo war grtni type of worky taza
    const [sick_surgery, setsicksurgerys] = useState([]);

    const onSearch = (search, id) => {
        set_surgery_type_name(search)
        surgeryType && surgeryType.map((item) => {
            if (item.surgery_type_id === id) {
                set_surgery_type_price(item.surgery_type_price)
            } return null;
        })
    }

    // uuid for delte surgery type in table add new work
    const onClick = (e) => {
        e.preventDefault();

        if (surgery_type_id === 0) {
            set_showError(true)

        } else {
            setsicksurgerys([...sick_surgery, { sick_surgery_id: uuid(), surgery_type_id, surgery_type_price, sick_surgery_invoice_note }]);
        }

        set_surgery_type_id(0);
        set_surgery_type_name('');
        set_surgery_type_price('');
        set_sick_surgery_invoice_note('');
    }


    const clickAddWork = (e) => {
        e.preventDefault();


        let formData = new FormData();
        let dfile = file;
        if (!(file.length === 0)) {
            dfile = file.target.files;
        }
    
        for (let i = 0; i < dfile.length; i++) {
            formData.append('file[]', dfile[i]);
        }

       
       
        formData.append('doctor_id', token);
        formData.append('sick_id', sick_id);
        formData.append('sick_surgery_date', sick_surgery_date);
        formData.append('items', JSON.stringify(sick_surgery));

        addSickSurgery(formData);

        // bo away la naw table typeOfWork datay peshutr pshan naiatawa
        setsicksurgerys([]);
        // bo away la sar typeOfWork  namene
        set_show(false);


    }


    return (
        <div className='bg-white p-5 rounded-md my-2'>

            <form onSubmit={onClick} >

                <div className="mt-8 md:flex grid md:justify-between md:gap-3 gap-y-24 ">
                    <div className='relative w-full '>
                        <div className=' flex flex-col w-full border-b rounded-md  absolute'>
                            <label className='text-gray-700 mb-2  2xl:text-xl'>Working Type</label>
                            <input type="text" required name='surgery_type_name' placeholder='Working Type Search' value={surgery_type_name || ''}
                                onChange={(e) => set_surgery_type_name(e.target.value)}
                                autoComplete="off"
                                onFocus={() => set_showError(false)}
                                className={` ${surgery_type_name ? 'bg-sky-100' : 'bg-slate-50'} ${showError && ' border border-red-400 bg-red-50'} 2xl:placeholder:text-lg  2xl:text-xl  w-full  text-base focus:ring-1 focus:ring-sky-500 pl-2 focus:outline-none border border-gray-300 p-2 2xl:p-3 rounded shadow-sm shadow-black/10 `} />

                            {surgeryType && surgeryType.filter(itme => {
                                const search = surgery_type_name.toLowerCase();
                                const surgeryName = itme.surgery_type_name.toLowerCase();
                                return search && surgeryName.startsWith(search) && surgeryName !== search
                            })
                                // limit aka tanha 3 dana law naaway search bo aaki pshani ada
                                .slice(0, 5)
                                .map((itme) => {
                                    return <ul key={itme.surgery_type_id} className='cursor-pointer bg-white hover:bg-sky-500  hover:text-white'
                                        onClick={() => { onSearch(itme.surgery_type_name, itme.surgery_type_id); set_surgery_type_id(itme.surgery_type_id) }} >
                                        <li className='border-r border-l pl-2'>{itme.surgery_type_name}</li>
                                    </ul>
                                })}

                        </div>
                    </div>

                    {/** price input */}
                    <div className='flex flex-col w-full'>
                        <label className='text-gray-700 mb-1 2xl:text-xl'>Price</label>
                        {/** value = {surgery_type_price || ''} aw or agar da naney awa alle auncontrolled wata ama sarata null yan undefined boia aw || bo da aney ka te batallish be */}
                        <input type="number" name='surgery_type_price' required placeholder='0.00' value={surgery_type_price || ''}
                            onChange={(e) => set_surgery_type_price(e.target.value)}
                            className={`focus:ring-1 ${surgery_type_price ? 'bg-sky-100 ' : 'bg-slate-50 '} 2xl:placeholder:text-lg text-base 2xl:text-xl focus:outline-none border pl-2 p-2  mt-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`} />
                    </div>

                    {/** button  Add New Work for laptop and desktop*/}
                    <div className=' pt-7 2xl:text-xl place-self-end hidden md:flex'>
                        <button
                            type='submit'
                            onClick={() => { surgery_type_id && set_show(true) }}
                            className={` hover:text-white w-36 2xl:text-lg shadow-sm flex items-center shadow-gray-300 border text-sky-400 border-sky-300  p-2 2xl:p-3 px-3 rounded-md hover:bg-sky-300`}>
                            <VscAdd className='mr-1' /> New Work
                        </button>
                    </div>
                </div>

                {/** description input*/}
                <div className='flex flex-col w-full mt-2 2xl:text-xl'>
                    <label className='text-gray-700 mb-1'>Description</label>
                    <textarea placeholder='Description' cols="50" rows="4"
                        value={sick_surgery_invoice_note}
                        onChange={(e) => set_sick_surgery_invoice_note(e.target.value)}
                        className={` ${sick_surgery_invoice_note ? 'bg-sky-100' : 'bg-slate-50 '} focus:ring-1 2xl:text-xl focus:outline-none border p-3 2xl:p-3 flex-wrap rounded-md shadow-sm shadow-black/10`} >
                    </textarea>
                </div>

                {/** button  Add New Work for mobile*/}
                <div className=' pt-7 2xl:text-xl  md:hidden    '>
                        <button
                            type='submit'
                            onClick={() => { surgery_type_id && set_show(true) }}
                            className={` hover:text-white  w-full 2xl:text-lg shadow-sm flex justify-center shadow-gray-300 border text-sky-400 border-sky-300  p-2 2xl:p-3 px-3 rounded-md hover:bg-sky-300`}>
                            <VscAdd className='mr-1' /> New Work
                        </button>
                    </div>



            </form>

            {/** add new work  */}
            {
                show &&  sick_surgery.length > 0 ?
                    <DetailTypeOfWork sick_surgery={sick_surgery} clickAddWork={clickAddWork} setsicksurgerys={setsicksurgerys} file={file} setFile={setFile} />
                    : null

            }




        </div>
    )
}

export default DetailBodyInput