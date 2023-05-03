import React from 'react';
import { IoClose } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import "./Indexl.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CirclePicker } from 'react-color';


function CreateEventModel({ open, onClose }) {
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

                    <input type="text" className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-xs" placeholder='Event Name' />

                    <div className="mt-3  flex justify-between ">


                        <DatePicker className="w-[199px] h-[35px]  px-4 py-2 bg-blue-100 border border-gray-300 text-white rounded-md  require outline-none focus:outline-none focus:ring focus:border-blue-500 text-xs" selected={""} onChange={""}
                            dateFormat="dd/MM/yyyy"
                            placeholderText='Start Date'
                            minDate={new Date()} showYearDropdown scrollableMonthYearDropdown showMonthDropdown
                        />

                        <DatePicker className="w-[199px] h-[35px]  px-4 py-2 bg-blue-100 border border-gray-300 text-white rounded-md  require outline-none focus:outline-none focus:ring focus:border-blue-500 text-xs" selected={""} onChange={""}
                            dateFormat="dd/MM/yyyy"
                            placeholderText='End Date'
                            minDate={new Date()} showYearDropdown scrollableMonthYearDropdown showMonthDropdown
                        />
                    </div>

                    <div className="relative">
                        <select className="block mt-3 w-[424px] h-[35px] pl-4 pr-8 py-2 bg-blue-100 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring focus:border-blue-500 text-xs">

                            <option value="" selected>Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>

                        <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none">


                            <MdArrowDropDown size={22} className=" fill-current" />
                        </div>

                    </div>

                    <CirclePicker className='mt-3' circleSize={28} color='#AAEC77' colors={
                        ['#EC7777', '#AAEC77', '#77ECC2', '#779FEC', '#EC77BD', '#ECA177']
                    } />

                    <p className='mt-3 mb-3 font-semibold text-base'>Members</p>
                    <div className="flex  ">
                        <div className="flex items-center mr-7">
                            <p className='mr-5 font-semibold'>ISH</p>
                            <input type="number" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

                        </div>

                        <div className="flex items-center">
                            <p className='mr-6 font-semibold'>IS</p>
                            <input type="number" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

                        </div>
                    </div>

                    <div className="flex  mt-6">
                        <div className="flex items-center mr-5">
                            <p className='mr-3 font-semibold'>CPO</p>
                            <input type="number" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

                        </div>

                        <div className="flex items-center">
                            <p className='mr-3 font-semibold'>ICPO</p>
                            <input type="number" min={0} className="w-[82px] h-[35px] rounded-md bg-blue-100 border border-gray-300 focus:border-blue-500 focus:outline-none px-4" />

                        </div>
                    </div>


                    <p className='mt-7 mb-3 font-semibold text-base'>Total members : 0</p>

                    <button className='block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-900 text-white  rounded-md text-xs text-center'>Create Event</button>







                </div>
            </div>
        </div>
    );
}

export default CreateEventModel;