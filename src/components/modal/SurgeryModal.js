import React, { useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonUpdate from "../ui/button/ButtonUpdate";
import ButtonDelete from "../ui/button/ButtonDelete";
import Modal from "../ui/modal/Modal";

const SurgeryModal = ({
  isVisible,
  onClose,
  surgery_type_name,
  setSurgey_name,
  surgery_type_price,
  setSurgey_price,
  surgery_type_id,
}) => {
  const { updateSurgery, deleteSurgery } = useContext(GlobalContext);
  console.log(surgery_type_price);

  // update surgery.
  const updateDoctorHandler = (e) => {
    e.preventDefault();
    updateSurgery({ surgery_type_name, surgery_type_price, surgery_type_id });
  };
  // delete work type
  const deletee = (e) => {
    e.preventDefault();
    deleteSurgery(surgery_type_id);
  };

  const handelSurgeryPrice = (price) => {
    if (price >= 0) {
      setSurgey_price(price);
    }
  };

  if (!isVisible) return null;
  return (
    <Modal>
      <div className="w-[400px] flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose(false)}
        >
          {" "}
          X{" "}
        </button>
        <div className=" bg-white rounded-md p-5 grid">
          <label className="text-gray-500">Working Type</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(val) => setSurgey_name(val.target.value)}
            value={surgery_type_name}
            placeholder="Name"
            className="focus:ring-1 mt-1 focus:outline-none rounded border mb-3  p-2"
          />
          <label className="text-gray-500">Price</label>
          <input
            type="number"
            autoComplete="off"
            onChange={(val) => handelSurgeryPrice(val.target.value)}
            value={surgery_type_price}
            placeholder="0.00"
            className="focus:ring-1 mt-1 focus:outline-none rounded border mb-3  p-2"
          />

          <div className="flex justify-between">
            <ButtonUpdate update={updateDoctorHandler} onClose={onClose} />
            <ButtonDelete deleteRow={deletee} onClose={onClose} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SurgeryModal;
