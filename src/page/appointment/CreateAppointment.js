import React, { useContext, useState } from 'react'
import GlobalContext from '../../contexts/createContext/context';

const CreateAppointment = ({ ddate }) => {

    const { addAppointment, doctorList, sickList } = useContext(GlobalContext);


    /* const did = doctorList.map((d) => d.doctor_id)
    const dn = doctorList.map((d) => d.doctor_name)
    
    const sid = sickList.map((s) => s.sick_id)
    const sn = sickList.map((s) => s.sick_name) */

// const toDate = new Date().toISOString().slice(0, 10);
    const [sick_id, setSick_id] = useState(0)
    const [doctor_id, setDoctor_id] = useState(0);
    const [sick_name, setSick_name] = useState("");
    const [appointment_date, setAppointmentDate] = useState("");
    const [appointment_time, setAppointmentTime] = useState("");
    const [appointment_note, setAppointmentNot] = useState("");
    const [showError, set_showError] = useState(false);
    





    // add appointment.
    const addAppointmentHandler = e => {
        e.preventDefault();

        if (sick_id === 0) {
            set_showError(true)
            return

        } else {
            addAppointment({
                sick_id,
                doctor_id,
                appointment_date,
                appointment_time,
                appointment_note

            }, ddate)
            
        }

        setSick_name("");
        
        setAppointmentNot("");
        setAppointmentTime("");
        setAppointmentDate("");
        setDoctor_id(0)
        setSick_id(0);
        


    }
    const onSearch = (search, sick_id) => {
        if (search && sick_id) {
            setSick_name(search)
        }
        // doctorList.map((item) => {
        //     if (item.doctor_id === id) {
        //         setDoctor_name(item.doctor_name)
        //     } return null;
        // })
    }
    return (

        < div className='w-full' >
            <form onSubmit={(e) => addAppointmentHandler(e)} className=' bg-white rounded-md  grid p-5'>
                <div className='md:flex grid sm:grid-cols-2 gap-x-3 gap-y-3 '>
                    {/** sick name start */}
                    <div className='md:w-1/4 w-full  md:relative '>

                        <div className='flex flex-col w-full  rounded-md md:absolute  '>
                            <label className='text-gray-700 '>Ptient name</label>
                            <input type="text" required placeholder='Ptient search' value={sick_name || ''}
                                onChange={(e) => setSick_name(e.target.value)}
                                autoComplete="off"
                                onFocus={() => set_showError(false)}
                                className={`focus:ring-1  focus:outline-none border pl-2 p-2 w-full rounded ${showError && ' border border-red-400 bg-red-50'}`} />

                            {sickList && sickList.filter(itme => {
                                const search = sick_name.toLowerCase();
                                const sickName = itme.sick_name.toLowerCase();
                                return search && sickName.startsWith(search) && sickName !== search
                            })
                                // limit aka tanha 3 dana law naaway search bo aaki pshani ada
                                .slice(0, 5)
                                .map((itme) => {
                                    return <ul key={itme.sick_id} className=' cursor-pointer  bg-white hover:bg-sky-500  hover:text-white'
                                        onClick={() => { onSearch(itme.sick_name,  itme.sick_id); setSick_id(itme.sick_id); setDoctor_id(itme.doctor_id) }} >
                                        <li className='border-r border-l pl-2 '>{itme.sick_name}</li>
                                    </ul>
                                })}
                        </div>

                    </div>
                    {/** sick name end*/}

                    <div className='md:w-1/4  w-full '>
                        <label className='text-gray-500' >Date</label>
                        <input type='date' value={appointment_date || ''} required className='w-full focus:ring-1 focus:outline-none rounded border  p-2 ' onChange={(e) => setAppointmentDate(e.target.value)} />
                    </div>

                    <div className='md:w-1/4  w-full  '>
                        <label className='text-gray-700 '>Doctor name</label>
                        {/** value = {doctor_name || ''} aw or agar da naney awa alle auncontrolled wata ama sarata null yan undefined boia aw || bo da aney ka te batallish be */}
                        {/* am code xwa rawa bo awaya ka naxoshaka sar ba yak dctoraw lasar hamu clinic ka nia */}
                        {/* <input type="text" readOnly disabled required placeholder='Doctor name' value={doctor_name || ''}
                            className={`focus:ring-1 focus:outline-none border pl-2 p-2 w-full  rounded `} /> */}
                        {/* am code xwa rawa bo awaya ka naxoshaka sar ba clinic lasar yak dctor nia */}
                        <select
                required
                onChange={(e) => {
                  setDoctor_id(e.target.value);
                }}
                value={doctor_id}
                // onClick={()=>}
                className="w-full focus:ring-1 focus:outline-none rounded border  p-2 "
              >
                <option></option> 
                {doctorList && doctorList.map((doctor) => {
                  return (
                    <option
                      key={doctor.doctor_id}
                      value={`${doctor.doctor_id}`}
                    >
                        {doctor.doctor_name} 
                    </option>
                  );
                })}
              </select>
                    </div>

                    
                    <div className='md:w-1/4  w-full '>
                        <label className='text-gray-500' >Time</label>
                        <input type="time" required placeholder='Time'
                            className={`focus:ring-1 focus:outline-none border pl-2 p-2  w-full  rounded `}
                            onChange={(e) => setAppointmentTime(e.target.value)}
                            value={appointment_time || ''} />

                    </div>
                </div>


                <div className='sm:flex grid items-center mt-2 gap-x-3 gap-y-3 '>
                    <div className='sm:w-1/2 w-full '>
                        <label className='text-gray-500' >Note</label>
                        <input
                            type='text'
                            name='sick_phone'
                            placeholder='note'
                            autoComplete="off"

                            value={appointment_note || ''}
                            className='w-full focus:ring-1 focus:outline-none rounded border   p-2 ' onChange={(e) => setAppointmentNot(e.target.value)} />
                    </div>
                    <button type='submit' className='border place-self-end rounded-md bg-cyan-500 hover:bg-cyan-400 text-white w-full sm:w-1/2 p-2 '>Create appointment</button>
                </div>
            </form>

        </div >

    )
}

export default CreateAppointment