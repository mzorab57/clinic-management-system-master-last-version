import React, { useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonUpdate from "../ui/button/ButtonUpdate";
import ButtonDelete from "../ui/button/ButtonDelete";
import Modal from "../ui/modal/Modal";

const ExpenseModal = ({
  isVisible,
  onClose,
  expense_type_name,
  expense_id,
  expense_type_id,
  set_new_expense_type_id,
  expense_amount,
  set_new_expense_amount,
  admin_id,
  expense_note,
  set_new_expense_note,
}) => {
  const { updateExpense, deleteExpense, expenseTypeList } =
    useContext(GlobalContext);

  // update exponse type.
  const updateExpenseHandler = (e) => {
    e.preventDefault();
    updateExpense({
      expense_id,
      expense_type_id,
      expense_amount,
      admin_id,
      expense_note,
    });
  };

  // delete expense
  const deletee = (e) => {
    e.preventDefault();
    deleteExpense(expense_id);
  };

  const handelAmountExpense = (amount) => {
    if (amount >= 0) {
      set_new_expense_amount(amount);
    }
  };
  if (!isVisible) return null;
  return (
    <Modal>
      <div className="w-[550px] mx-3 flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose(false)}>X</button>
        
        <form
          onSubmit={(e) => {
            updateExpenseHandler(e);
            onClose(false);
          }}
          className=" bg-white rounded-md p-5 grid "
        >
          <div className="md:flex grid">
            <div className="md:w-3/4 w-full md:mr-5">
              <label className="text-gray-500">ExpenseType</label>
              <select
                required
                onChange={(val) => set_new_expense_type_id(val.target.value)}
                className="w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2 "
              >
                <option>{expense_type_name}</option>
                {expenseTypeList &&
                  expenseTypeList.map((expenseType) => {
                    return (
                      <option
                        key={expenseType.expense_type_id}
                        value={`${expenseType.expense_type_id}`}
                      >
                        {expenseType.expense_type_name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="md:w-1/3 w-full">
              <label className="text-gray-500">Amount</label>
              <input
                type="number"
                autoComplete="off"
                min="0"
                onChange={(val) => handelAmountExpense(val.target.value)}
                value={expense_amount}
                placeholder="0.00"
                className="w-full focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2"
              />
            </div>
          </div>

          <label className="text-gray-500">Note</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(val) => set_new_expense_note(val.target.value)}
            value={expense_note}
            placeholder="Note"
            className="focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2"
          />

          <div className="flex justify-between">
            <ButtonUpdate update={updateExpenseHandler} onClose={onClose} />
            <ButtonDelete deleteRow={deletee} onClose={onClose} />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ExpenseModal;
