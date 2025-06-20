import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ thead, data, search, tbody, setState, change, setShow }) => {
  return (
    <table className="whitespace-nowrap w-full bg-white overflow-hidden text-sm 2xl:text-lg shadow-sm rounded-sm text-left text-gray-500 ">
      <TableHead thead={thead} />
      <TableBody
        data={data}
        search={search}
        tbody={tbody}
        setState={setState}
        change={change}
        setShow={setShow}
      />
    </table>
  );
};

export default Table;
