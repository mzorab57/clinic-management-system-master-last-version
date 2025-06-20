import React from "react";

const ReportAdminTotalAppointmetn = ({
  adminTotalAppointment,
  adminTotalAppointmentList,
}) => {
  if (!adminTotalAppointment) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md overflow-x-auto">
        <h1 className=" text-2xl border-b-2  mb-2 ">
          Admin Total Appointment Report
        </h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Doctor name
              </th>
              <th scope="col" className="px-6 py-3 ">
                appointment state
              </th>
              <th scope="col" className="px-6 py-3 ">
                date
              </th>
              <th scope="col" className="px-6 py-3 ">
                time
              </th>
            </tr>
          </thead>
          <tbody>
            {adminTotalAppointmentList.appointment &&
              adminTotalAppointmentList.appointment.map((appoinment, index) => {
                return (
                  <tr
                    key={index}
                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                  >
                    <td className="px-5 py-4">{appoinment.sick_name}</td>
                    <td className="px-6 py-4">{appoinment.doctor_name}</td>
                    <td className="px-5 py-4">
                      {appoinment.appointment_state}
                    </td>
                    <td className="px-6 py-4">{appoinment.appointment_date}</td>
                    <td className="px-6 py-4">{appoinment.appointment_time}</td>
                  </tr>
                );
              })}

            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 text-lg ">
                Reception Givin Loan
              </th>
              <td></td>
              <th className="px-6 py-6 text-lg ">
                {adminTotalAppointmentList.canceled}
              </th>
              <th className="px-6 py-6 text-lg ">
                {adminTotalAppointmentList.completed}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportAdminTotalAppointmetn;
