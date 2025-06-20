import React from "react";


const PatientHistoryModal = ({
  showPatientHistory,
  setShowPatientHistory,
  workType,
  price,
  typeMonye,
  note,
}) => {
  if (!showPatientHistory) return null;
  return (
    <div
      onClick={() => setShowPatientHistory(false)}
      className=" fixed  z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-4 w-3/4 overflow-x-auto">
        <div className=" h-[400px] overflow-y-auto bg-white  p-5 rounded-md">
          <h1 className=" text-2xl   mb-2 ">Details Loan</h1>
          <ul className="pl-1 text-center grid font-bold grid-cols-4 gap-x-3 my-6 bg-white/75 border-b border-b-sky-200 p-2">
            <li>Work Type</li>
            <li>Price</li>
            <li>Type Monye</li>
            <li>note</li>
          </ul>

          <div
            onClick={() => setShowPatientHistory(true)}
            className="  rounded bg-white p-2 mb-3 shadow"
          >
            <ul className="pl-1 text-center grid grid-cols-4 gap-x-3">
              <li>{workType}</li>
              <li>{price} </li>
              <li>{typeMonye}</li>
              <li>{note} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHistoryModal;
