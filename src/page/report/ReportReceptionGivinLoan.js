import React from "react";

const ReportReceptionGivinLoan = ({
  receptionGivinLoan,
  receptionGivinLoanList,
}) => {
  if (!receptionGivinLoan) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md overflow-x-auto">
        <h1 className=" text-2xl border-b-2  mb-2 ">
          Reception Givin Loan Report
        </h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Patient Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Givin Loan Amount
              </th>
              <th scope="col" className="px-6 py-3 ">
                date
              </th>
              <th scope="col" className="px-6 py-3 ">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 ">
                note
              </th>
            </tr>
          </thead>
          <tbody>
            {receptionGivinLoanList.total_givin_loan &&
              receptionGivinLoanList.total_givin_loan.map(
                (receptionGivinLoan, index) => {
                  return (
                    <tr
                      key={index}
                      className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                    >
                      <td className="px-5 py-4">
                        {receptionGivinLoan.sick_name}
                      </td>
                      <td className="px-6 py-4">
                        {parseFloat(
                          receptionGivinLoan.loan_to_cash_amount
                        ).toLocaleString()}
                      </td>
                      <td className="px-5 py-4">
                        {receptionGivinLoan.loan_to_cash_date}
                      </td>
                      <td className="px-6 py-4">
                        {receptionGivinLoan.sick_phone}
                      </td>
                      <td className="px-6 py-4">
                        {receptionGivinLoan.loan_to_cash_note}
                      </td>
                    </tr>
                  );
                }
              )}

            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 text-lg ">
                Reception Givin Loan
              </th>
              <td></td>
              <td></td>
              <td></td>
              <th className="px-6 py-6 text-lg ">
                {receptionGivinLoanList.total_givin_loan_amount}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportReceptionGivinLoan;
