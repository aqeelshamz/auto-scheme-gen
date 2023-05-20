import { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import CreateEventModel from "../../components/Modal/CreateEventModel";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
	const [openModal, setOpenModal] = useState(false);
	const [search, setSearch] = useState("");

	function hexToRgba(hex, opacity = 1) {
		hex = hex.replace("#", "");

		if (hex.length === 3) {
			hex = hex
				.split("")
				.map((char) => char + char)
				.join("");
		}

		const r = parseInt(hex.slice(0, 2), 16);
		const g = parseInt(hex.slice(2, 4), 16);
		const b = parseInt(hex.slice(4, 6), 16);

		return `rgba(${r}, ${g}, ${b}, ${opacity})`;
	}

	const events = [
		{
			name: "Birthday Party",
			date: new Date("2023-05-15"),
			color: "#FF69B4",
		},
		{
			name: "Graduation Ceremony",
			date: new Date("2023-06-10"),
			color: "#87CEEB",
		},
		{
			name: "New Year Celebration",
			date: new Date("2024-01-01"),
			color: "#FFD700",
		},
		{
			name: "Easter Sunday",
			date: new Date("2023-04-16"),
			color: "#00FF7F",
		},
		{
			name: "Independence Day",
			date: new Date("2023-07-04"),
			color: "#FFA500",
		},
		{
			name: "Halloween Party",
			date: new Date("2023-10-31"),
			color: "#FF6347",
		},
		{
			name: "Thanksgiving Day",
			date: new Date("2023-11-23"),
			color: "#008000",
		},
		{
			name: "Christmas Day",
			date: new Date("2023-12-25"),
			color: "#FF0000",
		},
		{
			name: "New Year's Eve",
			date: new Date("2023-12-31"),
			color: "#9400D3",
		},
		{
			name: "Valentine's Day",
			date: new Date("2024-02-14"),
			color: "#800080",
		},
	];

	return (
		<div className="overflow-hidden">
			<Navbar />
			<div className="min-h-screen mt-24  w-full">
				{/* search bar start */}
				<div className="p-4 flex justify-center mt-24 w-screen">
					<label for="table-search" className="sr-only">
						Search
					</label>
					<div className="relative mt-1">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<svg
								className="w-5 h-5 text-gray-500 "
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								></path>
							</svg>
						</div>
						<input
							type="text"
							id="table-search"
							className="border border-blue-300 bg-blue-100 text-base rounded-lg  block w-80 pl-10 p-2.5  "
							placeholder="Search"
							onChange={(event) => {
								setSearch(event.target.value);
							}}
						/>
					</div>
				</div>

				{/* search bar end */}
				<div className="m-10">
					{/*new event start */}
					<button
						onClick={() => setOpenModal(true)}
						className="flex justify-start f my-10 "
					>
						<div class="border-box  w-[232px] h-[142px] left-[23px] top-[121px] border-2 border-black rounded-md flex justify-center items-center text-xl font-semibold dark:md:hover:bg-fuchsia-600">
							+ New Event
						</div>
					</button>
					{/* new event end */}

					{/*Recent event cards start */}
					<>
						<p className="text-2xl font-bold mt-3">Recent Events</p>
						<div className="flex flex-wrap justify-start my-10">
							{events
								.filter((item) => {
									if (search == "") return item;
									else if (
										item.name
											.toLowerCase()
											.includes(search.toLowerCase())
									)
										return item;
								})
								.map((item, index) => (
									<EventCard
										style={{
											color: item.color,
											backgroundColor: hexToRgba(
												item.color,
												0.2
											),
										}}
										key={index}
										title={item.name}
										jsDate={item.date}
										color={item.color}
									/>
								))}
						</div>
					</>

					{/*Recent event cards end */}

					{/*All event cards start */}
					<>
						<p className="text-2xl font-bold mt-3">All Events</p>
						<div className="flex flex-wrap justify-start my-10 ">
							{events
								.filter((item) => {
									if (search == "") return item;
									else if (
										item.name
											.toLowerCase()
											.includes(search.toLowerCase())
									)
										return item;
								})
								.map((item, index) => (
									<EventCard
										style={{
											color: item.color,
											backgroundColor: hexToRgba(
												item.color,
												0.18
											),
										}}
										key={index}
										title={item.name}
										jsDate={item.date}
										color={item.color}
									/>
								))}
						</div>
					</>

					{/*All event cards end */}

					<CreateEventModel
						open={openModal}
						onClose={() => setOpenModal(false)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
