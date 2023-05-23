import { IoClose } from "react-icons/io5";
import "./Modal.css";
import "react-datepicker/dist/react-datepicker.css";
import { CirclePicker } from "react-color";
import { useState } from "react";
import { api } from "../../utils/utils";
import { toast } from "react-toastify";
import { FiCheck, FiSquare, FiHexagon } from "react-icons/fi";

function CreateSectorModal({ eventId, open, type, data, onClose }) {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#779FEC");

  //New sector data
  const initFormData = {
    eventId: eventId,
    name: "",
    color: "",
    data: data,
    type: type,
  };
  const [formData, setFormData] = useState(initFormData);

  const onMutate = (e) => {
    // Text
    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    const formDataCopy = {
      ...formData,
      eventId,
      data,
      color,
      type,
    };

    console.log(formDataCopy);

    try {
      const response = await api.post("/events/sectors", formDataCopy);
      console.log(response.data); // Handle successful form submission
      toast.success("Sector created!");
      onClose();
      setFormData(initFormData);
      // navigate("/admin");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to create sector");
      console.log(error);
      onClose();
      setFormData(initFormData);
    }

    setLoading(false);
  };

  if (!open) return null;
  return (
    <div
      onClick={onClose}
      className="fixed overlay bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-full flex justify-center items-center z-[2050]"
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
            <p className="flex items-center font-semibold text-xl">
              {
                [
                  null,
                  <FiSquare className="mr-2" />,
                  <FiHexagon className="mr-2" />,
                ][type]
              }
              New Sector
            </p>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              <IoClose size={30} />
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <input
              id="name"
              type="text"
              onChange={onMutate}
              className="block w-[424px] h-[35px] mt-10 px-4 py-2 bg-blue-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 text-xs"
              placeholder="Sector Name"
            />
            <CirclePicker
              className="mt-8"
              circleSize={28}
              color="#AAEC77"
              colors={[
                "#EC7777",
                "#AAEC77",
                "#77ECC2",
                "#779FEC",
                "#EC77BD",
                "#ECA177",
              ]}
            />

            <button
              type="submit"
              className="flex items-center justify-center w-[424px] h-[35px] mt-10 bg-blue-900 text-white  rounded-md text-sm text-center"
            >
              <FiCheck className="mr-2" />
              <p>Create Sector</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateSectorModal;
