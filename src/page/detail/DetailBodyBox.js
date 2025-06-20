import React, { useContext, useRef, useState } from "react";
import GlobalContext from "../../contexts/createContext/context";
import { useLocation } from "react-router-dom";
import calendar from "../../assets/image/calendar.png";
import money from "../../assets/image/money.png";
import ComponentToPrint from "./ComponentToPrint ";
import { useReactToPrint } from "react-to-print";
import DetailViewImage from "./DetailViewImage";
import { BsFileEarmarkImage } from "react-icons/bs";
import SurgeryTypeModal from "../../components/modal/SurgeryTypeModal";
import WorkingTypeModal from "../../components/modal/WorkingTypeModal";

const DetailBodyBox = () => {
  const { surgeryType, sickList } = useContext(GlobalContext);

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState(0);
  const [idUpdate, setIdUpdate] = useState(0);
  const [show, setShow] = useState(false);
  const [showWorkingType, setShowWorkingType] = useState(false);
  const [invoice, setinvoice] = useState([]);
  const [sick_surgery_id, setsick_surgery_id] = useState(0);
  const [invoiceImage, setinvoiceImage] = useState([]);

  // bo update price u description ba kari ahwni la commponenty workin type
  const [sick_surgery_invoice_id, set_sick_surgery_invoice_id] = useState(0);
  const [surgery_type_id, set_surgery_type_id] = useState(0);
  const [surgery_type_name, set_surgery_type_name] = useState("");
  const [surgery_type_price, set_surgery_type_price] = useState(0);
  const [sick_surgery_invoice_note, set_sick_surgery_invoice_note] =
    useState("");

  const sid = surgeryType && surgeryType.map((d) => d.surgery_type_id);
  const sn = surgeryType && surgeryType.map((d) => d.surgery_type_name);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      {/** sickSurgery && la gall  item.sick_visit &&  am dwana zor grngn bo away agar yakekian la katy map krdinish propertykay nabu nalle map reading undefined*/}
      {sickList &&
        sickList.map((sick) => {
          return (
            <div key={sick.sick_id} className="">
              {sick.sick_id && sick.sick_id === location.state && (
                <div className="flex justify-between my-4 ">
                  {/** invisible bo away dyar nabe absolute bo awaia design tek nache  */}
                  <div className="absolute invisible bg-red-300">
                    <ComponentToPrint props={sickList} ref={componentRef} />
                  </div>
                  <p className="text-xl  border-b-2 border-sky-300 w-fit">
                    History of Work{" "}
                  </p>
                  <button
                    onClick={() => {
                      handlePrint();
                    }}
                    className="hover:text-white shadow-sm shadow-gray-300 border text-sky-400 border-sky-300 h-fit p-1.5 px-7 tracking-wider rounded-md hover:bg-sky-300"
                  >
                    Print History
                  </button>
                </div>
              )}
            </div>
          );
        })}

      {/* booxy date u price u work type u description */}

      {sickList &&
        sickList.map((sick) => {
          return (
            <div key={sick.sick_id} className=" ">
              {sick.sick_id === location.state ? (
                <div className="box flex flex-col rounded-md shadow-black/5 bg-white cursor-pointer">
                  <SurgeryTypeModal
                    isVisible={show}
                    setIsVisible={setIsVisible}
                    onClose={setShow}
                    invoice={invoice}
                    setinvoice={setinvoice}
                    invoiceImage={invoiceImage}
                    setinvoiceImage={setinvoiceImage}
                    idUpdate={idUpdate}
                    sick_surgery_id={sick_surgery_id}
                  />
                  {/* am modalla edit description w price naw bodybox aka */}
                  <WorkingTypeModal
                    isVisible={showWorkingType}
                    onClose={setShowWorkingType}
                    set_surgery_type_name={set_surgery_type_name}
                    surgery_type_name={surgery_type_name}
                    set_surgery_type_price={set_surgery_type_price}
                    surgery_type_price={surgery_type_price}
                    set_sick_surgery_invoice_note={
                      set_sick_surgery_invoice_note
                    }
                    sick_surgery_invoice_note={sick_surgery_invoice_note}
                    set_surgery_type_id={set_surgery_type_id}
                    surgery_type_id={surgery_type_id}
                    set_sick_surgery_invoice_id={set_sick_surgery_invoice_id}
                    sick_surgery_invoice_id={sick_surgery_invoice_id}
                  />

                  {/* date div */}
                  {sick.sick_invoice &&
                    sick.sick_invoice.map((invoice, index) => {
                      return (
                        <div
                          key={sick.sick_id + index + 1}
                          className=" text-left grid md:flex bg-white shadow-sm shadow-black/10  rounded mb-4 justify-between w-full p-2.5    text-gray-700 text-xl "
                        >
                          {/** div date u price */}
                          <div
                            onClick={() => {
                              setShow(true);
                              setinvoice(invoice.sick_surgery_invoice);
                              setinvoiceImage(invoice);
                              setIdUpdate(invoice.sick_surgery_id);
                              setsick_surgery_id(invoice.sick_surgery_id);
                            }}
                            className=" grid md:border-r border-b   relative  pl-2 md:w-[30%] w-full"
                          >
                            <div className="flex items-center mb-2">
                              <img
                                src={calendar}
                                alt="calendar"
                                className="w-6 h-6 mr-3"
                              />
                              <span className="text-lg font-normal ">
                                {invoice.sick_surgery_date}
                              </span>
                            </div>
                            {/** price div */}
                            <div
                              key={sick.sick_id + index + 2}
                              className="flex  items-center"
                            >
                              <img
                                src={money}
                                alt="money"
                                className="w-6 h-6 mr-3"
                              />
                              <span className="text-lg font-normal ">
                                {invoice.sick_surgery_invoice &&
                                  parseFloat(
                                    invoice.sick_surgery_invoice
                                      .map((data) => data.surgery_type_price)
                                      .reduce(
                                        (a, c) => parseInt(a) + parseInt(c)
                                      )
                                  ).toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/** div surgery type u description */}
                          <div className="text-start pl-2 w-full mt-2 ">
                            {invoice.sick_surgery_invoice &&
                              invoice.sick_surgery_invoice.map(
                                (data, index) => {
                                  return (
                                    <div
                                      key={sick.sick_id + index + 3}
                                      className="flex flex-col  "
                                    >
                                      <div
                                        onClick={() => {
                                          set_sick_surgery_invoice_id(
                                            data.sick_surgery_invoice_id
                                          );
                                          setShowWorkingType(true);
                                          set_surgery_type_id(
                                            data.surgery_type_id
                                          );
                                          set_surgery_type_name(
                                            sn[
                                              sid.indexOf(
                                                `${data.surgery_type_id}`
                                              )
                                            ]
                                          );
                                          set_surgery_type_price(
                                            data.surgery_type_price
                                          );
                                          set_sick_surgery_invoice_note(
                                            data.sick_surgery_invoice_note
                                          );
                                         
                                        }}
                                        className=" -tracking-tight  "
                                      >
                                        <strong className="text-gray-600">
                                          Work tpye :
                                        </strong>{" "}
                                        <span className="text-base">
                                          {" "}
                                          {
                                            sn[
                                              sid.indexOf(
                                                `${data.surgery_type_id}`
                                              )
                                            ]
                                          }
                                        </span>
                                        <br />
                                        <strong className="text-gray-600">
                                          Description :{" "}
                                        </strong>{" "}
                                        <span className="text-base">
                                          {data.sick_surgery_invoice_note}
                                        </span>
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                          </div>

                          {/** image icon */}
                          {/** setId bo awaya bzani kam box awe wenay aw box bo benetawa */}
                          <div className=" cursor-pointer flex ">
                            <div className="flex items-center h-full justify-center duration-200 rounded-md">
                              {/* <img src={gallery} alt='fahs' className='w-10 h-10  '  /> */}

                              <BsFileEarmarkImage
                                size={25}
                                onClick={() => {
                                  setIsVisible(true);
                                  setId(invoice.sick_surgery_id);
                                }}
                              />
                            </div>
                            <DetailViewImage
                              isVisible={isVisible}
                              setIsVisible={setIsVisible}
                              id={id}
                              setId={setId}
                              invoice={invoice}
                            />
                          </div>
                        </div>
                      );
                    })}

                  {/* <DetailViewImage isVisible={isVisible} setIsVisible={setIsVisible} /> */}
                </div>
              ) : null}
            </div>
          );
        })}
    </div>
  );
};

export default DetailBodyBox;
