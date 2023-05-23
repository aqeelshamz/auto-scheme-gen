import { format } from "date-fns";
import { Link } from "react-router-dom";


function EventCard(props) {
	const formattedDate = format(props.jsDate, "d MMM yyyy");

	return (
		<Link to={`/event/${props.id}`}
			className={`hover:scale-105 duration-75 border-box mr-6 mb-6 overflow-hidden border-2  border-black rounded-lg  justify-center items-center text-xl text-[${props.color}] font-semibold`}
		>
			<div
				style={props.style}
				className={`p-3 text-ellipsis border-box w-[260px] h-[125px] ${props.color} flex justify-center items-center text-xl font-semibold`}
			>
				{props.title}
			</div>
			<div className="p-3 border-t-2 border-black text-black text-base">{formattedDate}</div>
		</Link>
	);
}

EventCard.defaultProps = {
	title: "Sandy",
	jsDate: new Date(),
	color: "bg-[#9400D3]",
};

export default EventCard;
