import Navbar from "../../components/Navbar/Navbar";

const Finish = () => {
	return !localStorage.getItem("token") &&
		window.location.pathname !== "/login" &&
		window.location.pathname !== "/signup" ? (
		<></>
	) : (
		<div className="overflow-hidden">
			<Navbar />
			<div className="min-h-screen mt-24  w-full">
				<div className="m-4">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Finish Event</p>
					</div>
					<br />
					<h1>EVENT DETAILS HERE</h1>
					<br />
					<button className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white  rounded-md text-xs text-center">
						Download in PDF
					</button>
					<button className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white  rounded-md text-xs text-center">
						Download in XLSX
					</button>
				</div>
			</div>
		</div>
	);
};
export default Finish;
