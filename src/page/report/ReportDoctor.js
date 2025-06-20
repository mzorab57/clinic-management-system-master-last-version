import React from "react";

const ReportDoctor = ({ showDoctor, doctorlegerList }) => {
  if (!showDoctor) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md overflow-x-auto">
        <h1 className=" text-2xl border-b-2  mb-2 ">Doctor Report</h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Wrking type
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {doctorlegerList.doctor_ledger &&
              doctorlegerList.doctor_ledger.map((doctor, index) => {
                return (
                  <tr
                    key={index}
                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                  >
                    <th scope="row" className="px-5 py-4">
                      {index + 1}
                    </th>
                    <td className="px-5 py-4">{doctor.sick_name}</td>
                    <td className="px-6 py-4">{doctor.sick_phone}</td>
                    <td className="px-6 py-4">{doctor.surgery_type_name}</td>
                    <td className="px-6 py-4">
                      {parseFloat(doctor.surgery_type_price).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      {doctor.sick_surgery_invoice_date}
                    </td>
                  </tr>
                );
              })}
            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 ">
                Total Income
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th className="px-6 py-4 ">
                {parseFloat(doctorlegerList.price).toLocaleString()}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDoctor;
