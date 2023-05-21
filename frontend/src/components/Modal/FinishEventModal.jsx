import { IoClose } from "react-icons/io5";
import "react-datepicker/dist/react-datepicker.css";
import "./Modal.css";

function FinishEventModal({ open, onClose }) {
	if (!open) return null;
	return (
		<div
			onClick={onClose}
			className="overlay  bg-zinc-700 fixed w-full h-full flex justify-center items-center z-[2050]"
		>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className=" w-full max-w-[468px] h-[289px]  fixed shadow rounded-xl bg-white"
			>
				{/* <img src={nft} alt='/' /> */}
				<div className="m-4">
					<div className="flex justify-between">
						<p className="font-semibold text-xl">Finish Event</p>

						<button
							onClick={onClose}
							className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
						>
							<IoClose size={30} />
						</button>
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
}

export default FinishEventModal;
