import React, { useState } from "react";
import UpdateRemaindeLoan from "./UpdateRemaindeLoan.";

const ReceivingLoanModal = ({ show, setShow, loanList, admin_id }) => {
  //bo awaia ka aw se box saro dakani daim update bet

  const [recevingUpdateShow, setRecevingUpdateShow] = useState(false);
  const [loan_to_cash_id, setloan_to_cash_id] = useState();
  const [loan_to_cash_amount, setLoan] = useState("");
  const [loan_to_cash_date, setDate] = useState("");
  const [loan_to_cash_note, setNote] = useState("");
  const [sick_id, setSickId] = useState();
  const [doctor_name, setDoctorName] = useState("");
  const [doctor_id, setDoctor_id] = useState();

  if (!show) return null;
  return (
    <div
      className={`fixed  z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center`}
    >
      <UpdateRemaindeLoan
        onClose={setRecevingUpdateShow}
        isVisible={recevingUpdateShow}
        loan_to_cash_amount={loan_to_cash_amount}
        setLoan={setLoan}
        loan_to_cash_date={loan_to_cash_date}
        setDate={setDate}
        loan_to_cash_note={loan_to_cash_note}
        setNote={setNote}
        sick_id={sick_id}
        doctor_name={doctor_name}
        setDoctor_id={setDoctor_id}
        doctor_id={doctor_id}
        loan_to_cash_id={loan_to_cash_id}
        admin_id={admin_id}
      />

      <div className="mt-4 w-3/4 overflow-x-auto">
        <button
          className="text-white text-3xl text-end hover:text-red-300 ease-0ut delay-100  w-full "
          onClick={() => setShow(false)}
        >
          {" "}
          X{" "}
        </button>

        <div className=" h-[600px] overflow-y-auto bg-white  p-5 rounded-md">
          <h1 className=" text-2xl border-b-2  mb-2 ">Submition </h1>
          <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm shadow-sm rounded-sm text-left text-gray-500 ">
            <thead className="shadow-sm w-full text-md text-white border-2 border-cyan-200 uppercase bg-cyan-500 ">
              <tr>
                <th scope="col" className="px-6 py-3 ">
                  Patient name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Doctor name
                </th>
                <th scope="col" className="px-6 py-3 ">
                  phone
                </th>
                <th scope="col" className="px-6 py-3 ">
                  amount
                </th>
                <th scope="col" className="px-6 py-3">
                  date
                </th>
                <th scope="col" className="px-6 py-3 ">
                  note
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody>
              {loanList.debt_backs &&
                loanList.debt_backs.map((loan, index) => {
                  return (
                    <tr
                      key={index}
                      className="border   select-none hover:bg-sky-100 border-cyan-200  duration-300  "
                    >
                      <td className="px-5 py-4">{loan.sick_name}</td>
                      <td className="px-5 py-4">{loan.doctor_name}</td>
                      <td className="px-5 py-4">{loan.sick_phone}</td>
                      <td className="px-5 py-4">{loan.loan_to_cash_amount}</td>
                      <td className="px-5 py-4">
                        {loan.loan_to_cash_date.slice(0, 10)}
                      </td>
                      <td className="px-6 py-4">{loan.loan_to_cash_note}</td>
                      <td
                        className="px-6 py-4"
                        onClick={() => {
                          setRecevingUpdateShow(true);
                          setLoan(loan.loan_to_cash_amount);
                          setDate(loan.loan_to_cash_date.slice(0, 10));
                          setNote(loan.loan_to_cash_note);
                          setSickId(loan.sick_id);
                          setDoctorName(loan.doctor_name);
                          setDoctor_id(loan.doctor_id);
                          setloan_to_cash_id(loan.loan_to_cash_id);
                        }}
                      >
                        Update
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReceivingLoanModal;
