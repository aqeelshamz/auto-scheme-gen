import { useState } from "react";
import "./Modal.css";

function NewEventModal({ closeModal }) {
	const [eventName, setEventName] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		setEventName(e.target[0].value);
	};
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="titleCloseBtn">
					<button onClick={() => closeModal(false)}> X </button>
				</div>
				<div className="title">New Event</div>
				<div className="body">
					<form className="new-event" onSubmit={handleSubmit}>
						<input
							value={eventName}
							onChange={(e) => setEventName(e.target.value)}
							type="text"
							placeholder="Event Name"
							name="eventName"
							id="eventName"
							autoComplete="off"
							required
						/>
						<button type="submit">New Event</button>
					</form>
				</div>
				{/*<div className="footer">
					<button>Create Event</button>
  </div>*/}
			</div>
		</div>
	);
}
export default NewEventModal;
