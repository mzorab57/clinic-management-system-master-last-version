import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ReportDoctor from "./ReportDoctor";
// import { HiOutlineAnnotation } from "react-icons/hi";
// AiOutlineMoneyCollect,
import {  AiOutlineBranches } from "react-icons/ai";
import {
  // BsPersonDown,
  BsPersonVcard,
  BsMenuApp,
  BsPersonGear,
} from "react-icons/bs";
// import { MdAttachMoney, MdOutlinePerson } from "react-icons/md";
// SiExpensify,
import {  SiVirustotal } from "react-icons/si";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { RiEmpathizeLine } from "react-icons/ri";
import { TbReceipt2, TbNurse } from "react-icons/tb";
// import { MdOutlinePersonPin } from "react-icons/md";
import ReportExpense from "./ReportExpense";
import ReportWorkingType from "./ReportWorkingType";
import ReportMain from "./ReportMain";
import ReportDoctorGivienLoan from "./ReportDoctorGivienLoan";
import ReportDoctorRemainLoan from "./ReportDoctorRemainLoan";
import ReportDoctorWorking from "./ReportDoctorWorking";
import ReportDoctorSickLedger from "./ReportDoctorSickLedger";
import ReportReceptionAppointment from "./ReportReceptionAppointment";
import ReportReceptionTotalLoan from "./ReportReceptionTotalLoan";
import ReportAdminTotalLoan from "./ReportAdminTotalLoan";
import ReportReceptionExpense from "./ReportReceptionExpense";
import ReportReceptionGivinLoan from "./ReportReceptionGivinLoan";
import ReportAdminDoctorLedger from "./ReportAdminDoctorLedger";
import ReportAdminSickLedger from "./ReportAdminSickLedger";
import ReportAdminTotalAppointmetn from "./ReportAdminTotalAppointmetn";


