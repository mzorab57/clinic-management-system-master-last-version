import React, { useContext, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import { VscAdd } from "react-icons/vsc";
import uuid from "react-uuid";
import { useLocation } from "react-router-dom";
import DetailTypeOfWorkModal from "./DetailTypeOfWorkModal";
import DetailViewImageModal from "./DetailViewImageModal";
import Modal from "../ui/modal/Modal";

const SurgeryTypeModal = ({
  isVisible,
  onClose,
  sick_surgery_id,
  invoiceImage,
  setinvoiceImage,
  invoice,
  setinvoice,
  idUpdate,
}) => {
  const { surgeryType, deletSickSurgery, UpdateSickSurgery } =
    useContext(GlobalContext);
  const location = useLocation();

  const [surgery_type_id, set_surgery_type_id] = useState(0);
  const [surgery_type_name, set_surgery_type_name] = useState("");
  const [surgery_type_price, set_surgery_type_price] = useState();
  const [sick_surgery_invoice_note, set_sick_surgery_invoice_note] =
    useState("");
  const [showError, set_showError] = useState(false);
  // file image kan
  const [file, setFile] = useState([]);
  // id doctor
  // let doctor_id = sickList.map(sick => sick.sick_id === location.state && sick.doctor_id).filter(f => f !== false)
  const user = localStorage.getItem("data");
  let token = user && JSON.parse(user).token;

  //sick_id
  let sick_id = location.state;
  // to day
  let sick_surgery_date = new Date().toISOString().slice(0, 10);

  const onSearch = (search, id) => {
    set_surgery_type_name(search);
    surgeryType &&
      surgeryType.map((item) => {
        if (item.surgery_type_id === id) {
          set_surgery_type_price(item.surgery_type_price);
        }
        return null;
      });
  };

  // uuid for delte surgery type in table add new work
  const newWork = (e) => {
    e.preventDefault();
    if (surgery_type_id === 0) {
      set_showError(true);
    } else {
      setinvoice([
        ...invoice,
        {
          sick_surgery_id: uuid(),
          surgery_type_id,
          surgery_type_price,
          sick_surgery_invoice_note,
        },
      ]);
      set_surgery_type_id(0);
      set_surgery_type_name("");
      set_surgery_type_price("");
      set_sick_surgery_invoice_note("");
    }
  };

  const clickAddWork = (e) => {
    e.preventDefault();

    let formData = new FormData();
    let dfile = file;
    if (!(file.length === 0)) {
      dfile = file.target.files;
    }
    console.log(dfile);
    for (let i = 0; i < dfile.length; i++) {
      formData.append("file[]", dfile[i]);
    }

    formData.append("sick_surgery_id", sick_surgery_id);
    formData.append("doctor_id", token);
    formData.append("sick_id", sick_id);
    formData.append("sick_surgery_date", sick_surgery_date);
    formData.append("items", JSON.stringify(invoice));
    UpdateSickSurgery(formData);

    // bo away la naw table typeOfWork datay peshutr pshan naiatawa
    setinvoice([]);
    setFile([]);
    // bo away la sar typeOfWork  namene
    onClose(false);
  };

  if (!isVisible) return null;
  return (
    <Modal>
      <div
        className={` flex flex-col justify-between  w-5/6 bg-white h-[700px] rounded-md  `}
      >
        <div
          className={` place-self-center p-6 w-full flex flex-col overflow-y-auto `}
        >
          <button
            className="text-red-300  text-xl 2xl:text-2xl place-self-end mt-3 mr-3 "
            onClick={() => onClose(false)}
          >
            {" "}
            X{" "}
          </button>

          <form onSubmit={newWork}>
            <div className="mt-5 grid md:grid-cols-4 text-sm lg:text-base   w-full md:gap-5 gap-20">
               {/* --------- work type ----------- */}
              <div className="relative w-full">
                <div className="flex flex-col w-full border-b rounded-md absolute ">
                  <label className="text-gray-700 ">Working Type</label>
                  <input
                    type="text"
                    required
                    name="surgery_type_name"
                    placeholder="working type Search"
                    value={surgery_type_name || ""}
                    onChange={(e) => set_surgery_type_name(e.target.value)}
                    autoComplete="off"
                    onFocus={() => set_showError(false)}
                    className={`${
                      showError && " border border-red-400 bg-red-50"
                    } bg-slate-50 w-full mt-1.5 text-sm focus:ring-1 focus:ring-sky-500 pl-2 focus:outline-none border border-gray-300 p-2 rounded shadow-sm shadow-black/10 `}
                  />

                  {surgeryType &&
                    surgeryType
                      .filter((itme) => {
                        const search = surgery_type_name.toLowerCase();
                        const surgeryName =
                          itme.surgery_type_name.toLowerCase();
                        return (
                          search &&
                          surgeryName.startsWith(search) &&
                          surgeryName !== search
                        );
                      })
                      // limit aka tanha 3 dana law naaway search bo aaki pshani ada
                      .slice(0, 3)
                      .map((itme) => {
                        return (
                          <ul
                            key={itme.surgery_type_id}
                            className="cursor-pointer  bg-white hover:bg-sky-500  hover:text-white"
                            onClick={() => {
                              onSearch(
                                itme.surgery_type_name,
                                itme.surgery_type_id
                              );
                              set_surgery_type_id(itme.surgery_type_id);
                            }}
                          >
                            <li className="border-r border-l pl-2">
                              {itme.surgery_type_name}
                            </li>
                          </ul>
                        );
                      })}
                </div>
              </div>

              {/** price input */}
              <div className="flex flex-col w-full">
                <label className="text-gray-700 mb-1">Price</label>
                {/** value = {surgery_type_price || ''} aw or agar da naney awa alle auncontrolled wata ama sarata null yan undefined boia aw || bo da aney ka te batallish be */}
                <input
                  type="number"
                  name="surgery_type_price"
                  required
                  placeholder="0.00"
                  value={surgery_type_price || ""}
                  onChange={(e) => set_surgery_type_price(e.target.value)}
                  className={`focus:ring-1 bg-slate-50  focus:outline-none border pl-2 p-2 w-full  rounded shadow-sm shadow-black/10`}
                />
              </div>

              {/** description input*/}
              <div className="flex flex-col w-full ">
                <label className="text-gray-700 mb-1 ">Description</label>
                <input
                  value={sick_surgery_invoice_note}
                  onChange={(e) =>
                    set_sick_surgery_invoice_note(e.target.value)
                  }
                  className={`bg-slate-50  focus:ring-1 focus:outline-none border p-2 flex-wrap rounded-md shadow-sm shadow-black/10`}
                ></input>
              </div>

              {/** button  Add New Work*/}
              <div className="place-self-end   w-full">
                <button
                  type="submit"
                  //  onClick={() => { surgery_type_id && set_show(true) }}
                  className={`w-full hover:text-white shadow-sm flex justify-center items-center  shadow-gray-300 border text-sky-400 border-sky-300  p-2   rounded-md hover:bg-sky-300`}
                >
                  <VscAdd className="mr-1" /> New
                </button>
              </div>
            </div>
          </form>

          {
            <DetailTypeOfWorkModal
              file={file}
              setFile={setFile}
              invoice={invoice}
              setinvoice={setinvoice}
            />
          }

          <DetailViewImageModal
            onClose={onClose}
            invoiceImage={invoiceImage}
            setinvoiceImage={setinvoiceImage}
            idUpdate={idUpdate}
          />
        </div>
        {/** footer */}
        <div className="h-12 w-full flex items-center gap-3  border-t-2 p-7  ">
          <button
            type="submit"
            onClick={clickAddWork}
            disabled={invoice.length > 0 ? false : true}
            className={
              invoice.length > 0
                ? "w-32 bg-green-400 shadow-sm  shadow-gray-300 border text-white border-green-300  p-1.5  rounded-md hover:bg-green-300"
                : "w-32 bg-green-200 shadow-sm  shadow-gray-300 border text-white   p-1.5  rounded-md hover:bg-green-100"
            }
          >
            Update
          </button>
          <button
            type="submit"
            onClick={() => {
              deletSickSurgery(sick_surgery_id);
              onClose(false);
            }}
            className="w-32 bg-red-400 shadow-sm  shadow-gray-300 border text-white border-red-300  p-1.5  rounded-md hover:bg-red-300"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SurgeryTypeModal;
