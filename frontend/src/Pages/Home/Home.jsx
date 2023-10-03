import { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import CreateEventModal from "../../components/Modal/CreateEventModal";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api, hexToRgba } from "../../utils/utils";
import { FiClock, FiCalendar } from "react-icons/fi";

function Home() {
	const [openModal, setOpenModal] = useState(false);
	const [search, setSearch] = useState("");

	const [data, setData] = useState([]);
	const [recentData, setRecentData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await api.get(`/events`);
			// const recentResponse = await api.get(`/recent`);

			response.data.forEach((obj) => {
				obj.startDate = new Date(obj.startDate);
				obj.createdAt = new Date(obj.createdAt);
				obj.endDate = new Date(obj.endDate);
				obj.updatedAt = new Date(obj.updatedAt);
			});

			// recentResponse.data.forEach((obj) => {
			//   obj.startDate = new Date(obj.startDate);
			// });

			setData(response.data);
			// setRecentData(recentResponse.data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchResentData = async () => {
		try {
			const response = await api.get(`/recent`);

			response.data.forEach((obj) => {
				obj.startDate = new Date(obj.startDate);
				obj.createdAt = new Date(obj.createdAt);
				obj.endDate = new Date(obj.endDate);
				obj.updatedAt = new Date(obj.updatedAt);
			});

			setRecentData(response.data);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		fetchResentData();
	}, []);

	return !localStorage.getItem("token") &&
		window.location.pathname !== "/login" &&
		window.location.pathname !== "/signup" ? (
		<></>
	) : (
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
					<div className="flex flex-wrap">
						{/*new event start */}
						<button
							onClick={() => setOpenModal(true)}
							className="flex justify-start f my-10 hover:scale-105 duration-75"
						>
							<div class="border-box  w-[232px] h-[142px] left-[23px] top-[121px] border-2 border-black rounded-lg flex justify-center items-center text-xl font-semibold dark:md:hover:bg-[#293073] hover:text-[white]">
								+ New Event
							</div>
						</button>
						{/* new event end */}

						{/*Recent event cards start */}
					</div>
					<>
						<div className="flex items-center mt-3">
							<FiClock className="text-2xl mr-2" />
							<p className="text-2xl font-bold">Recent Events</p>
						</div>
						<div className="flex flex-wrap justify-start my-10">
							{recentData
								.filter((item) => {
									if (search === "") return item;
									else if (item.name.toLowerCase().includes(search.toLowerCase())) return item;
								})
								.map((item, index) => (
									<EventCard
										style={{
											color: item.color,
											backgroundColor: hexToRgba(item.color, 0.2),
										}}
										key={index}
										title={item.name}
										jsDate={item.startDate}
										color={item.color}
										id={item._id}
									/>
								))}
						</div>
					</>

					{/*Recent event cards end */}

					{/*All event cards start */}
					<>
						<div className="flex items-center mt-3">
							<FiCalendar className="text-2xl mr-2" />
							<p className="text-2xl font-bold">All Events</p>
						</div>
						<div className="flex flex-wrap justify-start my-10 ">
							{data
								.filter((item) => {
									if (search === "") return item;
									else if (item.name.toLowerCase().includes(search.toLowerCase())) return item;
								})
								.map((item, index) => (
									<EventCard
										style={{
											color: item.color,
											backgroundColor: hexToRgba(item.color, 0.18),
										}}
										key={index}
										title={item.name}
										jsDate={item.startDate}
										color={item.color}
										id={item._id}
									/>
								))}
						</div>
					</>

					{/*All event cards end */}

					<CreateEventModal
						open={openModal}
						onClose={() => {
							setOpenModal(false);
							fetchData();
						}}
					/>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default Home;
