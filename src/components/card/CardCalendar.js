import React, { useContext, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import GlobalContext from "../../contexts/createContext/context";

const CardCalendar = () => {
  const { fetchDashbordAppointment } = useContext(GlobalContext);
  const [ddate, setDate] = useState(new Date().toISOString().slice(0, 10));

  //   const y = new Date().getFullYear();
  //   const m = new Date().getMonth() + 1;
  //   const d = new Date().getDate() ;
  //   console.log(y + "-" + m + "-" + d);
  useEffect(() => {
    fetchDashbordAppointment(ddate); // Example usage
  }, [ddate, fetchDashbordAppointment]);

  return (
    // am dera newDate.toISOString().slice(0, 9) ta zhmaraia pesh kotat pshan aya la datye nmuna 2023-12-0(?) ,
    // balam parseInt(newDate.toISOString().slice(9, 10)) + 1).toString() aw zhhmaray pesh kota war agre u +1 aka chun rozhek kamtry war agr dwaysh ay xamo pall 2023-12-0(era)
    <div className="md:pt-3 pr-3 md:my-2">
      <Calendar
        className="font-body bg-white/80 min-w-full md:min-w-0 md:scale-105 scale-95 
              rounded-2xl shadow-sm "
        onClickDay={(newDate) =>
          setDate(
            newDate.toISOString().slice(0, 9) +
              (parseInt(newDate.toISOString().slice(9, 10)) + 1).toString()
          )
        }
      />
    </div>
  );
};

export default CardCalendar;
