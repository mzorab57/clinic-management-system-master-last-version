import React from "react";

const ReportMain = ({ showMain, mainReportList }) => {
  if (!showMain) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md">
        <h1 className=" text-2xl border-b-2  mb-2 ">Main Report</h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 "></thead>
          <tbody>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Total Income
              </th>
              {/* btawe fariza darkawe => parseFloat(mainReportList.total_income).toLocaleString() */}
              <td className="px-6 py-4">
                {parseFloat(mainReportList.total_income).toLocaleString()}
              </td>
            </tr>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Total Expense
              </th>
              {/* btawe fariza darkawe => parseFloat(mainReportList.total_expense).toLocaleString() */}
              <td className="px-6 py-4">
                {parseFloat(mainReportList.total_expense).toLocaleString()}
              </td>
            </tr>
            <tr className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="col" className="bg-cyan-500 text-white px-6 py-3">
                Summary
              </th>
              {/* btawe fariza darkawe => parseFloat(mainReportList.summary).toLocaleString() */}
              <td className="px-6 py-4">
                {parseFloat(mainReportList.summary).toLocaleString()}
              </td>
              {/* parseFloat(data[body]) && body.slice(body.length - 2) !== "te" ? parseFloat(data[body]).toLocaleString() : data[body] */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportMain;
