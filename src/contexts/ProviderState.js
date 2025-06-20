import React, { useReducer, useEffect, useState } from "react";
import reducer from "./reducer/reducer";
import GlobalContext from "./createContext/context";
import api from "../api/api";
import {
  DELETE_DOCTOR,
  DELETE_SURGERY_TYPE,
  DELETE_SICK,
  DELETE_EXPENSE_TYPE,
  DELETE_EXPENSE,
  DELETE_USER,
  DELETE_REMAIND_LOAN,
} from "./actions/action";

// import { data } from "autoprefixer";

const ProviderState = ({ children }) => {
  const initialState = {
    doctorList: [],
    surgeryType: [],
    sickList: [],
    sickSurgery: [],
    expenseTypeList: [],
    expenseList: [],
    adminList: [],
    mainReportList: [],
    appointmentList: [],
    appointmentListDashbord: [],
    doctorlegerList: [],
    expenseReportList: [],
    workingTypeReportList: [],
    doctorGivienLoanList: [],
    doctorRemainLoanList: [],
    doctorWorkingList: [],
    doctorSickLedgerList: [],
    receptionAppointmentList: [],
    receptionTotalLoanList: [],
    adminTotalLoanList: [],
    receptionExpenseList: [],
    receptionGivinLoanList: [],
    adminDoctorLedgerList: [],
    adminSickLedgerList: [],
    adminTotalAppointmentList: [],
    userList: [],
    loanList: [],
  };

  const [query, setQuery] = useState("");
  const [loader, setLoader] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  // load all doctors.
  useEffect(() => {
    fetchDoctors();
    fetchSick();
    fetchSurgeryType();
    fetchSickSurgery();
    fetchExpenseType();
    fetchExpense();
    fetchUser();
    // abe sick_id la gall doctor_id bnery bo gey loan
    // fetchLoan();
    fetchAdmin();
    fetchDoctorSicklegerReport();
  }, []);

  // doctor search
  const searchDoctor = (data) => {
    return data.filter((item) =>
      query.toLowerCase() === ""
        ? item
        : item.doctor_name.toLowerCase().includes(query)
    );
  };

  // user search
  const searchUser = (data) => {
    return data.filter((item) =>
      query.toLowerCase() === ""
        ? item
        : item.admin_name.toLowerCase().includes(query)
    );
  };

  // sick search
  const searchSick = (data) => {
    return data.filter((item) =>
      query.toLowerCase() === ""
        ? item
        : item.sick_phone.toLowerCase().includes(query) ||
          item.sick_name.toLowerCase().includes(query)
    );
  };

  // searchSurgeryType search
  const searchSurgeryType = (data) => {
    return data.filter((item) =>
      query.toLowerCase() === ""
        ? item
        : item.surgery_type_name.toLowerCase().includes(query)
    );
  };

  // Expense type search
  const searchExpenseType = (data) => {
    return data.filter((item) =>
      query.toLowerCase() === ""
        ? item
        : item.expense_type_name.toLowerCase().includes(query)
    );
  };
  // Expense type search
  const searchExpense = (data) => {
    return (
      data &&
      data.filter((item) =>
        query.toLowerCase() === ""
          ? item
          : item.expense_date.toLowerCase().includes(query)
      )
    );
  };

  // Appointment search
  const searchAppointment = (data) => {
    return data.filter((item) =>
      query.toLowerCase() === ""
        ? item
        : item.sick_name.toLowerCase().includes(query)
    );
  };

  // fetchLoan
  const fetchLoan = async (receivingLoan) => {
    const { data } = await api.post("loan_to_cash/read.php", receivingLoan);
    dispatch({
      type: "GETLOAN",
      payload: data.data,
    });
  };

  // feach appointment
  const fetchAppointment = async (ddate) => {
    const res = await api.post("appointment/read.php", { ddate });

    dispatch({
      type: "GETAPPOINTMENT",
      payload: res.data.data,
    });
  };
  // // fetchDashbordAppointment
  const fetchDashbordAppointment = async (ddate) => {
    const res = await api.post("appointment/read.php", { ddate });
    dispatch({
      type: "GETAPPOINTMENTDASHBORD",
      payload: res.data.data,
    });
  };

  // add appointment
  const addAppointment = async (appointment, ddate) => {
    // aw ddate bo awaya la katy druskrdni appointment yaksar datakaw bo feach bka bikata naw table appointment
    await api.post("appointment/create.php", appointment);
    fetchAppointment(ddate);
  };

  // delete Appointment
  const deleteAppointment = async (appointment_id) => {
    await api.post("appointment/delete.php", {
      appointment_id: appointment_id,
    });
   
  };

  // update Appointment
  const updateAppointment = async (appointment, ddate) => {
   await api.post("appointment/update.php", appointment); 
    fetchAppointment(ddate);
  };

  // change state Appointment
  const ChangeStateAppointment = async (changeState, ddate) => {
    await api.post("appointment/changestate.php", changeState);
    fetchAppointment(ddate);
  };

  // inrow Appointment
  const inrowAppointment = async (doctor_id) => {
    const res = await api.post("appointment/inrow.php", { doctor_id });
    return res.data.data;
  };

  //   feach admin
  const fetchAdmin = async (admin) => {
    const res = await api.get("admin/login.php", admin);

    dispatch({
      type: "GETADMIN",
      payload: res.data,
    });
  };

  //  feach main report
  const fetchReport = async (data) => {
    const res = await api.post("report/mainreport.php", data);
    dispatch({
      type: "GETREPORT",
      payload: res.data,
    });
  };

  //  feach main report
  const fetchDoctorlegerReport = async (data) => {
    const res = await api.post("report/doctorleger.php", data);
    dispatch({
      type: "GETDOCTORREPORT",
      payload: res.data,
    });
  };

  //  fetch Doctor Sick leger Reportt
  const fetchDoctorSicklegerReport = async (data) => {
    const res = await api.post("report/doctor_sick_ledger.php", data);
console.log("doctor sick ledger");
console.log(res.data);

    dispatch({
      type: "GETDOCTORSICKLEDGERREPORT",
      payload: res.data,
    });
  };

  //  fetch admin Doctor leger Reportt
  const fetchAdminDoctorLedgerReport = async (data) => {
    const res = await api.post("report/admin_doctor_ledger.php", data);

    dispatch({
      type: "GETADMINDOCTORLEDGER",
      payload: res.data,
    });
  };

  //  fetch admin sick leger Reportt
  const fetchAdminSickLedgerReport = async (data) => {
    const res = await api.post("report/admin_sick_ledger.php", data);

    dispatch({
      type: "GETADMINSICKLEDGER",
      payload: res.data,
    });
  };
  //  fetch admin total appointment Reportt
  const fetchAdminTotalAppointmentReport = async (data) => {
    const res = await api.post("report/admin_total_appoinment.php", data);

    dispatch({
      type: "GETADMINTOTALAPPOINTMETN",
      payload: res.data,
    });
  };

  //  fetch Reception Appointment Report
  const fetchReceptionAppointmentReport = async (data) => {
    const res = await api.post("report/reception_appointment.php", data);

    dispatch({
      type: "GETRECEPTIONAPPOINTMENT",
      payload: res.data,
    });
  };

  //  fetch Reception Total Loan Report
  const fetchReceptionTotalLoanReport = async (data) => {
    const res = await api.post("report/reception_total_loan.php", data);

    dispatch({
      type: "GETRECEPTIONTOTALLOAN",
      payload: res.data,
    });
  };

  //  fetch Admin Total Loan Report
  const fetchAdminTotalLoanReport = async (data) => {
    const res = await api.post("report/admin_total_loan.php", data);

    dispatch({
      type: "GETADMINTOTALLOAN",
      payload: res.data,
    });
  };

  //  feach doctor Givien Loan List
  const fetchDoctorGivienLoan = async (data) => {
    const res = await api.post("report/doctor_givien_loan.php", data);
    dispatch({
      type: "GETDOCTORGIVIENLOAN",
      payload: res.data,
    });
  };

  //  feach doctor remain Loan List
  const fetchDoctorRemainLoan = async (data) => {
    const res = await api.post("report/doctor_total_remain_loan.php", data);

    dispatch({
      type: "GETDOCTORREMAINLOAN",
      payload: res.data,
    });
  };

  //  feach doctor working List
  const fetchDoctorWorking = async (data) => {
    const res = await api.post("report/doctor_total_working.php", data);

    dispatch({
      type: "GETDOCTORTOTALWORKING",
      payload: res.data,
    });
  };

  //  fetch Reception Expense Report
  const fetchReceptionExpenseReport = async (data) => {
    const res = await api.post("report/reception_expense.php", data);

    dispatch({
      type: "GETRECEPTIONEXPENSE",
      payload: res.data,
    });
  };

  //  fetch Reception givin loan Report
  const fetchReceptionGivinLoanReport = async (data) => {
    const res = await api.post("report/reception_givin_loan.php", data);

    dispatch({
      type: "GETRECEPTIONGIVINLOAN",
      payload: res.data,
    });
  };

  //  feach expense report
  const fetchExpensereportReport = async (data) => {
    const res = await api.post("report/expensereport.php", data);
    dispatch({
      type: "GETEXPENSEREPORT",
      payload: res.data,
    });
  };

  //  feach expense report
  const fetchWorkingTypeReportReport = async (data) => {
    const res = await api.post("report/workingtypereport.php", data);
    dispatch({
      type: "GETWORKINGTYPEREPORT",
      payload: res.data,
    });
  };

  //************************************* expense type ******************* */

  //  AllExpensetyoe
  const fetchExpenseType = async () => {
    const res = await api.get("expense_type/read.php");
    dispatch({
      type: "GETEXPENSETYPE",
      payload: res.data.data,
    });
  };

  // delete ExpenseType
  const deleteExpenseType = async (expense_type_id) => {
    await api.post("expense_type/delete.php", {
      expense_type_id: expense_type_id,
    });
    dispatch({
      type: DELETE_EXPENSE_TYPE,
      payload: expense_type_id,
    });
  };

  // update expense
  const updateExpenseType = async (expensetype) => {
    await api.post("expense_type/update.php", expensetype);
    fetchExpenseType();
  };

  // add expense type
  const addExpenseType = async (expenseType) => {
    await api.post("expense_type/create.php", expenseType);
    fetchExpenseType();
  };
  //************************************* expense ******************* */

  //  AllExpense
  const fetchExpense = async () => {
    const res = await api.get("expense/read.php");
    dispatch({
      type: "GETEXPENSE",
      payload: Object.values(res.data.data),
    });
  };

  // add expense
  const addExpense = async (expense) => {
    await api.post("expense/create.php", expense);
    fetchExpense();
  };

  // delete ExpenseType
  const deleteExpense = async (expense_id) => {
    await api.post("expense/delete.php", { expense_id: expense_id });
    dispatch({
      type: DELETE_EXPENSE,
      payload: expense_id,
    });
  };

  // update expense
  const updateExpense = async (expense) => {
    await api.post("expense/update.php", expense);
    fetchExpense();
  };

  // all doctor
  const fetchDoctors = async () => {
    const res = await api.get("doctor/read.php");
    dispatch({
      type: "GET",
      payload: res.data.data,
    });
  };

  // all user
  const fetchUser = async () => {
    setLoader(true);
    const res = await api.get("admin/read.php");

    if (res.status === 200) {
      setLoader(false);
      dispatch({
        type: "GETUSER",
        payload: res.data.data,
      });
    }
  };

  // all surgeryType
  const fetchSurgeryType = async () => {
    const res = await api.get("surgery_type/read.php");
    dispatch({
      type: "GETSURGERY",
      payload: res.data.data,
    });
  };

  // all sick
  const fetchSick = async () => {
    let user = localStorage.getItem("data");
    // ama if bo away error nadda chun la sarata hich kas daxl nabua tadata kani eargretawa
    if (user) {
      let user_role = JSON.parse(user).role;
      let user_id = JSON.parse(user).token;
      const { data } = await api.post("sick/read.php", {
        user_id: user_id,
        user_role: user_role,
      });

      dispatch({
        type: "GETSICK",
        payload: data.data,
      });
    }
  };

  // all sick surgery
  const fetchSickSurgery = async () => {
    const { data } = await api.get("sick_surgery/read.php");

    dispatch({
      type: "GETSICKSURGERY",
      payload: data.data,
    });
  };

  // add loan
  const addLoan = async (loan) => {
   const res = await api.post("loan_to_cash/create.php", loan);
   console.log(res.data);
   
    fetchSick();
  };

  // update remaind loan
  const updateRemaindeLoan = async (loan) => {
     await api.post("loan_to_cash/update.php", loan);
    fetchLoan({admin_id: loan.admin_id, sick_id: loan.sick_id });
    // fetchSick({sick_id:loan.sick_id, admin_id: loan.admin_id});
  };

  // delete remaind loan
  const deleteRemaindeLoan = async (loan_to_cash_id) => {
    await api.post("loan_to_cash/delete.php", {
      loan_to_cash_id: loan_to_cash_id,
    });
    dispatch({
      type: DELETE_REMAIND_LOAN,
      payload: loan_to_cash_id,
    });
    // fetchSick();
    // fetchLoan();
  };

  //**************** users **************** */

  // add user
  const addUser = async (user) => {
    await api.post("admin/create.php", user);
    fetchUser();
  };

  // update user
  const updateUser = async (updateUser) => {
    await api.post("admin/update.php", updateUser);
    fetchUser();
  };

  // delete user
  const deleteUser = async (admin_id) => {
    await api.post("admin/delete.php", { admin_id: admin_id });

    dispatch({
      type: DELETE_USER,
      payload: admin_id,
    });
  };

  //*********************************************** doctor ****************************************** */

  // add doctor
  const addDoctor = async (doctor) => {
    await api.post("doctor/create.php", doctor);
    fetchDoctors();
  };

  // update doctor
  const updateDoctor = async (update_doctor) => {
    await api.post("doctor/update.php", update_doctor);
    fetchDoctors();
  };

  // delete Doctoe
  const deleteDoctor = async (doctor_id) => {
    await api.post("doctor/delete.php", { doctor_id: doctor_id });
    dispatch({
      type: DELETE_DOCTOR,
      payload: doctor_id,
    });
  };

  ////************************************************************************************ */

  //*********  surgery function */

  // add surgery
  const addSurgeryType = async (surgery) => {
    await api.post("surgery_type/create.php", surgery);
    fetchSurgeryType();
  };

  // delete surgery
  const deleteSurgery = async (surgery_type_id) => {
    await api.post("surgery_type/delete.php", {
      surgery_type_id: surgery_type_id,
    });
    dispatch({
      type: DELETE_SURGERY_TYPE,
      payload: surgery_type_id,
    });
  };

  // update Surgery
  const updateSurgery = async (surgery) => {
    await api.post("surgery_type/update.php", surgery);
    fetchSurgeryType();
  };

  //************    Sick   */

  // add doctor
  const addSick = async (sick) => {
   const res = await api.post("sick/create.php", sick);
   console.log(res.data);
   
    fetchSick();
  };

  // update Sick
  const updateSick = async (sick) => {
    await api.post("sick/update.php", sick);
    fetchSick();
  };

  // delete sick
  const deleteSick = async (sick_id) => {
    await api.post("sick/delete.php", { sick_id: sick_id });
    dispatch({
      type: DELETE_SICK,
      payload: sick_id,
    });
  };

  // add sick surgery
  const addSickSurgery = async (formData, ddate) => {
    // ba kar hatwa la <DetailBodyInput />
    await api.post("sick_surgery/createe.php", formData);
    fetchSickSurgery();
    fetchSick();
    fetchAppointment(ddate);
    // fetchDashbordAppointment(data);
  };

  const deleteSurgeryImage = async (sick_surgery_invoice_image_id) => {
    // ba kar hatwa la <DetailBodyInput />

    await api.post("sick_surgery/delete_image.php", {
      sick_surgery_invoice_image_id: sick_surgery_invoice_image_id,
    });
    fetchSickSurgery();
    fetchSick();
  };

  const deletSickSurgery = async (sick_surgery_id) => {
    // ba kar hatwa la <DetailBodyInput />
    await api.post("sick_surgery/delete.php", {
      sick_surgery_id: sick_surgery_id,
    });

    fetchSickSurgery();
    fetchSick();
  };

  // ama update naw price u date aka la commponenty SurgeryTypeModal
  const UpdateSickSurgery = async (formData) => {
    await api.post("sick_surgery/update.php", formData);
    fetchSickSurgery();
    fetchSick();
  };

  // ama update price u description aka la commponenty WorkingTypeModal
  const UpdateSickSurgeryInvoice = async (sick_surgery_invoice) => {
       await api.post(
      "sick_surgery_invoice/update.php",
      sick_surgery_invoice
    );

    fetchSickSurgery();
    fetchSick();
  };

  // ama update price u description aka la commponenty WorkingTypeModal
  const changeSickSurgery = async (change) => {
    await api.post("change_sick_surgery/change.php", change);
    fetchSickSurgery();
  };

  return (
    <GlobalContext.Provider
      value={{
        doctorList: state.doctorList,
        addDoctor,
        updateDoctor,
        deleteDoctor,
        surgeryType: state.surgeryType,
        addSurgeryType,
        deleteSurgery,
        updateSurgery,
        sickList: state.sickList,
        addSick,
        updateSick,
        deleteSick,
        query,
        setQuery,
        searchDoctor,
        searchSick,
        searchSurgeryType,

        sickSurgery: state.sickSurgery,
        addSickSurgery,
        expenseTypeList: state.expenseTypeList,
        searchExpenseType,
        deleteExpenseType,
        updateExpenseType,
        addExpenseType,
        expenseList: state.expenseList,
        addExpense,
        updateExpense,
        deleteExpense,
        searchExpense,
        adminList: state.adminList,
        mainReportList: state.mainReportList,
        fetchReport,
        fetchAdmin,
        fetchSick,
        fetchSickSurgery,

        appointmentList: state.appointmentList,
        appointmentListDashbord: state.appointmentListDashbord,
        addAppointment,
        fetchAppointment,
        fetchDashbordAppointment,
        deleteAppointment,
        updateAppointment,

        ChangeStateAppointment,
        inrowAppointment,
        searchAppointment,
        deleteSurgeryImage,
        deletSickSurgery,
        UpdateSickSurgery,
        UpdateSickSurgeryInvoice,

        fetchDoctorlegerReport,
        doctorlegerList: state.doctorlegerList,

        fetchExpensereportReport,
        expenseReportList: state.expenseReportList,

        fetchWorkingTypeReportReport,
        workingTypeReportList: state.workingTypeReportList,

        fetchDoctorGivienLoan,
        doctorGivienLoanList: state.doctorGivienLoanList,

        fetchDoctorRemainLoan,
        doctorRemainLoanList: state.doctorRemainLoanList,

        fetchDoctorWorking,
        doctorWorkingList: state.doctorWorkingList,

        fetchDoctorSicklegerReport,
        doctorSickLedgerList: state.doctorSickLedgerList,

        fetchReceptionAppointmentReport,
        receptionAppointmentList: state.receptionAppointmentList,

        fetchReceptionTotalLoanReport,
        receptionTotalLoanList: state.receptionTotalLoanList,

        fetchAdminTotalLoanReport,
        adminTotalLoanList: state.adminTotalLoanList,

        fetchReceptionExpenseReport,
        receptionExpenseList: state.receptionExpenseList,

        fetchReceptionGivinLoanReport,
        receptionGivinLoanList: state.receptionGivinLoanList,

        fetchAdminDoctorLedgerReport,
        adminDoctorLedgerList: state.adminDoctorLedgerList,

        fetchAdminSickLedgerReport,
        adminSickLedgerList: state.adminSickLedgerList,

        fetchAdminTotalAppointmentReport,
        adminTotalAppointmentList: state.adminTotalAppointmentList,

        addUser,
        updateUser,
        deleteUser,
        searchUser,
        userList: state.userList,

        loanList: state.loanList,
        addLoan,
        updateRemaindeLoan,
        deleteRemaindeLoan,
        fetchLoan,

        loader,
        setLoader,

        changeSickSurgery,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ProviderState;
