import React from "react";

const TableBody = ({ data, search, tbody, setState, change, setShow }) => {
  return (
    <tbody>
      {search(data).map((data, index) => {
        return (
          <tr
            key={index}
            // setState[index] wata setNewName(), wa data[name] wata data.doctor_name hamui abe ba setNewName(data.doctor_name)..... bo awani trish har waya
            onClick={() => {
              setShow(true);
              change &&
                change.map((name, index) => setState[index](data[name]));
            }}
            className="border cursor-pointer select-none hover:bg-sky-100 border-cyan-200  duration-300  "
          >
            <th scope="row" className="px-5 py-4">
              &nbsp;&nbsp;{index + 1}
            </th>
            {tbody.map((body, index) => {
              // bo katek btawe fariza habe am coda dane => parseFloat(data[body])
              // && (body.slice(body.length - 2) !== "te")===> am pointa bo away date kan kazhmaraya naikat ba fariza
              // ? parseFloat(data[body]).toLocaleString() : data[body]
              return (
                <td key={index} className="px-6 py-4">
                  {parseFloat(data[body]) &&
                  body.slice(body.length - 2) !== "te" &&
                  body.slice(body.length - 2) !== "rd" &&
                  body.slice(body.length - 7) !== "pe_name"
                    ? parseFloat(data[body]).toLocaleString()
                    : data[body]}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
