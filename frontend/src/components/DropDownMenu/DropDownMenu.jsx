import "./DropDownMenu.css";

const DropDownMenu = () => {
	const logOut = () => {
		localStorage.clear();
		window.location.href = "/login";
	};

	return (
		<div className="flex flex-col dropDownMenu">
			<ul className="flex flex-col gap-4">
				<li>Settings</li>
				<li onClick={logOut}>Log Out</li>
			</ul>
		</div>
	);
};

export default DropDownMenu;
