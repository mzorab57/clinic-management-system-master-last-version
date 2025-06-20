import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import AddSurgeryModal from "../../components/modal/AddSurgeryModal";
import SurgeryModal from "../../components/modal/SurgeryModal";
import ButtonCreate from "../../components/ui/button/ButtonCreate";
import Table from "../../components/ui/table/Table";
import Loader from "../../components/ui/loader/Loader";

const SurgeryType = () => {
  // context for share data
  const { surgeryType, searchSurgeryType, loader } = useContext(GlobalContext);
  //change input
  const [surgery_type_id, setSurgery_type_id] = useState(0);
  const [surgery_type_name, setSurgey_name] = useState("");
  const [surgery_type_price, setSurgey_price] = useState(0);
  //pshan dani modallakan
  const [show, setShow] = useState(false);
  const [addshow, setAddShow] = useState(false);
  // datay (thead , tbody)
  const thead = ["Id", "work type name", "work type price", "Date"];
  const tbody = [
    "surgery_type_name",
    "surgery_type_price",
    "surgery_type_date",
  ];
  //am change bo aw input naia ka update akren yan delete akren, bo away la naw setState ka tanha awana da bne ka to atawe
  const change = ["surgery_type_name", "surgery_type_price", "surgery_type_id"];
  const setState = [setSurgey_name, setSurgey_price, setSurgery_type_id];

  return (
    <div className="select-none ">
      <div>
        <SurgeryModal
          isVisible={show}
          onClose={setShow}
          surgery_type_name={surgery_type_name}
          setSurgey_name={setSurgey_name}
          surgery_type_price={surgery_type_price}
          setSurgey_price={setSurgey_price}
          surgery_type_id={surgery_type_id}
        />
        <AddSurgeryModal isAddVisible={addshow} onClose={setAddShow} />
        {loader ? (
          <Loader />
        ) : (
          <div className="mx-3 mt-10 bg-white overflow-auto rounded-md  p-5  ">
            <ButtonCreate
              setAddShow={setAddShow}
              buttonName="Create Working Type"
            />
            <Table
              thead={thead}
              data={surgeryType}
              search={searchSurgeryType}
              tbody={tbody}
              setState={setState}
              setShow={setShow}
              change={change}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SurgeryType;

// am shewaia  ba be bakar henany useContext and useReducer

//const [surgeryType, setsurgeryType] = useState([]);
// setsurgeryType(newsurgerysList);
// useEffect(() => {
//     // load all surgerys.
//     const fetchsurgerys = async () => {
//         const response = await api.get('/surgery');
//         setsurgeryType(response.data);

//     }
//     fetchsurgerys();
// }, [])
