import { useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import Modal from "./Modal";

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="cards">
			<div className="column" style={{ paddingBottom: "20px" }}>
				<p style={{ fontSize: "2rem", fontWeight: "800" }}>SchemeGen</p>
				<p
					style={{
						fontSize: "0.8rem",
						fontWeight: "500",
					}}
				>
					THRISSUR CITY POLICE
				</p>
			</div>
			<div>
				<button onClick={() => setIsOpen(true)}>New Event</button>
				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					This is a modal content
				</Modal>
			</div>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?cs=srgb&dl=pexels-codioful-%28formerly-gradienta%29-7130560.jpg&fm=jpg"
							text="+ New Event"
							path="/scheme"
						/>
						<CardItem />
						<CardItem />
						<CardItem />
						<CardItem />
					</ul>
				</div>
			</div>
			<br />
			<h3>Recent events</h3>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="https://wallpapercave.com/wp/wp8050512.jpg"
							text="Thrissur Pooram"
							label="Big Event"
							path="/scheme1"
						/>
						<CardItem
							src="https://scontent.fcok3-1.fna.fbcdn.net/v/t39.30808-6/309862025_6116353528379327_7338073829737360581_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0aDV1FqnwPoAX8wEnG3&_nc_ht=scontent.fcok3-1.fna&oh=00_AfDzrclGymf0504vgx5ibcI2Z1xCndM4bfiBT6Y5K1Zp-Q&oe=6435CF14"
							text="GECT Dyuthi"
							label="College Event"
							path="/scheme2"
						/>
						<CardItem
							src="https://images.shiksha.com/mediadata/images/1587108302phpluQUel.png"
							text="GECT Techfest"
							label="College Event"
							path="/sheme3"
						/>
						<CardItem />
						<CardItem />
					</ul>
				</div>
				<br />
				<h3>All events</h3>
				<div className="cards__container">
					<div className="cards__wrapper">
						<ul className="cards__items">
							<CardItem
								src="https://wallpapercave.com/wp/wp8050512.jpg"
								text="Thrissur Pooram"
								label="Big Event"
								path="/scheme1"
							/>
							<CardItem
								src="https://scontent.fcok3-1.fna.fbcdn.net/v/t39.30808-6/309862025_6116353528379327_7338073829737360581_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=0aDV1FqnwPoAX8wEnG3&_nc_ht=scontent.fcok3-1.fna&oh=00_AfDzrclGymf0504vgx5ibcI2Z1xCndM4bfiBT6Y5K1Zp-Q&oe=6435CF14"
								text="GECT Dyuthi"
								label="College Event"
								path="/scheme2"
							/>
							<CardItem
								src="https://images.shiksha.com/mediadata/images/1587108302phpluQUel.png"
								text="GECT Techfest"
								label="College Event"
								path="/sheme3"
							/>
							<CardItem
								src="https://indusscrolls.com/wp-content/uploads/2022/10/pinarayi-vijayan-2.jpg"
								text="CM Visit"
								label="VIP Event"
								path="/scheme4"
							/>
							<CardItem
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf6hJYO31RrJ6cBpTvuZBK8jDAeUscfUhVnw&usqp=CAU"
								text="President Visit"
								label="VVIP Event"
								path="/scheme5"
							/>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
