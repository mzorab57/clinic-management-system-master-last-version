import React, { useContext, useEffect, useState } from 'react'
import SickDetailHeader from './SickDetailHeader'
import SickDetailBodyTop from './SickDetailBodyTop'
import GlobalContext from '../../contexts/createContext/context'
import SickDetailBodyBox from './SickDetailBodyBox'
import SickDetailInput from './SickDetailInput'
import api from "../../api/api";


const SickDetail = () => {
    const [sickDetail, setSickDetail] = useState({})
    const { doctorList } = useContext(GlobalContext);

    let data = localStorage.getItem("data")
    let username = JSON.parse(data).username;
  
    let id = doctorList.map(doctor => doctor.doctor_name === username && doctor.doctor_id).filter(d => d !== false)
    let doctor_id = id[0]

    useEffect(() => {

        const getAdmin = async () => {
            const res = await api.post('appointment/inrow.php', { doctor_id });
            setSickDetail(res.data.data);
            console.log(res.data.data);
            
        }

        const interval = setInterval(() => {
            getAdmin()
        }, 4000);

        return () => clearInterval(interval);
    }, [doctor_id])



    return (
        <div className=" font-body ">

            {/** body  */}
            <div className=' font-body flex flex-col p-3 bg-white mr-5 mt-3 w-full'>

                <SickDetailHeader sickDetail={sickDetail} />
                <SickDetailBodyTop sickDetail={sickDetail} setSickDetail={setSickDetail} />
                {sickDetail.doctor_id && <SickDetailInput sickDetail={sickDetail} setSickDetail={setSickDetail} />}

                <SickDetailBodyBox sickDetail={sickDetail} setSickDetail={setSickDetail} />


            </div>


        </div>
    )
}

export default SickDetail