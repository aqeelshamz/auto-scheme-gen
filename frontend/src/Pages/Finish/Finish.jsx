import Navbar from "../../components/Navbar/Navbar";
import EventTable from "../../components/EventTable/EventTable";

const Finish = () => {
	return (
		<div className="overflow-hidden mt-10">
			<Navbar />
			<main className="min-h-screen mt-24 w-full justify-center">
				<div className="m-4 justify-center">
					<section className="flex pl-[10%]">
						<h1 className="font-bold text-3xl">Finish Event</h1>
					</section>

					<section className="flex pl-[10%]">
						<h2 className="text-lg text-gray-600">Confirm your event details</h2>
					</section>

					<section className="justify-center flex my-8">
						<EventTable />
					</section>

					<section className="justify-center flex gap-5 pb-10">
						<button className="block w-[200px] h-[35px] mt-5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-md text-xs text-center">
							Download in PDF
						</button>
						<button className="block w-[200px] h-[35px] mt-5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-md text-xs text-center">
							Download in XLSX
						</button>
					</section>
				</div>
			</main>
		</div>
	);
};

export default Finish;
