# 📅 Appointment Management System

A dynamic, responsive CRUD application built with **React.js**. This project demonstrates professional state management, component architecture, and seamless user interaction through inline editing and real-time updates.



## 🚀 Key Features

- **Full CRUD Operations:** Add, View, Edit, and Delete appointments effortlessly.
- **State Lifting:** Managed global state in the parent component to ensure data synchronization between the Form and the List.
- **Inline Editing:** Toggle between display and edit modes within the table for a smooth user experience.
- **Controlled Components:** Real-time synchronization of form inputs with React state.
- **Immutable Updates:** Used ES6 Spread operators to handle state changes safely without direct mutation.
- **Bulk Operations:** One-click functionality to clear the entire appointment schedule.

## 🛠️ Technology Stack

- **Frontend:** React.js (Functional Components)
- **State Management:** React Hooks (`useState`)
- **Language:** JavaScript (ES6+)
- **Styling:** CSS3

## 🏗️ Project Architecture

The application is structured into a modular design to ensure scalability and clean code:

- **App.jsx:** The "Single Source of Truth." Holds the global state and logic for modifying appointments.
- **AppointmentForm.jsx:** Handles data entry. Uses local state for inputs and communicates with the parent via props (Closures).
- **AppointmentList.jsx:** Handles data display and complex UI states (Edit/Save/Cancel) for individual rows.



## 💡 Technical Implementation Details

### State Lifting & Props Drilling
The `appointments` array is lifted to `App.jsx`. Functions like `addAppointment` and `editAppointment` are passed down as props. This allows sibling components to stay in sync.

### Inline Edit Logic
Instead of a separate page, the application uses an `editedIndex` state. If `index === editedIndex`, the row renders input fields; otherwise, it renders plain text.

### Memory & Performance
- **Frame Cleanup:** Form inputs are cleared (`setName("")`) immediately after submission to reset the UI.
- **Efficient Filtering:** Delete logic uses the spread operator to create a shallow copy before using `splice`, adhering to React's immutability principles.


  
