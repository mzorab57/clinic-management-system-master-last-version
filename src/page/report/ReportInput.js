import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";

const ReportInput = ({
  from,
  to,
  setFrom,
  setTo,
  erorFrom,
  erorTo,
  setWorkingType_id,
  setDoctor_id,
  doctor_id,
  erordoctorid,
  setExpenseType_id,
  setSick_id,
  sick_id,
  erorsickid,
  erorAdminId,
  admin_id,
  setAdmin_id,
}) => {
  const { doctorList, expenseTypeList, surgeryType, sickList, userList } =
    useContext(GlobalContext);

  const [sick_name, setSick_name] = useState("");

  const user = localStorage.getItem("data");
  let role = user && JSON.parse(user).role;

  return (
    <div className=" mt-8 ">
      <div className="bg-white rounded-md p-5  ">
        <form className="grid  md:grid-cols-4 gap-3">
          {/* doctor input */}
          <div className={`${role === "reception" || role === "doctor" ? "hidden" : "w-full"}`}>
            <label className="text-gray-600 text-base 2xl:text-lg ">
              Doctor
            </label>
            <select
              required
              onChange={(e) => {
                setDoctor_id(e.target.value);
              }}
              className={`${
                !doctor_id && !erordoctorid
                  ? "bg-white"
                  : !doctor_id && " border-red-400 border-2 bg-red-50"
              }focus:ring-2 mt-1 focus:outline-none border  pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`}
            >
              <option value={0} className={`text-xs text-gray-500`}>
                Select
              </option>
              {doctorList &&
                doctorList.map((doctor) => {
                  return (
                    <option
                      key={doctor.doctor_id}
                      value={`${doctor.doctor_id}`}
                    >
                      {doctor.doctor_name}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* user input */}
          <div
            className={`${
              role === "admin" || role === "doctor" || role === "reception" ? "hidden" : "w-full"
            }`}
          >
            <label className="text-gray-600 text-base 2xl:text-lg ">
              Admin
            </label>
            <select
              required
              onChange={(e) => {
                setAdmin_id(e.target.value);
              }}
              className={`${
                !admin_id && !erorAdminId
                  ? "bg-white"
                  : !admin_id && " border-red-400 border-2 bg-red-50"
              }focus:ring-2 mt-1 focus:outline-none border  pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`}
            >
              <option value={0} className={`text-xs text-gray-500`}>
                Select
              </option>
              {userList &&
                userList.map((admin) => {
                  return (
                    <option key={admin.admin_id} value={`${admin.admin_id}`}>
                      {admin.admin_name}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* ExpenseType input */}
          <div className={`${role === "doctor" || role === "admin"   ? "hidden" : "w-full"}`}>
            <label className="text-gray-600 text-base 2xl:text-lg">
              Expense Type
            </label>
            <select
              required
              onChange={(val) => setExpenseType_id(val.target.value)}
              className="focus:ring-2 mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10 "
            >
              <option value={0} className="text-xs text-gray-500">
                Select
              </option>
              {expenseTypeList &&
                expenseTypeList.map((expenseType) => {
                  return (
                    <option
                      key={expenseType.expense_type_id}
                      value={`${expenseType.expense_type_id}`}
                    >
                      {expenseType.expense_type_name}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* Working type input */}
          <div
            className={`${
              role === "reception" || role === "doctor" || role === "admin" ? "hidden" : "w-full"
            }`}
          >
            <label className="text-gray-600 text-base 2xl:text-lg">
              Working Type
            </label>
            <select
              required
              onChange={(val) => {
                setWorkingType_id(val.target.value);
              }}
              className="focus:ring-2 mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10 "
            >
              <option value={0} className="text-xs text-gray-500">
                Select
              </option>
              {surgeryType &&
                surgeryType.map((surgeryType) => {
                  return (
                    <option
                      key={surgeryType.surgery_type_id}
                      value={`${surgeryType.surgery_type_id}`}
                    >
                      {surgeryType.surgery_type_name}
                    </option>
                  );
                })}
            </select>
          </div>

          {/* sick name */}
          <div
            className={`${
              role === "reception"
                ? "hidden"
                : "flex flex-col w-full  rounded-md  "
            }`}
          >
            
            <label className="text-gray-700 ">Ptient name</label>
            <input
              type="text"
              required
              placeholder="Ptient search"
              value={sick_name || ""}
              onChange={(e) => setSick_name(e.target.value)}
              autoComplete="off"
              // onFocus={() => set_showError(false)}
              className={`${
                !sick_id && !erorsickid
                  ? "bg-white"
                  : !sick_id && " border-red-400 border-2 bg-red-50"
              } focus:ring-2  mt-1 focus:outline-none border  pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`}
            />

            {sickList &&
              sickList
                .filter((itme) => {
                  const search = sick_name.toLowerCase();
                  const sickName = itme.sick_name.toLowerCase();
                  return (
                    search && sickName.startsWith(search) && sickName !== search
                  );
                })
                // limit aka tanha 3 dana law naaway search bo aaki pshani ada
                .slice(0, 5)
                .map((itme) => {
                  return (
                    <ul
                      key={itme.sick_id}
                      className=" cursor-pointer  bg-white hover:bg-sky-500  hover:text-white"
                      onClick={() => {
                        setSick_name(itme.sick_name);
                        setSick_id(itme.sick_id);
                        // setDoctor_id(itme.doctor_id);
                      }}
                    >
                      <li className="border-r border-l pl-2  ">
                        {itme.sick_name}
                      </li>
                    </ul>
                  );
                })}
          </div>

          {/** from input */}
          <div className="w-full">
            <label className="text-gray-600  text-base 2xl:text-lg">From</label>
            <input
              type="date"
              name="from"
              required
              onChange={(e) => setFrom(e.target.value)}
              value={from}
              className={`bg-white ${
                !from && !erorFrom
                  ? "bg-white"
                  : !from && " border-red-400 border-2 bg-red-50"
              }  mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`}
            />
          </div>

          {/** to input */}
          <div className="w-full ">
            <label className="text-gray-600 mr-2 text-base 2xl:text-lg">
              To
            </label>
            <input
              type="date"
              name="to"
              required
              onChange={(e) => setTo(e.target.value)}
              value={to}
              className={`bg-white ${
                !to && !erorTo
                  ? "bg-white"
                  : !to && " border-red-400 border-2 bg-red-50"
              }  mt-1 focus:outline-none border pl-2 p-1 2xl:p-3 w-full  rounded shadow-sm shadow-black/10`}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportInput;
