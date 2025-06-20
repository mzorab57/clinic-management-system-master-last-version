import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillHeartPulseFill } from "react-icons/bs";
import medical from "../../assets/image/medical.png";
import medicalteam2 from "../../assets/image/medical-team (1).png";
import report from "../../assets/image/report.png";
import reportkall2 from "../../assets/image/reportkall2.png";
import GlobalContext from "../../contexts/createContext/context";
import { motion } from "framer-motion";

const CardBody = () => {
  const { doctorList, sickList, sickSurgery, appointmentListDashbord } =
    useContext(GlobalContext);

  console.log(appointmentListDashbord);

  return (
    <div className=" mx-2 xl:flex  xl:justify-between grid  sm:grid-cols-2 gap-3 xl:gap-5   ">
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -100,
          opacity: 0.1,
        }}
        transition={{
          duration: 1,
        }}
        className="pl-5 rounded-2xl bg-[#0171FE]  w-full h-[120px] 2xl:h-[150px] flex items-center justify-start  
                relative  py-3 overflow-hidden shadow-md shadow-blue-100 border-2 border-blue-200"
      >
        <div className="bg-white rounded-full">
          {/* <FaUsers style={{ color: '#0171FE' }} size={25} className=" relative  transition-colors duration-500 ease-in-out" /> */}
          <img src={medical} alt="no doctor" className="w-8 2xl:w-12 m-2" />
        </div>
        <div className="flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out">
          <span style={{ color: "#A3D5F9" }} className="text-sm 2xl:text-lg ">
            Active Doctor
          </span>
          <span
            style={{ color: "#DFF4FD" }}
            className="text-xl pb-3 relative 2xl:text-3xl "
          >
            {doctorList && doctorList.length}
          </span>
        </div>

        {/** icon kall */}
        <div>
          {/* <FaUsers style={{ color: '#4196FF' }} size={83} className="absolute -right-1 top-12" /> */}
          <img
            src={medicalteam2}
            alt="no doctor"
            className="absolute w-24 2xl:w-32 2xl:-right-2 -right-1  top-11"
          />
          <span className="absolute rounded-full w-28 2xl:w-32 h-28 2xl:h-32 bg-white/5 -left-10  -top-20 "></span>
          <span className="absolute rounded-full w-32 2xl:w-36 h-32 2xl:h-36 bg-white/10 -left-10  -top-20 "></span>
        </div>
      </motion.div>

      {/** card 3 */}
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -100,
          opacity: 0.1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="bg-[#04D5C7]  pl-5 rounded-2xl  w-full h-[120px] 2xl:h-[150px] flex items-center justify-start i 
                relative py-3 overflow-hidden shadow-md shadow-emerald-100 border-2 border-emerald-200"
      >
        <div className="bg-white rounded-full  2xl:p-5 p-3">
          <FaUser
            style={{ color: "#04D5C7" }}
            size={25}
            className=" relative 2xl:scale-150 "
          />
        </div>
        <div className="flex flex-col  pt-3 pl-2  ">
          <span style={{ color: "#ACFFFB" }} className="text-sm 2xl:text-lg ">
            Active Patient
          </span>
          <span
            style={{ color: "#EBFFFF" }}
            className="text-xl pb-3 relative 2xl:text-3xl"
          >
            {sickList && sickList.length}
          </span>
        </div>

        {/** icon kall */}
        <div>
          <FaUser
            style={{ color: "#2CDED2" }}
            size={70}
            className="absolute 2xl:scale-125 top-12 2xl:top-16 -right-2 2xl:-right-1"
          />
          <span className="absolute rounded-full w-28 2xl:w-32 h-28 2xl:h-32 bg-white/10 -left-10  -top-20 "></span>
          <span className="absolute rounded-full w-32 2xl:w-36 h-32 2xl:h-36 bg-white/20 -left-10  -top-20 "></span>
        </div>
      </motion.div>

      {/** card 2 */}
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -100,
          opacity: 0.1,
        }}
        transition={{
          duration: 2,
        }}
        className="bg-[#9284F7]  pl-5 rounded-2xl  w-full h-[120px] 2xl:h-[150px] flex items-center justify-start i 
                relative py-3 overflow-hidden shadow-md shadow-purple-200/70 border-2 border-purple-200"
      >
        <div className="bg-white rounded-full p-3 2xl:p-[17px] text-center">
          <BsFillHeartPulseFill
            style={{ color: "#9284F7" }}
            size={25}
            className=" relative 2xl:scale-150  transition-colors duration-500 ease-in-out"
          />
        </div>
        <div className="flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out">
          <span style={{ color: "#DBD3FF" }} className="text-sm 2xl:text-lg">
            Working
          </span>
          <span
            style={{ color: "#F8F6FF" }}
            className="text-xl pb-3 relative 2xl:text-3xl "
          >
            {sickSurgery && sickSurgery.length}
          </span>
        </div>

        {/** icon kall */}
        <div>
          <BsFillHeartPulseFill
            style={{ color: "#A398FB" }}
            size={87}
            className="absolute 2xl:scale-125 top-10 2xl:top-14 -right-2 2xl:-right-0 "
          />
          <span className="absolute rounded-full w-28 2xl:w-32 h-28 2xl:h-32 bg-white/5 -left-10  -top-20 "></span>
          <span className="absolute rounded-full w-32 2xl:w-36 h-32 2xl:h-36 bg-white/10 -left-10  -top-20 "></span>
        </div>
      </motion.div>

      {/** card 4 */}
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -100,
          opacity: 0.1,
        }}
        transition={{
          duration: 2.5,
        }}
        className="bg-[#FF996C] pl-5 rounded-2xl  w-full h-[120px] 2xl:h-[150px] flex items-center justify-start
                relative py-3 overflow-hidden shadow-md shadow-orange-100 border-2 border-orange-200"
      >
        <div className="bg-white rounded-full p-3">
          <img src={report} alt="no doctor" className=" 2xl:w-10 " />
        </div>
        <div className="flex flex-col  pt-3 pl-2 g transition-colors duration-500 ease-in-out">
          <span style={{ color: "#FFDFD1" }} className="text-sm 2xl:text-lg">
            Today Appointment
          </span>
          <span
            style={{ color: "#F8F6FF" }}
            className="text-xl pb-3 relative 2xl:text-3xl"
          >
            {appointmentListDashbord && appointmentListDashbord.length}
          </span>
        </div>

        {/** icon kall */}
        <div>
          {/* <TbReportAnalytics style={{ color: '#FFAC89' }} size={87} className="absolute top-12 -right-3" /> */}
          <img
            src={reportkall2}
            alt="no doctor"
            className="absolute w-20 2xl:w-24 top-12 2xl:top-16  -right-3"
          />
          <span className="absolute rounded-full w-28 2xl:w-32 h-28 2xl:h-32 bg-white/10 -left-10  -top-20 "></span>
          <span className="absolute rounded-full w-32 2xl:w-36 h-32 2xl:h-36 bg-white/20 -left-10  -top-20 "></span>
        </div>
      </motion.div>
    </div>
  );
};

export default CardBody;

/* 
 card 2 
<div className=' bg-white rounded-lg shadow-sm w-56 h-32 flex items-center justify-around  
            relative  px-6 py-3 overflow-hidden font-medium transition-all  hover:bg-white group'>
    <span className="w-56 h-48  group-hover:w-80 group-hover:h-80 rounded rotate-[-40deg] bg-cyan-300 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-56 group-hover:translate-x-0"></span>
    <MdOutlineSick size={48} className="text-sky-400 relative group-hover:text-white transition-colors duration-500 ease-in-out" />
     <img src={sick} alt="no" className='w-16  relative group-hover:text-white transition-colors  duration-500 ' /> 

    <div className='flex flex-col items-center group-hover:text-white transition-colors duration-500 ease-in-out'>
        <span className='text-4xl pb-3 font-bold relative group-hover:text-white '>{sickList.length}</span>
        <span className=' text-slate-600 relative group-hover:text-white '>Sicks</span>
    </div>
</div>
 */
