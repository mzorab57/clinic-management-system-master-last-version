import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { BiUserPin } from "react-icons/bi";
import { MdArrowRight } from "react-icons/md";
import {
  HiOutlineAnnotation,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { BsHeartPulse } from "react-icons/bs";
import { TbListDetails, TbReportMedical, TbReportMoney } from "react-icons/tb";
import { SiExpensify } from "react-icons/si";
import { FaClinicMedical } from "react-icons/fa";
import { motion } from "framer-motion";

const SideBar = ({ showSildBar, setShowSildBar }) => {
  const location = useLocation();
  const user = localStorage.getItem("data");
  let role = user && JSON.parse(user).role;

  const sidebarData = [
    {
      id: 1,
      style: `hover:text-white  ${
        location.pathname === "/main" && "bg-[#0171FE] text-white"
      } group  hover:bg-[#0171FE]   cursor-pointer w-full p-2.5  rounded-lg`,
      to: "/main",
      icon: <RxDashboard size={19} className={`2xl:scale-125`} />,
      link: "Main",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/main" && "text-white"
          }  text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["doctor", "reception", "admin"],
      duration: 0.5,
    },
    {
      id: 2,
      style: ` ${
        location.pathname === "/appointment" && "bg-[#0171FE] text-white"
      }  group cursor-pointer  items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/appointment",
      icon: <BiUserPin size={23} className="2xl:scale-125" />,
      link: "Appointment",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/appointment" && "text-white"
          }  text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["reception"],
      duration: 0.7,
    },
    {
      id: 3,
      style: `${
        location.pathname === "/doctor" && "bg-[#0171FE] text-white"
      }  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/doctor",
      icon: <HiOutlineUserGroup size={22} className="2xl:scale-125" />,
      link: "Doctor",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/doctor" && "text-white"
          } text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["admin"],
      duration: 0.9,
    },
    {
      id: 4,
      style: `${
        location.pathname === "/patientdetail" && "bg-[#0171FE] text-white"
      } group cursor-pointer  items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/patientdetail",
      icon: <TbListDetails size={22} className="2xl:scale-125" />,
      link: "Ptient Detail",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/patientdetail" && "text-white"
          } text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["doctor"],
      duration: 1.1,
    },
    {
      id: 5,
      style: `${
        location.pathname === "/patient" && "bg-[#0171FE] text-white"
      }   cursor-pointer w-full items-center  hover:bg-[#0171FE] hover:text-white duration-100  p-2.5 rounded-lg`,
      to: "/patient",
      icon: <BsHeartPulse size={20} className="2xl:scale-125" />,
      link: "Patient",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/patient" && "text-white"
          }  text-white  rounded-xl`}
          size={20}
        />
      ),
      role: ["reception", "admin", "doctor"],
      duration: 1.3,
    },

    {
      id: 6,
      style: `${
        location.pathname === "/workingtype" && "bg-[#0171FE] text-white"
      } cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg`,
      to: "/workingtype",
      icon: <HiOutlineAnnotation size={22} className="2xl:scale-125" />,
      link: "Working Type",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/workingtype" && "text-white"
          }  text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["admin"],
      duration: 1.5,
    },
    {
      id: 7,
      style: `${
        location.pathname === "/expensetype" && "bg-[#0171FE] text-white"
      }  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/expensetype",
      icon: <TbReportMoney size={22} className="2xl:scale-125" />,
      link: "Expense Type",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/doctor" && "text-white"
          }  text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["reception", "admin"],
      duration: 1.7,
    },
    {
      id: 8,
      style: `${
        location.pathname === "/expense" && "bg-[#0171FE] text-white"
      }  group cursor-pointer w-full  hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/expense",
      icon: <SiExpensify size={20} className="2xl:scale-125" />,
      link: "Expense",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/expense" && "text-white"
          }  text-white   group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["reception", "admin"],
      duration: 1.9,
    },
    {
      id: 9,
      style: `${
        location.pathname === "/report" && "bg-[#0171FE] text-white"
      }  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/report",
      icon: <TbReportMedical size={23} className="2xl:scale-125" />,
      link: "Report",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/report" && "text-white"
          } text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["admin", "doctor", "reception"],
      duration: 2,
    },
    {
      id: 10,
      style: `${
        location.pathname === "/user" && "bg-[#0171FE] text-white"
      }  group cursor-pointer w-full items-center hover:text-white hover:bg-[#0171FE] duration-100 p-2.5 rounded-lg `,
      to: "/user",
      icon: <HiOutlineUser size={22} className="2xl:scale-125" />,
      link: "User",
      mdarrowright: (
        <MdArrowRight
          className={` ${
            location.pathname === "/user" && "text-white"
          } text-white  group-hover:text-white rounded-xl`}
          size={20}
        />
      ),
      role: ["admin"],
      duration: 2.2,
    },
  ];

  return (
    <>
      <aside
        className={`lg:flex hidden  w-60  2xl:w-72 3xl:w-96 h-screen flex-col gap-6 shadow-sm shadow-gray-100 bg-white font-body  `}
      >
        <motion.div
          animate={{
            scale: 1,
            opacity: 1,
          }}
          initial={{
            scale: 0,
            // opacity: 0.1
          }}
          transition={{
            duration: 0.8,
          }}
          className="TopSidbar"
        >
          <div className="flex justify-center items-start pt-3 max-w-full  h-24">
            <div className="text-xl gap-3 flex  justify-center items-center">
              <FaClinicMedical size={38} className=" text-sky-500" />
              <span className=" font-medium text-2xl text-sky-400">
                <span className="text-yellow-300 text-2xl">Top</span>
                &nbsp;Clinic
              </span>
            </div>
          </div>
        </motion.div>

        <div className="Sidbar Menu">
          <ul className=" flex flex-col  gap-2 text-[#AEAEAE]  text-sm w-full px-2   select-none">
            {sidebarData.map((data) => {
              return (
                <motion.div
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  initial={{
                    x: -100,
                    // opacity: 0.1
                  }}
                  transition={{
                    duration: data.duration,
                  }}
                  key={data.id}
                >
                  {data.role &&
                    data.role.map((rolse) => {
                      return (
                        rolse === role && (
                          <li
                            key={data.id + 1}
                            onClick={() => setShowSildBar(false)}
                            className={data.style}
                          >
                            <Link
                              to={data.to}
                              className=" flex justify-between items-center "
                            >
                              <div className="flex gap-3 items-center">
                                {data.icon}
                                <span className=" 2xl:text-xl">
                                  {data.link}
                                </span>
                              </div>
                              {data.mdarrowright}
                            </Link>
                          </li>
                        )
                      );
                    })}
                </motion.div>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* ama bo bashi responsiva */}
      <div className={`${!showSildBar && "hidden"}`}>
        {/* bo aw background rasha la katy responsive dra akawet */}
        <div
          onClick={() => setShowSildBar(false)}
          className="bg-black/10 cursor-pointer lg:hidden w-full h-screen absolute top-0 left-0 z-10"
        ></div>
        <aside className="flex absolute top-0 left-0 z-20 lg:hidden duration-300  w-60 h-screen flex-col  shadow-sm shadow-gray-100 bg-white font-body">
          <div className="TopSidbar">
            <div className="flex justify-center items-start pt-3 max-w-full  h-24">
              <div className="text-xl gap-3 flex  justify-center items-center">
                <FaClinicMedical size={38} className=" text-sky-500" />
                <span className=" font-medium text-2xl text-sky-400">
                  <span className="text-yellow-300 text-2xl">Top</span>
                  &nbsp;Clinic
                </span>
              </div>
            </div>
          </div>
          {/* setShowSildBar bo awa har kat clic lasar bottomsidbar yani bashkan wak dctor paitent.. bkay close aka  */}
          <div className="Sidbar Menu">
            <ul className=" flex flex-col  gap-2 text-[#AEAEAE]  text-sm w-full px-2   select-none">
              {sidebarData.map((data) => {
                return (
                  <div key={data.id}>
                    {data.role.map((rolse) => {
                      return (
                        rolse === role && (
                          <li
                            key={data.id + 1}
                            onClick={() => setShowSildBar(false)}
                            className={data.style}
                          >
                            <Link
                              to={data.to}
                              className=" flex justify-between items-center "
                            >
                              <div className="flex gap-3 items-center">
                                {data.icon}
                                <span className=" 2xl:text-xl">
                                  {data.link}
                                </span>
                              </div>
                              {data.mdarrowright}
                            </Link>
                          </li>
                        )
                      );
                    })}
                  </div>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
