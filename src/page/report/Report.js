import React, { useContext, useState } from "react";
import ReportInput from "./ReportInput";
import ReportAll from "./ReportAll";
import GlobalContext from "../../contexts/createContext/context";
import Loader from "../../components/ui/loader/Loader";

const Report = () => {
  const { loader } = useContext(GlobalContext);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [erorFrom, setErorFrom] = useState(false);
  const [erorTo, setErorTo] = useState(false);
  const [erordoctorid, setErorDoctorid] = useState(false);
  const [erorsickid, setErorsickid] = useState(false);
  // const [doctor_id, setDoctor_id] = useState(0);
  const [sick_id, setSick_id] = useState(0);
  // const [admin_id, setAdmin_id] = useState(0);
  const [erorAdminId, setErorAdminId] = useState(0);
  const [expense_type_id, setExpenseType_id] = useState(0);
  const [working_type_id, setWorkingType_id] = useState(0);


   const user = localStorage.getItem("data");
  let doctor_id = user && JSON.parse(user).token;
  let admin_id = user && JSON.parse(user).token;

  return (
    <div className="flxe flex-col px-3">
      {loader ? (
        <Loader />
      ) : (
        <>
          <ReportInput
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
            doctor_id={doctor_id}
            // setDoctor_id={setDoctor_id}
            expense_type_id={expense_type_id}
            setExpenseType_id={setExpenseType_id}
            setWorkingType_id={setWorkingType_id}
            erorFrom={erorFrom}
            erorTo={erorTo}
            erordoctorid={erordoctorid}
            erorsickid={erorsickid}
            sick_id={sick_id}
            setSick_id={setSick_id}
            erorAdminId={erorAdminId}
            admin_id={admin_id}
            // setAdmin_id={setAdmin_id}
          />

          <ReportAll
            from={from}
            to={to}
            doctor_id={doctor_id}
            expense_type_id={expense_type_id}
            working_type_id={working_type_id}
            setErorFrom={setErorFrom}
            setErorTo={setErorTo}
            setErorDoctorid={setErorDoctorid}
            sick_id={sick_id}
            setErorsickid={setErorsickid}
            admin_id={admin_id}
            setErorAdminId={setErorAdminId}
          />
        </>
      )}
    </div>
  );
};

export default Report;
