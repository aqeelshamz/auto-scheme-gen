import { IoClose } from "react-icons/io5";
import "./Indexl.css";

function SubmitEventModal({ open, onClose }) {
	return (
		<>
			<div
				onClick={onClose}
				className="overlay  bg-zinc-700 fixed w-full h-full flex justify-center items-center"
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
					className=" w-full max-w-[468px] h-[565px]  fixed shadow rounded-xl bg-white"
				>
					<div className="m-4">
						<div className="flex justify-between">
							<p className="font-semibold text-xl">Finish Event</p>
							<button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800 focus:outline-none">
								<IoClose size={30} />
							</button>
						</div>
						<div className="flex justify-between">
							<button className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white  rounded-md text-xs text-center">
								Download as XLSX
							</button>&ensp;
							<button className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white  rounded-md text-xs text-center">
								Download as PDF
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SubmitEventModal;
