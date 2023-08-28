import Navbar from "../../components/Navbar/Navbar";
import EventTable from "../../components/EventTable/EventTable";

const Finish = () => {
	return !localStorage.getItem("token") &&
		window.location.pathname !== "/login" &&
		window.location.pathname !== "/signup" ? (
		<></>
	) : (
		<div className="overflow-hidden mt-10">
			<Navbar />
			<div className="min-h-screen mt-24  w-full justify-center">
				<div className="m-4 justify center">
					<div className="flex justify-center">
						<h1 className="font-bold text-3xl">Finish Event</h1>
					</div>
					<div className="justify-center flex my-10">
						<EventTable />
					</div>
					<div className="justify-center flex">
						<button className="block w-[424px] h-[35px] mt-5 px-4 py-2 bg-blue-900 text-white rounded-md text-xs text-center">
							Download in PDF
						</button>
						<button className="block w-[424px] h-[35px] mt-5 px-4 py-2 bg-blue-900 text-white rounded-md text-xs text-center">
							Download in XLSX
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Finish;
