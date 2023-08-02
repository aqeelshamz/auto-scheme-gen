import "../DropDownMenu/DropDownMenu.css";

const EventCardMenu = (props) => {
	return (
		<div className="flex flex-col dropDownMenu">
			<ul className="flex flex-col gap-4">
				<li>
					<a href={`/event/${props.id}`}>Open</a>
				</li>
				<li>Rename</li>
				<li className="text-red">Delete</li>
			</ul>
		</div>
	);
};

export default EventCardMenu;
