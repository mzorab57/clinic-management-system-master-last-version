import React from "react";

const ReportDoctorSickLedger = ({ doctorSickLedger, doctorSickLedgerList }) => {



const dataDoctorStatisticReport = [

  {
  id:3,
  th:"Total Loan",
  td: parseFloat(doctorSickLedgerList.total_loan).toLocaleString(),
},
  {
  id:4,
  th:"Total Loan Cash",
  td: parseFloat(doctorSickLedgerList.total_loan_cash).toLocaleString(),
},
  {
  id:5,
  th:"Total Work Price",
  td: parseFloat(doctorSickLedgerList.total_work_price).toLocaleString(),
},
  {
  id:6,
  th:"Total Work Quantity",
  td: parseFloat(doctorSickLedgerList.total_work_qty).toLocaleString(),
},

]


  if (!doctorSickLedger) return null;
  return (
          
    <div className='mt-4'>
    <div className='w-full bg-white p-5 rounded-md overflow-x-auto'>
        <h1 className=' text-2xl border-b-2  mb-2 '>Doctor Patient Ledger Report</h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
            <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            </thead>
            <tbody>
            {dataDoctorStatisticReport && dataDoctorStatisticReport.map((data,index)=> {
                return (
                    <tr key={index} className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
                        <th scope="col" className="bg-cyan-500 text-white px-6 py-3">{data.th}</th>
                        {/* btawe fariza darkawe => parseFloat(mainReportList.summary).toLocaleString() */}
                        <td className="px-6 py-4">{data.td}</td>
                        {/* parseFloat(data[body]) && body.slice(body.length - 2) !== "te" ? parseFloat(data[body]).toLocaleString() : data[body] */}
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
</div>
  );
};

export default ReportDoctorSickLedger;
