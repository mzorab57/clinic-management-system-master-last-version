import React, { useState } from "react";
import WorkingTypeReportModal from "../../components/modal/WorkingTypeReportModal";

const ReportWorkingType = ({ showWorkingType, workingTypeReportList }) => {
  const [show, setShow] = useState(false);
  const [workingType, setWorkingType] = useState([]);

  const initialValue2 = 0;
  const price =
    workingTypeReportList.data &&
    workingTypeReportList.data.map((work) => work.price);
  const total_price =
    price &&
    price.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue2
    );

  const qty =
    workingTypeReportList.data &&
    workingTypeReportList.data.map((work) => work.qty);
  const total_work =
    qty &&
    qty.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue2
    );

  if (!showWorkingType) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md overflow-x-auto">
        <WorkingTypeReportModal
          workingType={workingType}
          show={show}
          setShow={setShow}
        />
        <h1 className=" text-2xl border-b-2  mb-2 ">Working Type Report</h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Work
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            {workingTypeReportList.data &&
              workingTypeReportList.data.map((work, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      setShow(true);
                      setWorkingType(work.working_type);
                    }}
                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                  >
                    <td className="px-5 py-4">{work.surgery_type_name}</td>
                    <td className="px-6 py-4">{work.qty}</td>
                    <td className="px-5 py-4">
                      {parseFloat(work.price).toLocaleString()}
                    </td>
                  </tr>
                );
              })}

            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 ">
                Total Price
              </th>
              <td></td>
              <th className="px-6 py-4 ">
                {parseFloat(total_price).toLocaleString()}
              </th>
            </tr>
            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 ">
                Total Work
              </th>
              <td></td>
              <th className="px-6 py-4 ">{total_work}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportWorkingType;
