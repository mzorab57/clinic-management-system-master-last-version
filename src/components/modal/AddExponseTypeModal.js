import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonAdd from "../ui/button/ButtonAdd";
import Modal from "../ui/modal/Modal";

const ExponseTypeModal = ({ isAddVisible, onClose }) => {
  const { addExpenseType } = useContext(GlobalContext);

  const [expense_type_name, set_expense_type_name] = useState("");
  let expense_type_date = new Date().toISOString().slice(0, 10);
  // update exponse type.
  const createExpenseTypeHandler = (e) => {
    e.preventDefault();
    addExpenseType({ expense_type_name, expense_type_date });
    set_expense_type_name("");
  };

  if (!isAddVisible) return null;
  return (
    <Modal>
      <div className="w-[500px] mx-3 flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose(false)}>X</button>
        
        
        <form
          onSubmit={(e) => {
            createExpenseTypeHandler(e);
            onClose(false);
          }}
          className=" bg-white rounded-md  grid "
        >
          <div className=" bg-white rounded-md p-3 grid ">
            <label className="text-gray-500">Expense type</label>
            <input
              type="text"
              autoComplete="off"
              onChange={(val) => set_expense_type_name(val.target.value)}
              value={expense_type_name}
              placeholder="Name"
              required
              className="focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2"
            />

            {/* zya krdni Expense Type */}
            <ButtonAdd add="Add Expense Type" />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ExponseTypeModal;
