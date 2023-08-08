import { format } from "date-fns";
import { Link } from "react-router-dom";
import { FiMoreVertical } from "react-icons/fi";

function EventCard(props) {
  const formattedDate = format(props.jsDate, "d MMM yyyy");

  return (
    <Link
      to={`/event/${props.id}`}
      className={`hover:scale-105 duration-75 border-box mr-6 mb-6 border-2  border-black rounded-lg  justify-center items-center text-xl text-[${props.color}] font-semibold`}
    >
      <div
        style={props.style}
        className={`p-3 text-ellipsis border-box w-[260px] h-[125px] ${props.color} flex justify-center items-center text-xl font-semibold`}
      >
        {props.title}
      </div>
      <div className="flex items-center justify-between p-3 border-t-2 border-black text-black text-base">
        <p>{formattedDate}</p>
        <div className="dropdown dropdown-top">
          <label onClick={(e) => e.preventDefault()} tabIndex={0}>
            <FiMoreVertical />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

EventCard.defaultProps = {
  title: "Sandy",
  jsDate: new Date(),
  color: "bg-[#9400D3]",
};

export default EventCard;
