import React, { useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonUpdate from "../ui/button/ButtonUpdate";
import ButtonDelete from "../ui/button/ButtonDelete";
import Modal from "../ui/modal/Modal";


 
  const UpdateRemaindeLoan = ({ isVisible, onClose,loan_to_cash_id, loan_to_cash_amount,setLoan, loan_to_cash_date, setDate,loan_to_cash_note, setNote, sick_id,  setDoctor_id, doctor_id,admin_id }) => {
  const { updateRemaindeLoan, deleteRemaindeLoan, doctorList } = useContext(GlobalContext);


  // update exponse type.
  const update = (e) => {
    e.preventDefault();
 updateRemaindeLoan({ loan_to_cash_amount, loan_to_cash_id, doctor_id, sick_id, loan_to_cash_date, loan_to_cash_note, admin_id });
  };

  // delete expensetype
  const deletee = (e) => {
    e.preventDefault();
    deleteRemaindeLoan(loan_to_cash_id);
  };

  if (!isVisible) return null;

  return (
    <Modal>
    <div className="w-[550px] flex flex-col">
      <button
        className="text-white text-xl place-self-end "
        onClick={() => onClose(false)}
      >
        X
      </button>
      <div
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
                 value={loan_to_cash_amount || ' '}
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
            value={loan_to_cash_date || ' '}
            className={`bg-white ${
              loan_to_cash_date ? "text-gray-600" : "text-gray-400"
            }  focus:ring-1 focus:outline-none  border pl-2 p-1.5 2xl:p-3 w-full  rounded  shadow-black/10`}
          />
           <label className="text-black 2xl:text-xl mt-3">Doctor Name</label>
              <select
              required
              value={doctor_id || ''}
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
             value={loan_to_cash_note || ''}
            className={`bg-white ${
              loan_to_cash_note ? "text-gray-600" : "text-gray-400"
            }  focus:ring-1 focus:outline-none  border mb-3 pl-2 p-1.5 2xl:p-3 w-full  rounded  shadow-black/10`}
          />

        {/* update and delete */}
      </div>
          <div className="flex justify-between">
            <ButtonUpdate update={update} onClose={onClose} />
            <ButtonDelete deleteRow={deletee} onClose={onClose} />
          </div>
        </div>

    </div>
  </Modal>
  );
};

export default UpdateRemaindeLoan;
