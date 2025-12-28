import React, { useState } from "react";
import "./App.css";
import AppointmentForm from "./Components/AppointmentForm";
import AppointmentList from "./Components/AppointmentList";

const App = () => {
  // Both components depend on it, so stored in App.jsx
  const [appointments, setAppointments] = useState([]);

  {
    /*here appointment internaly holds {name,date} as object , so next the state handler -> setAppointments()
    is called that updates the appointments array, ...appointments , spreads the old array values, and add next appointment , every time creates new array
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4];
    console.log(arr2); // [1, 2, 3, 4]*/
  }
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  }; //this is sent as prop to appointmentform.jsx child component

  {
    /*never modify state directly,So we create a copy of the array using ... (spread operator),
splice(index, 1) means:start at index,remove 1 element*/
  }
  const deleteAppointment = (index) => {
    const deletedAppointments = [...appointments];
    deletedAppointments.splice(index, 1);
    setAppointments(deletedAppointments);
  };

  const editAppointment = (index, editedName, editedDate) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index] = {
      name: editedName,
      date: editedDate,
    };
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <div>
      <h1>Appointment Management System</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
        clearAppointments={clearAppointments}
        editAppointment={editAppointment}
      />
    </div>
  );
};

export default App;
