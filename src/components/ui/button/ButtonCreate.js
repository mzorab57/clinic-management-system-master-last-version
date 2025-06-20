import React from "react";

const ButtonCreate = ({ setAddShow, buttonName }) => {
  const user = localStorage.getItem("data");
  let role = user && JSON.parse(user).role;

  return (
    <div>
      {role !== "doctor" && (
        <div className="place-self-start">
          <button
            onClick={() => setAddShow(true)}
            className={`
                     text-white shadow-sm flex items-center shadow-gray-300 border mb-2 
                      hover:text-cyan-400 border-cyan-300 h-fit p-1 2xl:text-xl px-9 rounded-md bg-cyan-500 hover:bg-transparent duration-200`}
          >
            {buttonName}
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonCreate;
