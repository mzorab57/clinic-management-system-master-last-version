import React from "react";

const ButtonUpdate = ({ update, onClose }) => {
  return (
    <button
      type="submit"
      onClick={(e) => {
        update(e);
        onClose(false);
      }}
      className="border rounded-md bg-cyan-500 hover:bg-cyan-400 text-white px-8 p-1.5 my-2"
    >
      Update
    </button>
  );
};

export default ButtonUpdate;
