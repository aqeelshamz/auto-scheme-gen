import { useState } from "react";
import "./HomeModal.css";

function HomeModal() {
	const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	return (
		<>
			<button onClick={toggleModal} className="btn-modal">
				New Event
			</button>

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay">
						<div className="modal-content">
							<h1>New Event</h1>
							<br />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem culpa nobis fugit quo laudantium necessitatibus,
								inventore provident nisi autem dolore quidem minus, perspiciatis
								ipsa enim, magni rerum. I think this project is going to bring
								us fortune. Repellendus magnam perferendis quod suscipit maxime
								impedit voluptates necessitatibus, ut facilis libero
								voluptatibus cupiditate in quo facere animi nesciunt sint,
								consequatur harum cum.
							</p>
							<button className="close-modal" onClick={toggleModal}>
								X
							</button>
							<button className="btn-modal">Create Event</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default HomeModal;
