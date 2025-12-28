import React, { useState } from "react";

const AppointmentList = ({
  appointments,
  deleteAppointment,
  editAppointment,
  clearAppointments,
}) => {
    // These are UI-only states,They exist only while editing,No other component needs them
  const [editedIndex, setEditedIndex] = useState(null);  //Before clicking Edit, NO row is selected
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

//   Triggered when Edit button is clicked.index = row index to edit.setEditedIndex(index) → tells React: “this row is in edit mode”.
// setEditedName(...) & setEditedDate(...) → pre-fill inputs with current appointment data.
// After this, React re-renders this component, and the row shows input boxes instead of plain text.
  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedName(appointments[index].name);
    setEditedDate(appointments[index].date);
  };

//   Triggered when Save button is clicked.Calls editAppointment (from App.jsx) → updates the shared appointments array.
//   Resets local edit states:editedIndex = null → exit edit mode,editedName = "" → clears input
//     React re-renders → table shows updated data.
  const handleSaveEdit = (index) => {
    editAppointment(index, editedName, editedDate);
    setEditedIndex(null);
    setEditedName("");
  };

//   Triggered when Cancel button is clicked.Simply resets UI without changing actual appointments.
// React re-renders → row switches back to display mode.
  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedName("");
  };

  return (
    <div className="container">
			<h1>Appointment List</h1>
			<table id="list">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
				</thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

{/* If this row is being edited → show input field.

Else → show appointment name as plain text.

value={editedName} → controlled input (always in sync with state).

onChange → updates state whenever user types. */}
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  appointment.name
                )}
              </td>

              <td>
                {editedIndex === index ? (
                  <input
                    type="date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                  />
                ) : (
                  appointment.date
                )}
              </td>

{/* If editing:

Show Save → commits changes

Show Cancel → discards changes

If not editing:

Show Edit → toggles edit mode

Show Delete → removes appointment via deleteAppointment function */}
              <td>
                {editedIndex === index ? (
                  <>
                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => deleteAppointment(index)}>
                      Delete
                    </button>
                  </>
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clearAppointments}>Clear All Appointments</button>
    </div>
  );
};

export default AppointmentList;
