import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ExpenseModal from "../../components/modal/ExpenseModal";
import AddExpenseModal from "../../components/modal/AddExpenseModal";
import ButtonCreate from "../../components/ui/button/ButtonCreate";
import Table from "../../components/ui/table/Table";
import Loader from "../../components/ui/loader/Loader";

const Expense = () => {
  const { expenseList, searchExpense, loader } = useContext(GlobalContext);

  //bo garanaway nawi expenseTypeList
  // const eid = expenseTypeList.map(expense => expense.expense_type_id)
  // const en = expenseTypeList.map(expense => expense.expense_type_name)

  const [expense_type_name, set_expense_type_name] = useState("");
  const [expense_id, set_expense_id] = useState(0);
  const [expense_type_id, set_new_expense_type_id] = useState(0);
  const [expense_amount, set_new_expense_amount] = useState(0);
  const [admin_id, set_new_admin_id] = useState(0);
  const [expense_note, set_new_expense_note] = useState("");

  const [show, setShow] = useState(false);
  const [addshow, setAddShow] = useState(false);

  // datay (thead , tbody)
  const thead = ["Id", "Expense Type", "Amount", "Date", "Not"];
  const tbody = [
    "expense_type_name",
    "expense_amount",
    "expense_date",
    "expense_note",
  ];
  //am change bo aw input naia ka update akren yan delete akren, bo away la naw setState ka tanha awana da bne ka to atawe
  const change = [
    "expense_type_name",
    "expense_amount",
    "expense_note",
    "expense_id",
    "expense_type_id",
    "admin_id",
  ];
  const setState = [
    set_expense_type_name,
    set_new_expense_amount,
    set_new_expense_note,
    set_expense_id,
    set_new_expense_type_id,
    set_new_admin_id,
  ];

  return (
    <div className="select-none">
      <ExpenseModal
        isVisible={show}
        onClose={setShow}
        expense_type_name={expense_type_name}
        set_expense_type_name={set_expense_type_name}
        expense_id={expense_id}
        expense_type_id={expense_type_id}
        set_new_expense_type_id={set_new_expense_type_id}
        expense_amount={expense_amount}
        set_new_expense_amount={set_new_expense_amount}
        admin_id={admin_id}
        set_new_admin_id={set_new_admin_id}
        expense_note={expense_note}
        set_new_expense_note={set_new_expense_note}
      />
      <AddExpenseModal isAddVisible={addshow} onClose={setAddShow} />
      {loader ? (
        <Loader />
      ) : (
        <div className="overflow-auto mx-3 mt-10 bg-white rounded-md p-5">
          <ButtonCreate setAddShow={setAddShow} buttonName="Create Expense" />
          <Table
            thead={thead}
            data={expenseList}
            search={searchExpense}
            tbody={tbody}
            setState={setState}
            setShow={setShow}
            change={change}
          />
        </div>
      )}
    </div>
  );
};

export default Expense;
