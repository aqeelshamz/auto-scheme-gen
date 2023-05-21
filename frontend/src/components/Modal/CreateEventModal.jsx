import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import "./Modal.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CirclePicker } from 'react-color';
import axios from 'axios';

// toastify
import { toast } from "react-toastify";


function CreateEventModel({ open, onClose }) {

	const PORT = "http://localhost:6001/";

	const sample = {
		"members": {
			"ISH": 0,
			"SI": 0,
			"CPO": 0,
			"ICPO": 0
		},
		"boundary": {
			"type": 2,
			"data": [
				{
					"lat": 10.52724489503287,
					"lng": 76.19269249580081
				},
				{
					"lat": 10.545978017231691,
					"lng": 76.20024559638675
				},
				{
					"lat": 10.545809255451871,
					"lng": 76.2253081574219
				},
				{
					"lat": 10.528088753862352,
					"lng": 76.23732445380863
				},
				{
					"lat": 10.508341852283532,
					"lng": 76.22856972358402
				},
				{
					"lat": 10.508679416769048,
					"lng": 76.20196221015628
				}
			]
		},
		"_id": "64448ff14887f1b46ef1e869",
		"name": "Sample Event",
		"startDate": "2023-12-24T18:30:00.000Z",
		"endDate": "2023-12-30T18:30:00.000Z",
		"color": "#16ab74",
		"type": 1,
		"createdAt": "2023-04-23T01:54:57.825Z",
		"updatedAt": "2023-04-23T02:25:08.589Z",
		"__v": 0
	};

	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		startDate: "",
		endDate: "",
		color: "#779FEC",
		type: "0",
		members: {
			"ISH": 0,
			"SI": 0,
			"CPO": 0,
			"ICPO": 0
		},
		ISH: 0,
		SI: 0,
		CPO: 0,
		ICPO: 0,
		boundary: {}
	});


	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [color, setColor] = useState("#779FEC");

	const {
		name,
		createdAt,
		updatedAt,

		type,
		ISH,
		SI,
		CPO,
		ICPO,
	} = formData;




	const onMutate = (e) => {

		// Text
		if (!e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				[e.target.id]: e.target.value,
			}));
		}
	};



	// handle number inputs
	const onMutateNums = (e) => {

		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.valueAsNumber,
		}));
	};


	const handleColorChange = (newColor) => {
		setColor(newColor.hex);
	};



	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);



		const formDataCopy = {
			...formData,
			startDate: startDate.toISOString(),
			endDate: endDate.toISOString(),

			members: {
				"ISH": ISH,
				"SI": SI,
				"CPO": CPO,
				"ICPO": ICPO
			},
			color,
			type: Number(type)
		};
		delete formDataCopy.ISH;
		delete formDataCopy.SI;
		delete formDataCopy.CPO;
		delete formDataCopy.ICPO;






		console.log(formDataCopy);
		// Update in firestore
		try {
			const response = await axios.post(`${PORT}events`, formDataCopy);
			console.log(response.data); // Handle successful form submission
			toast.success('Event  saved');
			// navigate("/admin");
		} catch (error) {
			setLoading(false);
			toast.error('Event  not saved');
			console.log(error);

		}


		setLoading(false);






	};


	if (!open) return null;
	return (
		<div onClick={onClose} className='overlay  bg-zinc-700 fixed w-full h-full flex justify-center items-center z-[2050]'>
			<div
				onClick={(e) => {
					e.stopPropagation();
				}}
				className=' w-full max-w-[468px] h-[565px]  fixed shadow rounded-xl bg-white'
			>
				{/* <img src={nft} alt='/' /> */}
				<div className='m-4'>
					<div className='flex justify-between'>
						<p className='font-semibold text-xl'>New Event</p>
						<button onClick={onClose} className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800 focus:outline-none">
							<IoClose size={30} />
						</button>
					</div>
					<form onSubmit={onSubmit}>
						<input type="text" onChange={onMutate} value={name} id="name" className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-xs" placeholder='Event Name' />

						<div className="mt-3  flex justify-between ">


							<DatePicker id="startDate" className="w-[199px] h-[35px]   px-4 py-2 bg-blue-100 border border-gray-300  rounded-md  require outline-none focus:outline-none focus:ring focus:border-blue-500 text-xs"
								selected={startDate} onChange={(date) => setStartDate(date)}
								dateFormat="dd/MM/yyyy"
								placeholderText='Start Date'

								minDate={new Date()} showYearDropdown scrollableMonthYearDropdown showMonthDropdown
							/>

							<DatePicker id="endDate" className="w-[199px] h-[35px]  px-4 py-2 bg-blue-100 border border-gray-300  rounded-md  require outline-none focus:outline-none focus:ring focus:border-blue-500 text-xs"
								selected={endDate} onChange={(date) => setEndDate(date)}
								dateFormat="dd/MM/yyyy"
								placeholderText='End Date'
								minDate={new Date()} showYearDropdown scrollableMonthYearDropdown showMonthDropdown
							/>
						</div>

						<div className="relative">
							<select onChange={onMutate} id="type" value={type} className="block mt-3 w-[424px] h-[35px] pl-4 pr-8 py-2 bg-blue-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-500 text-xs">

								<option value="0" selected>Select type</option>
								<option value="1">type 1</option>
								<option value="2">type 2</option>
								<option value="3">type 3</option>
							</select>

							<div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">


								<MdArrowDropDown size={22} className=" fill-current" />
							</div>

						</div>

						<CirclePicker onChange={handleColorChange} id="color" className='mt-3' circleSize={28} color={color} colors={
							['#EC7777', '#AAEC77', '#77ECC2', '#779FEC', '#EC77BD', '#ECA177']
						} />

						<p className='mt-3 mb-3 font-semibold text-base'>Members</p>
						<div className="flex  ">
							<div className="flex items-center mr-7">
								<p className='mr-5 font-semibold'>ISH</p>
								<input type="number" onChange={onMutateNums} value={ISH} id="ISH" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

							</div>

							<div className="flex items-center">
								<p className='mr-6 font-semibold'>SI</p>
								<input type="number" onChange={onMutateNums} value={SI} id="SI" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

							</div>
						</div>

						<div className="flex  mt-6">
							<div className="flex items-center mr-5">
								<p className='mr-3 font-semibold'>CPO</p>
								<input type="number" onChange={onMutateNums} value={CPO} id="CPO" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

							</div>

							<div className="flex items-center">
								<p className='mr-3 font-semibold'>ICPO</p>
								<input type="number" onChange={onMutateNums} value={ICPO} id="ICPO" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

							</div>
						</div>


						<p className='mt-7 mb-3 font-semibold text-base'>Total members : {ISH + SI + CPO + ICPO}</p>

						<button type="submit" className='block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white  rounded-md text-xs text-center'>Create Event</button>

					</form>





				</div>
			</div>
		</div>
	);
}

export default CreateEventModel;