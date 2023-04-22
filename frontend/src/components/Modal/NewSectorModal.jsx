import { IoClose } from "react-icons/io5";
import { CirclePicker } from "react-color";
import "./Indexl.css";

function NewSectorModal({ open, onClose }) {
	// if (!open) return null;
	return (
		<>
			<div
				onClick={onClose}
				className="overlay bg-zinc-700 fixed w-full flex justify-center items-center"
			>
				<div
					onClick={(e) => {
						e.stopPropagation();
					}}
					className=" w-full max-w-[468px] h-[565px] fixed shadow rounded-xl bg-white"
				>
					{/* <img src={nft} alt='/' /> */}
					<div className="m-4">
						<div className="flex justify-between">
							<p className="font-semibold text-xl">New Sector</p>
							<button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800 focus:outline-none">
								<IoClose size={30} />
							</button>
						</div>

						<input
							type="text"
							className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-xs"
							placeholder="Sector Name"
						/>

						<CirclePicker
							className="mt-3"
							circleSize={28}
							colors={[
								"#EC7777",
								"#AAEC77",
								"#77ECC2",
								"#779FEC",
								"#EC77BD",
								"#ECA177",
							]}
						/>

						<button className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white rounded-md text-xs text-center">
							Create Sector
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default NewSectorModal;
