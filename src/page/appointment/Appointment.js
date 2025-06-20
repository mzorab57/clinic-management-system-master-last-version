import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import AppointmentModal from "../../components/modal/AppointmentModal";
import CreateAppointment from "./CreateAppointment";
import x from "../../assets/image/cancel.png";
import surgery from "../../assets/image/scalpel (1).png";
import loan from "../../assets/image/loan.png";
import cash from "../../assets/image/cash.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

const Appointment = () => {
  const {
    appointmentList,
    fetchAppointment,
    ChangeStateAppointment,
    searchAppointment,
    changeSickSurgery,
  } = useContext(GlobalContext);

  // sort la gawra bo bchuk wa ba pechawa nawa la bchuk bo gawra, bo away yak la dway yak bn appoimentakan
  let appointment =
    appointmentList &&
    appointmentList.sort((a, b) => a.appointment_id - b.appointment_id);

  const [show, setShow] = useState(false);
  const [appointment_id, setAppointmentId] = useState(0);
  const [sick_id, setSick_id] = useState(0);
  const [doctor_id, setDoctor_id] = useState(0);
  const [sick_name, setSick_name] = useState("");
  const [doctor_name, setDoctor_name] = useState("");
  const [appointment_date, setAppointmentDate] = useState("");
  const [appointment_time, setAppointmentTime] = useState("");
  const [appointment_note, setAppointmentNot] = useState("");

  // ama date bo bashi appoimenta
  const toDate = new Date().toISOString().slice(0, 10);
  
  // const year = new Date().getFullYear();
  // const month = new Date().getMonth() + 1;
  // const dd = new Date().getDate();
  // let toDate = year + "-" + month + "-" + dd;
 

  const [ddate, setDate] = useState(toDate);

  // am intervala bo awaia ka lay dctoraka tawaw bu yak sar request bnert bo appointment bo away lai reception kash state naxoshaka bgore
  useEffect(() => {
    const getAdmin = () => {
      fetchAppointment(ddate);
    };
    const interval = setInterval(() => {
      
      getAdmin();
    }, 6000);

    return () => clearInterval(interval);
  }, [ddate, fetchAppointment]);

  // cash handel
  const cashStateHandel = (sick_id, appointment_id, sick_surgery_type) => {
   
    changeSickSurgery({ sick_id, appointment_id, sick_surgery_type });
  };

  // loan handel
  const loanStateHandel = (sick_id, appointment_id, sick_surgery_type) => {
    console.log(
      `sick = ${sick_id} , appointment_id = ${appointment_id}, sick_surgery_type = ${sick_surgery_type}`
    );
    changeSickSurgery({ sick_id, appointment_id, sick_surgery_type });
  };

  // workingStateHandel
  const workingStateHandel = (appointment_id, doctor_id, appointment_date) => {
    // aw doctor_id bas bo awaia daim check bka bo away bzane aw dctora la work daia yan na
    const search = appointmentList
      .map((app) => app.doctor_id === doctor_id && app.appointment_state)
      .filter((f) => f !== false);
    const check = search.includes("working");

    if (appointment_date !== new Date().toISOString().slice(0, 10)) {
      toast.warn("This appoiment is from another day", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    } else if (check) {
      toast.warn("This docor have a patient", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      ChangeStateAppointment(
        {
          appointment_id,
          appointment_state: "working",
        },
        ddate
      );
    }
  };

  const canceledStateHandel = (appointment_id, appointment_state) => {
    if (appointment_state === "working") {
      toast.warn("The patient is working !", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      ChangeStateAppointment(
        {
          appointment_id,
          appointment_state: "canceled",
        },
        ddate
      );
    }
  };

  return (
    <div className=" select-none mt-8 ">
      <div className="mx-3 ">
        {/* bo pshan dani toasta kan bakar de */}
        <ToastContainer limit={2} />

        {/* edit appoiment */}
        <AppointmentModal
          isVisible={show}
          onClose={setShow}
          appointment_id={appointment_id}
          sick_id={sick_id}
          setSick_id={setSick_id}
          doctor_id={doctor_id}
          setDoctor_id={setDoctor_id}
          sick_name={sick_name}
          setSick_name={setSick_name}
          doctor_name={doctor_name}
          setDoctor_name={setDoctor_name}
          appointment_date={appointment_date}
          setAppointmentDate={setAppointmentDate}
          appointment_time={appointment_time}
          setAppointmentTime={setAppointmentTime}
          appointment_note={appointment_note}
          setAppointmentNot={setAppointmentNot}
          ddate={ddate}
        />

        {/* add appoiment */}
        <CreateAppointment />

        <div className=" overflow-auto  w-full mt-6 bg-white p-5 rounded-md">
          <div className="flex flex-col w-full gap-3">
            <div className="flex flex-col   ">
              <label className="text-gray-600">Appointment Date</label>
              <input
                onChange={(e) => setDate(e.target.value)}
                value={ddate}
                type="date"
                className={`focus:ring-1 focus:outline-none border  p-1 rounded max-w-xs`}
              />
            </div>

            <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
              <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Id
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Ptient name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Doctor name
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-3 py-3">
                    App.state
                  </th>
                  <th scope="col" className="px-3 py-3">
                    {" "}
                    Change State{" "}
                  </th>
                  <th scope="col" className="px-3 py-3">
                    Note
                  </th>
                </tr>
              </thead>
              <tbody>
                {appointment &&
                  searchAppointment(appointmentList).map(
                    (appointment, index) => {
                      return (
                        <tr
                          key={index}
                          onDoubleClick={() => {
                            setShow(true);
                            setAppointmentId(appointment.appointment_id);
                            setSick_id(appointment.sick_id);
                            setDoctor_id(appointment.doctor_id);
                            setSick_name(appointment.sick_name);
                            setDoctor_name(appointment.doctor_name);
                            setAppointmentDate(appointment.appointment_date);
                            setAppointmentTime(appointment.appointment_time);
                            setAppointmentNot(appointment.appointment_note);
                          }}
                          className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                        >
                          <th scope="row" className="px-5 py-4">
                            &nbsp;&nbsp;{index + 1}
                          </th>
                          <td className=" px-2 py-4">
                            {appointment.sick_name}
                          </td>
                          <td className=" px-2 py-4">
                            {appointment.doctor_name}
                          </td>
                          <td className=" px-2 py-4">
                            {appointment.appointment_date}
                          </td>
                          <td className=" px-2 py-4">
                            {appointment.appointment_time}
                          </td>
                          <td className={`px-2 w-10 py-4 `}>
                            <span
                              className={`${
                                appointment.appointment_state === "done" &&
                                "bg-yellow-200/60 px-2 py-0.5 rounded-xl"
                              } ${
                                appointment.appointment_state === "working" &&
                                "bg-green-200/60 px-2 py-0.5 rounded-xl"
                              } ${
                                appointment.appointment_state === "scheduled" &&
                                "bg-sky-200/60 px-2 py-0.5 rounded-xl"
                              }`}
                            >
                              {appointment.appointment_state}
                            </span>
                          </td>
                          <td className=" px-2 py-4 flex gap-3 ">
                            {/* <img onClick={() => waitStateHandel(appointment.appointment_id, appointment.appointment_date)}
                                                className='w-7 rounded-xl bg-yellow-100 hover:bg-yellow-200/75' src={timer} alt='wait' /> */}
                            {appointment.appointment_state === "done" ? (
                              <>
                                <img
                                  onClick={() => {
                                    cashStateHandel(
                                      appointment.sick_id,
                                      appointment.appointment_id,
                                      "cash"
                                    );
                                  }}
                                  className="w-7 rounded-xl bg-green-200-100 hover:bg-green-200"
                                  src={cash}
                                  alt="cash"
                                />
                                <img
                                  onClick={() => {
                                    loanStateHandel(
                                      appointment.sick_id,
                                      appointment.appointment_id,
                                      "loan"
                                    );
                                  }}
                                  className="w-7 rounded-xl bg-red-200-100 hover:bg-red-200 "
                                  src={loan}
                                  alt="loan"
                                />
                              </>
                            ) : (
                              <>
                                <img
                                  onClick={() => {
                                    workingStateHandel(
                                      appointment.appointment_id,
                                      appointment.doctor_id,
                                      appointment.appointment_date
                                    );
                                  }}
                                  className="w-7 rounded-xl bg-green-200-100 hover:bg-green-200"
                                  src={surgery}
                                  alt="working"
                                />
                                <img
                                  onClick={() => {
                                    canceledStateHandel(
                                      appointment.appointment_id,
                                      appointment.appointment_state
                                    );
                                    setAppointmentId(
                                      appointment.appointment_id
                                    );
                                  }}
                                  className="w-7  rounded-xl bg-red-100 hover:bg-red-200/75"
                                  src={x}
                                  alt="cros"
                                />
                              </>
                            )}
                          </td>
                          <td className="ml-2 px-2 py-4">
                            {appointment.appointment_note}
                          </td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </table>
          </div>

          {appointmentList && !appointmentList.length ? (
            <div className="py-1 w-full bg-yellow-100/50  text-yellow-500 flex justify-center">
              <span className="  p-1 rounded">No Appointment</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
