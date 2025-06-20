import {
  DELETE_DOCTOR,
  DELETE_SURGERY_TYPE,
  DELETE_SICK,
  DELETE_EXPENSE_TYPE,
  DELETE_EXPENSE,
  DELETE_APPOINTMENT,
  DELETE_USER,
  DELETE_REMAIND_LOAN,
} from "../actions/action";

const reducer = (state, { type, payload }) => {
  switch (type) {
    // atani nai nusi
    // case ADD_DOCTOR:
    //     return {
    //         ...state,
    //         doctorList: [...state.doctorList, payload]
    //     };

    // case UPDATE_DOCTOR:
    //     return {
    //         ...state,
    //         doctorList: state.doctorList.map((doc) => {
    //             return doc.doctor_id === payload ? payload : state
    //         })
    //     };
    case DELETE_DOCTOR:
      return {
        ...state,
        doctorList: state.doctorList.filter(
          (doctor) => doctor.doctor_id !== payload
        ),
      };
    case "GET":
      return {
        ...state,
        doctorList: payload,
      };

    // case ADD_USER:
    //     return {
    //         ...state,
    //         userList: [...state.userList, payload]
    //     };
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter((user) => user.admin_id !== payload),
      };

    case "GETUSER":
      return {
        ...state,
        userList: payload.filter((active) => active.admin_state !== "deactive"),
      };

    case "GETDOCTORGIVIENLOAN":
      return {
        ...state,
        doctorGivienLoanList: payload,
      };

    case "GETDOCTORREMAINLOAN":
      return {
        ...state,
        doctorRemainLoanList: payload,
      };

    case "GETDOCTORTOTALWORKING":
      return {
        ...state,
        doctorWorkingList: payload,
      };
    case "GETDOCTORSICKLEDGERREPORT":
      return {
        ...state,
        doctorSickLedgerList: payload,
      };

    case "GETRECEPTIONAPPOINTMENT":
      return {
        ...state,
        receptionAppointmentList: payload,
      };

    case "GETRECEPTIONTOTALLOAN":
      return {
        ...state,
        receptionTotalLoanList: payload,
      };

    case "GETADMINTOTALLOAN":
      return {
        ...state,
        adminTotalLoanList: payload,
      };

    case "GETRECEPTIONGIVINLOAN":
      return {
        ...state,
        receptionGivinLoanList: payload,
      };

    case "GETADMINDOCTORLEDGER":
      return {
        ...state,
        adminDoctorLedgerList: payload,
      };

    case "GETADMINSICKLEDGER":
      return {
        ...state,
        adminSickLedgerList: payload,
      };

    case "GETADMINTOTALAPPOINTMETN":
      return {
        ...state,
        adminTotalAppointmentList: payload,
      };

    case "GETRECEPTIONEXPENSE":
      return {
        ...state,
        receptionExpenseList: payload,
      };

    case "GETSURGERY":
      return {
        ...state,
        surgeryType: payload,
      };
    // case ADD_SURGERY_TYPE:
    //     return {
    //         ...state,
    //         surgeryType: [...state.surgeryType, payload]
    //     };
    case DELETE_SURGERY_TYPE:
      return {
        ...state,
        surgeryType: state.surgeryType.filter(
          (surgery) => surgery.surgery_type_id !== payload
        ),
      };

    // *********** ama way lw aka hamui relodek bka , ballam nabe natha aw shta relod abe ka to aigori
    // case UPDATE_SURGERY_TYPE:
    //     return {
    //         ...state,
    //         surgeryType: state.surgeryType.map((surgery) => {
    //             return surgery.surgery_type_id === payload ? payload : state
    //         })
    //     };

    case "GETSICK":
      return {
        ...state,
        sickList: payload,
      };
    // case ADD_SICK:
    //     return {
    //         ...state,
    //         sickList: [...state.sickList, payload]
    //     };

    // case UPDATE_SICK:
    //     return {
    //         ...state,
    //         sickList: state.sickList.map((sick) => {
    //             return sick.sick_id === payload.sick_id ? payload : state
    //         })
    //     };
    case DELETE_SICK:
      return {
        ...state,
        sickList: state.sickList.filter((sick) => sick.sick_id !== payload),
      };
    // case SET_TYPE_OF_WORK:
    //     return {
    //         ...state,
    //         sickSurgery: [...state.sickSurgery, payload]
    //     };
    case "GETSICKSURGERY":
      return {
        ...state,
        sickSurgery: payload,
      };
    //******************* Expense Type ************************** */
    case "GETEXPENSETYPE":
      return {
        ...state,
        expenseTypeList: payload,
      };
    case DELETE_EXPENSE_TYPE:
      return {
        ...state,
        expenseTypeList: state.expenseTypeList.filter(
          (expense) => expense.expense_type_id !== payload
        ),
      };
    // case UPDATE_EXPENSE_TYPE:
    //     return {
    //         ...state,
    //         expenseTypeList: state.expenseTypeList.map((expense) => {
    //             return expense.expense_type_id === payload ? payload : state
    //         })
    //     };

    // case ADD_EXPENSE_TYPE:
    //     return {
    //         ...state,
    //         expenseTypeList: [...state.expenseTypeList, payload]
    //     };

    ///************* expense ***** */
    case "GETEXPENSE":
      return {
        ...state,
        expenseList: payload,
      };

    // case ADD_EXPENSE:
    //     return {
    //         ...state,
    //         expenseList: [...state.expenseList, payload]
    //     };

    // case UPDATE_EXPENSE:
    //     return {
    //         ...state,
    //         expenseList: state.expenseList.map((expense) => {
    //             return expense.expense_id === payload ? payload : state
    //         })
    //     };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenseList: state.expenseList.filter(
          (expense) => expense.expense_id !== payload
        ),
      };


      // delete remaind loan in page loan
    case DELETE_REMAIND_LOAN:
      return {
        ...state,
        loanList: state.loanList.filter(
          (loan) => loan.loan_to_cash_id !== payload
        ),
      };
      
    ///************* admin ***** */
    case "GETADMIN":
      return {
        ...state,
        adminList: payload,
      };
    ///************* report main***** */
    case "GETREPORT":
      return {
        ...state,
        mainReportList: payload,
      };
    ///************* report doctor ***** */
    case "GETDOCTORREPORT":
      return {
        ...state,
        doctorlegerList: payload,
      };

    ///************* report expense ***** */
    case "GETEXPENSEREPORT":
      return {
        ...state,
        expenseReportList: payload,
      };

    ///************* report WORKING TYPE ***** */
    case "GETWORKINGTYPEREPORT":
      return {
        ...state,
        workingTypeReportList: payload,
      };

    ///************* APPOINTMENT ***** */
    case "GETAPPOINTMENT":
      return {
        ...state,
        appointmentList: payload,
      };

    // get Loan
    case "GETLOAN":
      return {
        ...state,
        loanList: payload,
      };

    case "GETAPPOINTMENTDASHBORD":
      return {
        ...state,
        appointmentListDashbord: payload,
      };

    // case ADD_APPOINTMENT:
    //     return {
    //         ...state,
    //         appointmentList: [...state.appointmentList, payload]
    //     };
    case DELETE_APPOINTMENT:
      return {
        ...state,
        appointmentList: state.appointmentList.filter(
          (appointment) => appointment.appointment_id !== payload
        ),
      };
    // case UPDATE_APPOINTMENT:
    //     return {
    //         ...state,
    //         appointmentList: state.appointmentList.map((appointment) => {
    //             return appointment.appointment_id === payload ? payload : state
    //         })
    //     };

    // *********** ama way lw aka hamui relodek bka , ballam nabe natha aw shta relod abe ka to aigori
    // case CHANGE_STATE_APPOINTMENT:
    //     return {
    //         ...state,
    //         appointmentList: state.appointmentList.map((appointment) => {
    //             return appointment.appointment_id === payload ? payload : state
    //         })
    //     };

    default:
      return state;
  }
};

export default reducer;
