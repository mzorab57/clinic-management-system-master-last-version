import React, { useContext, useState } from 'react'
import GlobalContext from "../../contexts/createContext/context";
import ExponseTypeModal from '../../components/modal/ExponseTypeModal';
import AddExponseTypeModal from '../../components/modal/AddExponseTypeModal';
import ButtonCreate from '../../components/ui/button/ButtonCreate';
import Table from '../../components/ui/table/Table';
import Loader from '../../components/ui/loader/Loader';


const ExpenseType = () => {

    // context for share data
    const { expenseTypeList, searchExpenseType, loader } = useContext(GlobalContext);
    //change input
    const [newExpense_id, set_Expense_id] = useState(0);
    const [newName, setNewName] = useState("");
    //pshan dani modallakan
    const [show, setShow] = useState(false);
    const [addshow, setAddShow] = useState(false);
    // datay (thead , tbody)
    const thead = ["Id", "Expense Type", "Date"]
    const tbody = ["expense_type_name", "expense_type_date"]
    //am change bo aw input naia ka update akren yan delete akren, bo away la naw setState ka tanha awana da bne ka to atawe
    const change = ["expense_type_name", "expense_type_id"]
    const setState = [setNewName, set_Expense_id]

    return (
        <div className="select-none">
            <ExponseTypeModal isVisible={show} onClose={setShow} expense_type_name={newName} setNewName={setNewName} expense_type_id={newExpense_id} />
            <AddExponseTypeModal isAddVisible={addshow} onClose={setAddShow} />
            {loader ? <Loader /> :
                <div className='overflow-auto mx-3 mt-10 bg-white rounded-md p-5 '>
                    <ButtonCreate setAddShow={setAddShow} buttonName="Create Expense Type" />
                    <Table thead={thead} data={expenseTypeList} search={searchExpenseType} tbody={tbody} setState={setState} setShow={setShow} change={change} />
                </div>
            }
        </div>
    )
}

export default ExpenseType;










// am shewaia  ba be bakar henany useContext and useReducer


//const [doctorList, setdoctorList] = useState([]);
// setdoctorList(newDoctorsList);
// useEffect(() => {
//     // load all doctors.
//     const fetchDoctors = async () => {
//         const response = await api.get('/doctor');
//         setdoctorList(response.data);

//     }
//     fetchDoctors();
// }, [])





