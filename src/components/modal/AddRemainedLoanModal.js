import React, { useContext, useState } from "react";
import Modal from "../../components/ui/modal/Modal";
import { useLocation } from "react-router-dom";
import GlobalContext from "../../contexts/createContext/context";
import ButtonAdd from "../ui/button/ButtonAdd";

const AddRemainedLoanModal = ({ isAddVisible, onClose }) => {
  const { addLoan, doctorList } = useContext(GlobalContext);

  // bo war grtnaway admin_id
  const getIdAdmin = localStorage.getItem("data");
  let admin_id = JSON.parse(getIdAdmin).token;

  // bo war grtnaway sick_id
  const location = useLocation();
  let sick_id = location.state.sick_id;
  

  const [loan_to_cash_amount, setLoan] = useState(0);
  const [loan_to_cash_date, setDate] = useState("");
  const [loan_to_cash_note, setNote] = useState("");
  const [doctor_id, setDoctor_id] = useState(0);

  
  const loanHandler = (e) => {
    e.preventDefault();
    console.log(`amount ${loan_to_cash_amount} sickid ${sick_id} doctor_id ${doctor_id}  adminid ${admin_id} loandate ${loan_to_cash_date} note ${loan_to_cash_note} `);

    addLoan({
      loan_to_cash_amount,
      sick_id,
      doctor_id,
      admin_id,
      loan_to_cash_date,
      loan_to_cash_note,
    });
    setLoan(0);
    setDate("");
    setNote("");
    setDoctor_id(0);
  };

  if (!isAddVisible) return null;
  return (
    <Modal>
      <div className="w-[550px] flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose(false)}
        >
          X
        </button>
        <form
          onSubmit={(e) => {
            loanHandler(e);
            onClose(false);
          }}
          className=" bg-white rounded-md  grid p-3"
        >
          <div className=" bg-white rounded-md p-3 grid ">
            <div className="flex">
              <div className="w-full ">
                <label className="text-black  2xl:text-xl">Loan Amount</label>
                <input
                  type="number"
                  required
                  min="1"
                  onChange={(e) => setLoan(e.target.value)}
                  // value={from}
                  placeholder="0.00"
                  className={`bg-white placeholder-gray-400 focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded  shadow-black/10`}
                />
              </div>
            </div>

            <label className="text-black 2xl:text-xl mt-3">Loan Date</label>
            <input
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
              // value={from}
              className={`bg-white ${
                loan_to_cash_date ? "text-gray-600" : "text-gray-400"
              }  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded  shadow-black/10`}
            />

            {/*  slected doctor name */}
             <label className="text-black 2xl:text-xl mt-3">Doctor Name</label>
                <select
                required
                onChange={(e) => {
                  setDoctor_id(e.target.value);
                  
                }}
                className="bg-white placeholder-gray-400 focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded  shadow-black/10 "
              >
                <option></option>
                {doctorList.map((doctor) => {
                  return (
                    <option
                      key={doctor.doctor_id}
                      value={`${doctor.doctor_id}`}
                    >
                      {doctor.doctor_name}
                    </option>
                  );
                })}
              </select>

            <label className="text-black mt-3">Note</label>
            <input
              type="text"
              placeholder="Note"
              onChange={(e) => setNote(e.target.value)}
              // value={from}
              className={`bg-white ${
                loan_to_cash_note ? "text-gray-600" : "text-gray-400"
              }  focus:ring-1 focus:outline-none  border mb-3 pl-2 p-1.5 2xl:p-3 w-full  rounded  shadow-black/10`}
            />

            {/* zya Remained Loan */}
            <ButtonAdd add="Add Remained Loan" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddRemainedLoanModal;
