import React, { useState, useContext } from "react";
import GlobalContext from "../../contexts/createContext/context";
import ButtonAdd from "../ui/button/ButtonAdd";
import Modal from "../ui/modal/Modal";

const AddSurgeryModal = ({ isAddVisible, onClose }) => {
  const { addSurgeryType } = useContext(GlobalContext);
  const [surgery_type_name, setSurgery_type_name] = useState("");
  const [surgery_type_price, setSurgery_type_price] = useState(0);

  let surgery_type_date = new Date().toISOString().slice(0, 10);

  // add doctor.
  const addSurgeryHandler = (e) => {
    e.preventDefault();
    addSurgeryType({
      surgery_type_name,
      surgery_type_price,
      surgery_type_date,
    });
  };

  if (!isAddVisible) return null;

  return (
    <Modal>
      <div className="w-[600px] mx-3 flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose(false)}     >X </button>
   
        <form
          onSubmit={(e) => {
            addSurgeryHandler(e);
            onClose(false);
          }}
          className=" bg-white rounded-md p-5 grid"
        >
          
          <div className="flex flex-col  mb-3">
            <div className="w-full mr-5">
              <label className="text-gray-500">Working Type</label>
              <input
                type="text"
                name="surgery_type_name"
                autoComplete="off"
                placeholder="Name"
                required
                className="w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2"
                onChange={(e) => setSurgery_type_name(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="text-gray-500">Price</label>
              <input
                type="number"
                name="surgery_type_price"
                autoComplete="off"
                placeholder="0.00"
                required
                min="0"
                className="w-full focus:ring-1 focus:outline-none rounded border  mt-2 mb-3 p-2"
                onChange={(e) => setSurgery_type_price(e.target.value)}
              />
            </div>
          </div>

          {/* zya krdni Working Type */}
          <ButtonAdd add="Add Working Type" />
        </form>
      </div>
    </Modal>
  );
};

export default AddSurgeryModal;
