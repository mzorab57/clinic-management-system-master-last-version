import React, { useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";

const ReportDoctorGivienLoan = ({ givenLoan, doctorGivienLoanList }) => {
  const { sickList, userList } = useContext(GlobalContext);

  // bo dar henany nawi admin
  const uid = userList.map((d) => d.admin_id);
  const un = userList.map((d) => d.admin_name);

  // bo dar henany nawi naxoshaka
  const sid = sickList.map((d) => d.sick_id);
  const sn = sickList.map((d) => d.sick_name);

  if (!givenLoan) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md overflow-x-auto">
        <h1 className=" text-2xl border-b-2  mb-2 ">
          Doctor Givien Loan Report
        </h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                admin Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                Loan Amount
              </th>
              <th scope="col" className="px-6 py-3 ">
                patient name
              </th>
              <th scope="col" className="px-6 py-3 ">
                date
              </th>
              <th scope="col" className="px-6 py-3 ">
                note
              </th>
            </tr>
          </thead>
          <tbody>
            {doctorGivienLoanList.doctor_givien_loan &&
              doctorGivienLoanList.doctor_givien_loan.map((loan, index) => {
                return (
                  <tr
                    key={index}
                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                  >
                    <td className="px-5 py-4">
                      {un[uid.indexOf(loan.admin_id)]}
                    </td>
                    <td className="px-6 py-4">
                      {parseFloat(loan.loan_to_cash_amount).toLocaleString()}
                    </td>
                    <td className="px-5 py-4">
                      {sn[sid.indexOf(loan.sick_id)]}
                    </td>
                    <td className="px-6 py-4">{loan.loan_to_cash_date}</td>
                    <td className="px-6 py-4">{loan.loan_to_cash_note}</td>
                  </tr>
                );
              })}

            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 text-lg ">
                Total Price
              </th>
              <td></td>
              <td></td>
              <td></td>
              <th className="px-6 py-6 text-lg ">
                {doctorGivienLoanList.price}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportDoctorGivienLoan;
