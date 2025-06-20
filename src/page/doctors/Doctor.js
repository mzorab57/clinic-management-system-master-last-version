import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import AddDoctorModal from "../../components/modal/AddDoctorModal";
import DoctorModal from "../../components/modal/DoctorModal";
import ButtonCreate from "../../components/ui/button/ButtonCreate";
import Table from "../../components/ui/table/Table";
import Loader from "../../components/ui/loader/Loader";

const Doctors = () => {
  // sort la gawra bo bchuk wa ba pechawa nawa la bchuk bo gawra
  // let sort = doctorList.sort((a, b) => b.doctor_percentage - a.doctor_percentage);

  // context for share data
  const { doctorList, searchDoctor, loader } = useContext(GlobalContext);

  //change input
  const [doctor_id, setDoctor_id] = useState(0);
  const [doctor_name, setDoctor_name] = useState("");
  const [doctor_percentage, setDoctor_percentage] = useState(0);
  const [doctor_password, setDoctor_password] = useState("");



  //pshan dani modallakan
  const [show, setShow] = useState(false);
  const [addshow, setAddShow] = useState(false);
  // datay (thead , tbody)
  const thead = ["Id", "Doctor Name", "Percentage", "Password", "Date"];
  const tbody = [
    "doctor_name",
    "doctor_percentage",
    "doctor_password",
    "doctor_date",
  ];
  //am change bo aw input naia ka update akren yan delete akren, bo away la naw setState ka tanha awana da bne ka to atawe
  const change = [
    "doctor_name",
    "doctor_password",
    "doctor_percentage",
    "doctor_id",
  ];
  const setState = [
    setDoctor_name,
    setDoctor_password,
    setDoctor_percentage,
    setDoctor_id,
  ];

  return (
    <div className="select-none">
      <DoctorModal
        isVisible={show}
        onClose={setShow}
        doctor_name={doctor_name}
        setDoctor_name={setDoctor_name}
        doctor_percentage={doctor_percentage}
        setDoctor_percentage={setDoctor_percentage}
        doctor_password={doctor_password}
        setDoctor_password={setDoctor_password}
        doctor_id={doctor_id}
      />
      <AddDoctorModal
        isAddVisible={addshow}
        onClose={setAddShow}
        doctor_name={doctor_name}
        setDoctor_name={setDoctor_name}
        doctor_percentage={doctor_percentage}
        setDoctor_percentage={setDoctor_percentage}
        doctor_password={doctor_password}
        setDoctor_password={setDoctor_password}
      />
      {loader ? (
        <Loader />
      ) : (
        <div className=" bg-white overflow-auto mx-3  mt-10 rounded-md  p-5 ">
          <ButtonCreate setAddShow={setAddShow} buttonName="Create Doctor" />
          <Table
            thead={thead}
            data={doctorList}
            search={searchDoctor}
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

export default Doctors;
