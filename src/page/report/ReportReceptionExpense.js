import React from "react";

const ReportReceptionExpense = ({ receptionExpense, receptionExpenseList }) => {
  if (!receptionExpense) return null;
  return (
    <div className="mt-4">
      <div className="w-full bg-white p-5 rounded-md overflow-x-auto">
        <h1 className=" text-2xl border-b-2  mb-2 ">
          Reception Expense Report
        </h1>
        <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
          <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                admin Name
              </th>
              <th scope="col" className="px-6 py-3 ">
                expense type name
              </th>
              <th scope="col" className="px-6 py-3 ">
                expense amount
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
            {receptionExpenseList.expense &&
              receptionExpenseList.expense.map((expense, index) => {
                return (
                  <tr
                    key={index}
                    className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                  >
                    <td className="px-5 py-4">{expense.admin_name}</td>
                    <td className="px-6 py-4">{expense.expense_type_name}</td>
                    <td className="px-5 py-4">
                      {parseFloat(expense.expense_amount).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">{expense.expense_date}</td>
                    <td className="px-6 py-4">{expense.expense_note}</td>
                  </tr>
                );
              })}

            <tr className="border w-full  cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  ">
              <th scope="row" className="px-5 py-4 text-lg ">
                Total Expense Amount
              </th>
              <td></td>
              <td></td>
              <td></td>
              <th className="px-6 py-6 text-lg ">
                {parseFloat(
                  receptionExpenseList.total_expense_amount
                ).toLocaleString()}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportReceptionExpense;
