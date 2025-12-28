import React, { useState } from "react";

{
  /*here in this function, the parent App.jsx has sent its addAppointment() as props from parent to child 
 so that child can call it whenever it can, term - closure*/
}

const AppointmentForm = ({ addAppointment }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    addAppointment({ name, date }); // sets the appointments state
    setName(""); // clear input
    setDate(""); // clear input
  };
 
  return (
    <div class="container">
			<form onSubmit={handleSubmit}>
				<div class="row">
					<div class="col-25">
						<label for="fname">Full Name</label>
					</div>
					<div class="col-75">
						<input
							type="text"
							id="fname"
							name="firstname"
							placeholder="Your name.."
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
            {/* upon every keystroke , onChange() is called that sets the "name" value , and later the value of "name" is stored in "value attribute" */}
					</div>
				</div>
				<div class="row">
					<div class="col-25">
						<label for="fname">Appointment Date: </label>
					</div>
					<div class="col-75">
						<input
							id="fname"
							name="firstname"
							placeholder="Your name.."
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
				</div>
				<div class="row">
					<input type="submit" value="Add Appointment" />
				</div>
			</form>
		</div>
  );
};

export default AppointmentForm;
