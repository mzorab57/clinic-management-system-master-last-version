import React, { useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonAdd from "../ui/button/ButtonAdd";
import Modal from "../ui/modal/Modal";

const AddModal = ({
  isAddVisible,
  onClose,
  doctor_name,
  setDoctor_name,
  doctor_percentage,
  setDoctor_percentage,
  doctor_password,
  setDoctor_password,
}) => {
  const { addDoctor } = useContext(GlobalContext);

  let doctor_date = new Date().toISOString().slice(0, 10);

  // add doctor.
  const addDoctorHandler = (e) => {
    e.preventDefault();
    addDoctor({ doctor_name, doctor_password, doctor_percentage, doctor_date });
  };

  if (!isAddVisible) return null;
  return (
    <Modal>
      <div className=" w-full  flex flex-col justify-center items-center px-3 ">
       
      
        <form
          onSubmit={(e) => {
            addDoctorHandler(e);
            onClose(false);
          }}
          className=" bg-white rounded-md md:w-[600px] w-full    flex flex-col  p-5"
        >
           <button
          className="text-red-400 text-xl place-self-end  "
          onClick={() => onClose(false)}>X </button>

          <div className="grid md:flex md:justify-between w-full">
            <div className="relative w-full md:w-3/4 md:mr-3">
              <label className="text-gray-500 ">Name</label>
              <input
                type="text"
                name="doctor_name"
                autoComplete="off"
                placeholder="Dr.name"
                required
                className=" block   w-full focus:ring-1 focus:outline-none rounded border mb-3 2xl:mb-0 mt-2 p-2 "
                onChange={(val) => setDoctor_name(val.target.value)}
              />
            </div>
            <div className="w-full md:w-1/3">
              <label className="text-gray-500 ">Percentage</label>
              <input
                type="number"
                name="doctor_percentage"
                autoComplete="off"
                placeholder="%"
                required
                min="0"
                max="100"
                className="block   w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 2xl:mb-0 p-2 "
                onChange={(val) => setDoctor_percentage(val.target.value)}
              />
            </div>
          </div>

          <div className="relative w-full mt-2">
            <label className="text-gray-500 ">Password</label>
            <input
              type="password"
              autoComplete="off"
              placeholder="password"
              required
              className=" block   w-full focus:ring-1 focus:outline-none rounded border mb-3 2xl:mb-0 p-2 "
              onChange={(val) => setDoctor_password(val.target.value)}
            />
          </div>
          <ButtonAdd add="Add Doctor" />
        </form>
      </div>
    </Modal>
  );
};
export default AddModal;