const ReportAll = ({
  from,
  to,
  doctor_id,
  expense_type_id,
  // working_type_id,
  setErorFrom,
  setErorTo,
  // setErorDoctorid,
  sick_id,
  setErorsickid,
  admin_id,
  // setErorAdminId,
}) => {
  const [showDoctor, setShowDoctor] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showWorkingType, setShowWorkingType] = useState(false);
  const [givenLoan, setGivenLoan] = useState(false);
  const [remainLoan, setRemainLoan] = useState(false);
  const [doctorWorkng, setDoctorWorking] = useState(false);
  const [doctorSickLedger, setDoctorSickLedger] = useState(false);
  const [receptionAppointment, setReceptionAppointment] = useState(false);
  const [receptionTotalLoan, setReceptionTotalLoan] = useState(false);
  const [adminTotalLoan, setAdminTotalLoan] = useState(false);
  const [receptionExpense, setReceptionExpense] = useState(false);
  const [receptionGivinLoan, setReceptionGivinLoan] = useState(false);
  const [adminDoctorLedger, setAdminDoctorLedger] = useState(false);
  const [adminSickLedger, setAdminSickLedger] = useState(false);
  const [adminTotalAppointment, setAdminTotalAppointment] = useState(false);

  const {
    mainReportList,
    doctorlegerList,
    expenseReportList,
    // fetchExpensereportReport,
    // fetchDoctorlegerReport,
    // fetchReport,
    // fetchWorkingTypeReportReport,
    // fetchDoctorGivienLoan,
    fetchDoctorRemainLoan,
    fetchDoctorWorking,
    fetchDoctorSicklegerReport,
    fetchReceptionAppointmentReport,
    fetchReceptionTotalLoanReport,
    fetchAdminTotalLoanReport,
    fetchReceptionExpenseReport,
    // fetchReceptionGivinLoanReport,
    fetchAdminDoctorLedgerReport,
    fetchAdminSickLedgerReport,
    // fetchAdminTotalAppointmentReport,
    workingTypeReportList,
    doctorGivienLoanList,
    doctorRemainLoanList,
    doctorWorkingList,
    doctorSickLedgerList,
    receptionAppointmentList,
    receptionTotalLoanList,
    adminTotalLoanList,
    receptionExpenseList,
    receptionGivinLoanList,
    adminDoctorLedgerList,
    adminSickLedgerList,
    adminTotalAppointmentList,
  } = useContext(GlobalContext);

  const user = localStorage.getItem("data");
  let role = user && JSON.parse(user).role;

  
  

  // handelReceptionTotalLoant
  const handelAdminTotalLoan = (e) => {
    e.preventDefault();
    fetchAdminTotalLoanReport({ doctor_id });
    setAdminTotalLoan(true);
    setAdminTotalAppointment(false);
    setAdminSickLedger(false);
    setAdminDoctorLedger(false);
    setReceptionGivinLoan(false);
    setReceptionExpense(false);
    setReceptionTotalLoan(false);
    setReceptionAppointment(false);
    setDoctorSickLedger(false);
    setShowDoctor(false);
    setShowExpense(false);
    setShowMain(false);
    setShowWorkingType(false);
    setGivenLoan(false);
    setRemainLoan(false);
    setDoctorWorking(false);
  };
  // handelReceptionTotalLoant
  const handelReceptionTotalLoant = (e) => {
    e.preventDefault();
    fetchReceptionTotalLoanReport();
    setAdminTotalAppointment(false);
    setReceptionTotalLoan(true);
    setAdminSickLedger(false);
    setReceptionGivinLoan(false);
    setAdminDoctorLedger(false);
    setReceptionExpense(false);
    setAdminTotalLoan(false);
    setReceptionAppointment(false);
    setDoctorSickLedger(false);
    setShowDoctor(false);
    setShowExpense(false);
    setShowMain(false);
    setShowWorkingType(false);
    setGivenLoan(false);
    setRemainLoan(false);
    setDoctorWorking(false);
  };
  // doctor Sick Ledger report
  const handelReceptionAppointment = (e) => {
    e.preventDefault();
    if (from && to) {
      fetchReceptionAppointmentReport({ from, to });
      setReceptionAppointment(true);
      setAdminTotalAppointment(false);
      setAdminSickLedger(false);
      setAdminDoctorLedger(false);
      setReceptionGivinLoan(false);
      setReceptionExpense(false);
      setAdminTotalLoan(false);
      setReceptionTotalLoan(false);
      setDoctorSickLedger(false);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    }
  };
  // doctor Sick Ledger report
  const handelDoctorSickLedger = (e) => {
    e.preventDefault();
    if ( sick_id && from && to) {
      fetchDoctorSicklegerReport({ from, to, doctor_id, sick_id });
      setDoctorSickLedger(true);
      setAdminTotalAppointment(false);
      setAdminSickLedger(false);
      setAdminDoctorLedger(false);
      setReceptionGivinLoan(false);
      setReceptionExpense(false);
      setAdminTotalLoan(false);
      setReceptionTotalLoan(false);
      setReceptionAppointment(false);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    }  else if (!sick_id) {
      setErorsickid(true);
    }
  };

  // doctor report
  // const handelDoctorReport = (e) => {
  //   e.preventDefault();
  //   if (doctor_id && from && to) {
  //     fetchDoctorlegerReport({ from, to, doctor_id });
  //     setShowDoctor(true);
  //     setAdminTotalAppointment(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionGivinLoan(false);
  //     setReceptionExpense(false);
  //     setAdminTotalLoan(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowExpense(false);
  //     setShowMain(false);
  //     setShowWorkingType(false);
  //     setGivenLoan(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   } else if (!doctor_id) {
  //     setErorDoctorid(true);
  //   }
  // };
  // admin total appointment report
  // const handelAdminTotalAppointment = (e) => {
  //   e.preventDefault();

  //   if (from && to) {
  //     fetchAdminTotalAppointmentReport({ from, to, doctor_id });
  //     setAdminTotalAppointment(true);
  //     setShowDoctor(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionGivinLoan(false);
  //     setReceptionExpense(false);
  //     setAdminTotalLoan(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowExpense(false);
  //     setShowMain(false);
  //     setShowWorkingType(false);
  //     setGivenLoan(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   }
  // };

  // admin doctor ledger report
  const handelAdminDoctorLedgerReport = (e) => {
    e.preventDefault();
    if ( from && to) {
      fetchAdminDoctorLedgerReport({ from, to, doctor_id });
      setAdminDoctorLedger(true);
      setAdminTotalAppointment(false);
      setAdminSickLedger(false);
      setShowDoctor(false);
      setReceptionGivinLoan(false);
      setReceptionExpense(false);
      setAdminTotalLoan(false);
      setReceptionTotalLoan(false);
      setReceptionAppointment(false);
      setDoctorSickLedger(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } 
  };
  // admin sick ledger report
  const handelAdminSickLedger = (e) => {
    e.preventDefault();
    if (sick_id && from && to) {
      fetchAdminSickLedgerReport({ from, to, sick_id });
      setAdminSickLedger(true);
      setAdminTotalAppointment(false);
      setAdminDoctorLedger(false);
      setShowDoctor(false);
      setReceptionGivinLoan(false);
      setReceptionExpense(false);
      setAdminTotalLoan(false);
      setReceptionTotalLoan(false);
      setReceptionAppointment(false);
      setDoctorSickLedger(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } else if (!sick_id) {
      setErorsickid(true);
    }
  };
  // doctor working
  const handelDoctorWorking = (e) => {
    e.preventDefault();
    if ( from && to) {
      fetchDoctorWorking({ from, to, doctor_id });
      setDoctorWorking(true);
      setAdminTotalAppointment(false);
      setAdminSickLedger(false);
      setAdminDoctorLedger(false);
      setReceptionGivinLoan(false);
      setReceptionExpense(false);
      setAdminTotalLoan(false);
      setReceptionTotalLoan(false);
      setReceptionAppointment(false);
      setDoctorSickLedger(false);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } 
  };

  // remind doctor loan
  const handelRemainDoctorLoan = (e) => {
    e.preventDefault();
    if (doctor_id) {
      fetchDoctorRemainLoan({ doctor_id });
      setRemainLoan(true);
      setAdminTotalAppointment(false);
      setAdminSickLedger(false);
      setAdminDoctorLedger(false);
      setReceptionGivinLoan(false);
      setReceptionExpense(false);
      setAdminTotalLoan(false);
      setReceptionTotalLoan(false);
      setReceptionAppointment(false);
      setDoctorSickLedger(false);
      setShowDoctor(false);
      setShowExpense(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setDoctorWorking(false);
    } 
  };

  // doctor Given Loan report
  // const handelDoctorGivenLoan = (e) => {
  //   e.preventDefault();
  //   if (doctor_id && from && to) {
  //     fetchDoctorGivienLoan({ from, to, doctor_id });
  //     setGivenLoan(true);
  //     setAdminTotalAppointment(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionGivinLoan(false);
  //     setReceptionExpense(false);
  //     setAdminTotalLoan(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowDoctor(false);
  //     setShowExpense(false);
  //     setShowMain(false);
  //     setShowWorkingType(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   } else if (!doctor_id) {
  //     setErorDoctorid(true);
  //   }
  // };

  // expense report
  // const handelExpenseReport = (e) => {
  //   e.preventDefault();
  //   if (from && to) {
  //     fetchExpensereportReport({
  //       from,
  //       to,
  //       expense_type_id,
  //     });
  //     setShowExpense(true);
  //     setAdminTotalAppointment(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionGivinLoan(false);
  //     setReceptionExpense(false);
  //     setAdminTotalLoan(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowDoctor(false);
  //     setShowMain(false);
  //     setShowWorkingType(false);
  //     setGivenLoan(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   }
  // };

  // handel Reception Expense report
  const handelReceptionExpense = (e) => {
    e.preventDefault();
    if (from && to ) {
      fetchReceptionExpenseReport({
        from,
        to,
        admin_id,
        expense_type_id,
      });
      setReceptionExpense(true);
      setAdminTotalAppointment(false);
      setAdminSickLedger(false);
      setAdminDoctorLedger(false);
      setReceptionGivinLoan(false);
      setShowExpense(false);
      setReceptionTotalLoan(false);
      setReceptionAppointment(false);
      setDoctorSickLedger(false);
      setShowDoctor(false);
      setShowMain(false);
      setShowWorkingType(false);
      setGivenLoan(false);
      setRemainLoan(false);
      setDoctorWorking(false);
    } else if (!from) {
      setErorFrom(true);
    } else if (!to) {
      setErorTo(true);
    } 
  };
  // handel Reception givin loan report
  // const handelReceptionGivinLoan = (e) => {
  //   e.preventDefault();
  //   if (from && to && admin_id) {
  //     fetchReceptionGivinLoanReport({
  //       from,
  //       to,
  //       admin_id,
  //     });
  //     setReceptionGivinLoan(true);
  //     setAdminTotalAppointment(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionExpense(false);
  //     setShowExpense(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowDoctor(false);
  //     setShowMain(false);
  //     setShowWorkingType(false);
  //     setGivenLoan(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   } else if (!admin_id) {
  //     setErorAdminId(true);
  //   }
  // };

  // main report
  // const handelMainReport = (e) => {
  //   e.preventDefault();
  //   if (from && to) {
  //     fetchReport({ from, to });
  //     setShowMain(true);
  //     setAdminTotalAppointment(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionGivinLoan(false);
  //     setReceptionExpense(false);
  //     setAdminTotalLoan(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowExpense(false);
  //     setShowDoctor(false);
  //     setShowWorkingType(false);
  //     setGivenLoan(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   }
  // };

  // working type report
  // const handelWorkingTypeReport = (e) => {
  //   e.preventDefault();
  //   if (from && to) {
  //     fetchWorkingTypeReportReport({ from, to, working_type_id });
  //     setShowWorkingType(true);
  //     setAdminTotalAppointment(false);
  //     setAdminSickLedger(false);
  //     setAdminDoctorLedger(false);
  //     setReceptionGivinLoan(false);
  //     setReceptionExpense(false);
  //     setAdminTotalLoan(false);
  //     setReceptionTotalLoan(false);
  //     setReceptionAppointment(false);
  //     setDoctorSickLedger(false);
  //     setShowMain(false);
  //     setShowExpense(false);
  //     setShowDoctor(false);
  //     setGivenLoan(false);
  //     setRemainLoan(false);
  //     setDoctorWorking(false);
  //   } else if (!from) {
  //     setErorFrom(true);
  //   } else if (!to) {
  //     setErorTo(true);
  //   }
  // };


  // data report showing
  const reportData = [
    // {
    //   id: 1,
    //   action: handelDoctorReport,
    //   style: "border-green-300",
    //   icon: (
    //     <MdAttachMoney className="w-10 h-10 group-hover:text-green-400 duration-300 text-green-500 " />
    //   ),
    //   name: "Doctor",
    //   requier: "(Doctor , From , To)",
    //   roles: ["admin"],
    // },
    // {
    //   id: 2,
    //   action: handelExpenseReport,
    //   style: "border-purple-300",
    //   icon: (
    //     <SiExpensify className="w-10 h-10 group-hover:text-purple-400 duration-300 text-purple-500 " />
    //   ),
    //   name: "Expense",
    //   requier: "(Expense Type , From , To)",
    //   roles: ["admin"],
    // },
    // {
    //   id: 3,
    //   action: handelWorkingTypeReport,
    //   style: "border-orange-300",
    //   icon: (
    //     <HiOutlineAnnotation className="w-10 h-10 group-hover:text-orange-400 duration-300 text-orange-500 " />
    //   ),
    //   name: "Working",
    //   requier: "(Working Type , From , To)",
    //   roles: ["admin"],
    // },
    // {
    //   id: 4,
    //   action: handelMainReport,
    //   style: "border-cyan-300",
    //   icon: (
    //     <AiOutlineMoneyCollect className="w-10 h-10  group-hover:text-cyan-400 duration-300 text-cyan-500 " />
    //   ),
    //   name: "Main Report",
    //   requier: "(From , To)",
    //   roles: ["admin"],
    // },
    // {
    //   id: 5,
    //   action: handelDoctorGivenLoan,
    //   style: "border-pink-500",
    //   icon: (
    //     <BsPersonDown className="w-10 h-10  group-hover:text-pink-400 duration-300 text-pink-500 " />
    //   ),
    //   name: "Givinen Loan",
    //   requier: "(Doctor , From , To)",
    //   roles: ["doctor"],
    // },
    {
      id: 6,
      action: handelRemainDoctorLoan,
      style: "border-yellow-400",
      icon: (
        <BsPersonVcard className="w-10 h-10  group-hover:text-yellow-400 duration-300 text-yellow-500 " />
      ),
      name: "Remain Loan",
      requier: "",
      roles: ["doctor"],
    },
    {
      id: 7,
      action: handelDoctorWorking,
      style: "border-lime-400",
      icon: (
        <IoCodeWorkingOutline className="w-10 h-10  group-hover:text-lime-400 duration-300 text-lime-500 " />
      ),
      name: "Working",
      requier: "(From , To)",
      roles: ["doctor"],
    },
    {
      id: 8,
      action: handelDoctorSickLedger,
      style: "border-red-400",
      icon: (
        <RiEmpathizeLine className="w-10 h-10  group-hover:text-red-400 duration-300 text-red-500 " />
      ),
      name: "Patient Ledger",
      requier: "(Patient , From , To)",
      roles: ["doctor"],
    },
    {
      id: 9,
      action: handelReceptionAppointment,
      style: "border-[#A8570B]",
      icon: (
        <BsMenuApp className="w-10 h-10  group-hover:text-[#D97212] duration-300 text-[#A8570B] " />
      ),
      name: "Appointment",
      requier: "(From , To)",
      roles: ["reception"],
    },
    {
      id: 10,
      action: handelReceptionTotalLoant,
      style: "border-[#6D0957]",
      icon: (
        <SiVirustotal className="w-10 h-10  group-hover:text-[#C20F9B] duration-300 text-[#6D0957] " />
      ),
      name: "Total Loan",
      requier: "(No Parameters)",
      roles: ["reception"],
    },
    {
      id: 11,
      action: handelAdminTotalLoan,
      style: "border-[#190DA5]",
      icon: (
        <BsPersonGear className="w-10 h-10  group-hover:text-[#2D1DED] duration-300 text-[#190DA5] " />
      ),
      name: "Total Loan",
      requier: "(Doctor or No parameters)",
      roles: ["admin"],
    },
    {
      id: 12,
      action: handelReceptionExpense,
      style: "border-[#0EAF94]",
      icon: (
        <TbReceipt2 className="w-10 h-10  group-hover:text-[#25EFCD] duration-300 text-[#0EAF94] " />
      ),
      name: "Expense",
      requier: "(From , To , Expense Type)",
      roles: ["reception"],
    },
    // {
    //   id: 13,
    //   action: handelReceptionGivinLoan,
    //   style: "border-[#926869]",
    //   icon: (
    //     <MdOutlinePersonPin className="w-10 h-10  group-hover:text-[#B68B8C] duration-300 text-[#926869] " />
    //   ),
    //   name: "Givin Loan",
    //   requier: "(From , To , Admin)",
    //   roles: ["reception"],
    // },
    {
      id: 14,
      action: handelAdminDoctorLedgerReport,
      style: "border-[#5D9280]",
      icon: (
        <AiOutlineBranches className="w-10 h-10  group-hover:text-[#73B09B] duration-300 text-[#5D9280] " />
      ),
      name: "Doctor Ledger",
      requier: "(From , To , Doctor)",
      roles: ["admin"],
    },
    {
      id: 15,
      action: handelAdminSickLedger,
      style: "border-[#D35950]",
      icon: (
        <TbNurse className="w-10 h-10  group-hover:text-[#E1867F] duration-300 text-[#D35950] " />
      ),
      name: "Patient Ledger",
      requier: "(From , To , Patient)",
      roles: ["admin"],
    },
    // {
    //   id: 16,
    //   action: handelAdminTotalAppointment,
    //   style: "border-[#CD42A6]",
    //   icon: (
    //     <MdOutlinePerson className="w-10 h-10  group-hover:text-[#E090C9] duration-300 text-[#CD42A6] " />
    //   ),
    //   name: "Total Appointment",
    //   requier: "(From , To , Doctor)",
    //   roles: ["admin"],
    // },
  ];



  return (
    <div className="mt-4 ">
      <div className="grid gap-y-5 gap-x-5  sm:grid-cols-2 md:grid-cols-4 px-5 bg-white rounded-md py-8">
        {reportData &&
          reportData.map((report) => {
            return (
              report.roles[0] === role ?
              
                <div
                  key={report.id}
                  onClick={(e) => report.action(e)}
                  className={`relative  w-full h-full cursor-pointer p-3 overflow-hidden bg-white group   border duration-300  ${report.style}  rounded-lg shadow `}
                >
                  
                  <div className="grid h-full">
                    <div>{report.icon}</div>
                    <h5 className="my-3 text-xl font-semibold tracking-tight text-gray-900 ">
                      {report.name}
                    </h5>
                    <p className=" font-body text-sm text-gray-500 ">
                      {report.requier}
                    </p>
                  </div>
                </div>
              :null
            );
          })}
      </div>
      {showDoctor && (
        <ReportDoctor
          showDoctor={showDoctor}
          setShowDoctor={setShowDoctor}
          doctorlegerList={doctorlegerList}
        />
      )}
      {showExpense && (
        <ReportExpense
          showExpense={showExpense}
          expenseReportList={expenseReportList}
        />
      )}
      {showMain && (
        <ReportMain showMain={showMain} mainReportList={mainReportList} />
      )}
      {showWorkingType && (
        <ReportWorkingType
          showWorkingType={showWorkingType}
          workingTypeReportList={workingTypeReportList}
        />
      )}
      {givenLoan && (
        <ReportDoctorGivienLoan
          givenLoan={givenLoan}
          doctorGivienLoanList={doctorGivienLoanList}
        />
      )}
      {remainLoan && (
        <ReportDoctorRemainLoan
          remainLoan={remainLoan}
          doctorRemainLoanList={doctorRemainLoanList}
        />
      )}
      {doctorWorkng && (
        <ReportDoctorWorking
          doctorWorkng={doctorWorkng}
          doctorWorkingList={doctorWorkingList}
        />
      )}
      {doctorSickLedger && (
        <ReportDoctorSickLedger
          doctorSickLedger={doctorSickLedger}
          doctorSickLedgerList={doctorSickLedgerList}
        />
      )}
      {receptionAppointment && (
        <ReportReceptionAppointment
          receptionAppointment={receptionAppointment}
          receptionAppointmentList={receptionAppointmentList}
        />
      )}
      {receptionTotalLoan && (
        <ReportReceptionTotalLoan
          receptionTotalLoan={receptionTotalLoan}
          receptionTotalLoanList={receptionTotalLoanList}
        />
      )}
      {adminTotalLoan && (
        <ReportAdminTotalLoan
          adminTotalLoan={adminTotalLoan}
          adminTotalLoanList={adminTotalLoanList}
        />
      )}
      {receptionExpense && (
        <ReportReceptionExpense
          receptionExpense={receptionExpense}
          receptionExpenseList={receptionExpenseList}
        />
      )}
      {receptionGivinLoan && (
        <ReportReceptionGivinLoan
          receptionGivinLoan={receptionGivinLoan}
          receptionGivinLoanList={receptionGivinLoanList}
        />
      )}
      {adminDoctorLedger && (
        <ReportAdminDoctorLedger
          adminDoctorLedger={adminDoctorLedger}
          adminDoctorLedgerList={adminDoctorLedgerList}
        />
      )}
      {adminSickLedger && (
        <ReportAdminSickLedger
          adminSickLedger={adminSickLedger}
          adminSickLedgerList={adminSickLedgerList}
        />
      )}
      {adminTotalAppointment && (
        <ReportAdminTotalAppointmetn
          adminTotalAppointment={adminTotalAppointment}
          adminTotalAppointmentList={adminTotalAppointmentList}
        />
      )}
    </div>
  );
};

export default ReportAll;
