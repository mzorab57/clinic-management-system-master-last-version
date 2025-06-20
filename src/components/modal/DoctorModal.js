import React, { useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonUpdate from "../ui/button/ButtonUpdate";
import ButtonDelete from "../ui/button/ButtonDelete";

const Modal = ({
  isVisible,
  onClose,
  doctor_name,
  setDoctor_name,
  doctor_percentage,
  setDoctor_percentage,
  doctor_password,
  setDoctor_password,
  doctor_id,
}) => {
  const { updateDoctor, deleteDoctor } = useContext(GlobalContext);

  // update doctor.
  const updateDoctorHandler = (e) => {
    e.preventDefault();
    updateDoctor({
      doctor_name,
      doctor_password,
      doctor_percentage,
      doctor_id,
    });
  };

  // delete doctor
  const deletee = (e) => {
    e.preventDefault();
    deleteDoctor(doctor_id);
  };

  // handelDoctorPersentage doctor bo away zhmaray salb u gawratr la 100 daxl naka
  const handelDoctorPersentage = (persentage) => {
    if (persentage >= 0 && persentage <= 100) {
      setDoctor_percentage(persentage);
    }
  };

  if (!isVisible) return null;
  return (
    <div className=" fixed z-20 px-3 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose(false)}
        >
          {" "}
          X{" "}
        </button>
        <div className=" bg-white rounded-md p-5 grid ">
          <label className="text-gray-500">Name</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(val) => setDoctor_name(val.target.value)}
            value={doctor_name}
            placeholder="new name"
            className="focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2"
          />

          <label className="mt-2 text-gray-500">Password</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(val) => setDoctor_password(val.target.value)}
            value={doctor_password}
            placeholder="new password"
            className="focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2"
          />

          <label className="mt-2 text-gray-500">Percentage</label>
          <input
            type="number"
            autoComplete="off"
            onChange={(val) => handelDoctorPersentage(val.target.value)}
            value={doctor_percentage}
            placeholder="%"
            min="0"
            max="100"
            className="focus:ring-1 focus:outline-none rounded border mb-3 mt-2 p-2"
          />

          <div className="flex justify-between">
            <ButtonUpdate update={updateDoctorHandler} onClose={onClose} />
            <ButtonDelete deleteRow={deletee} onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
