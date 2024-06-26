import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { BiX, BiMenuAltRight } from "react-icons/bi";
import { RiLogoutCircleRLine, RiLoginCircleFill } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import "./Navbar.css";
import { MdCenterFocusStrong } from "react-icons/md";

function Navbar({ eventData }) {
	const [isMobileBar, setIsMobileBar] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [openMenu, setOpenMenu] = useState(false);

	const position = 250;
	const location = useLocation();

	const toggleMobileBar = () => {
		setIsMobileBar((value) => !value);
	};

	return (
		<div className=" relative bg-white text-black z-[2000] box-border ">
			<div
				className={`${
					position >= 150 &&
					!isMobileBar &&
					`fixed w-full top-0 left-0 right-0 bottom-auto bg-white text-black drop-shadow`
				} flex justify-between items-center py-4 px-3 z-[2000] border-b ${
					position < 150 ? `border-black/40` : `border-white/40`
				}`}
			>
				<div className="flex items-center h-full">
					<Link to="/" className="flex items-center gap-x-1 mr-3">
						<h1
							className={` text-base md:text-2xl font-bold  hover:text-[#293073] ${
								position < 150 && `text-black`
							}`}
						>
							<div>
								<p className="text-3xl font-extrabold">
									SchemeGen
								</p>
								<p
									style={{
										fontSize: "0.8rem",
										fontWeight: "500",
									}}
								>
									THRISSUR CITY POLICE
								</p>
							</div>
						</h1>
					</Link>
					{eventData ? (
						<div className="flex">
							<div
								className={`w-2 h-16 rounded-lg mx-5`}
								style={{ backgroundColor: eventData?.color }}
							></div>
							<div className="flex flex-col">
								<p className="text-xl font-semibold">
									{eventData?.name}
								</p>
								<p>
									{
										eventData?.startDate
											?.toString()
											.split("T")[0]
									}{" "}
									-{" "}
									{
										eventData?.endDate
											?.toString()
											.split("T")[0]
									}
								</p>
							</div>
						</div>
					) : (
						""
					)}
				</div>
				<div
					className={`md:hidden ${
						!isMobileBar && `hidden`
					} z-[2000] fixed top-0 right-0 left-auto bg-white/60 text-black text-6xl`}
					onClick={toggleMobileBar}
				>
					<BiX />
				</div>
				<div
					className={`hidden md:block text-base md:text-2xl font-bold   hover:text-sky-500 ${
						position < 150 && `text-black`
					}`}
				>
					{/* <Link
                        to={"/"} className="hover:text-sky-500  text-xl mr-1"
                    >
                        Home
                    </Link> */}

					{isLoggedIn ? (
						<>
							<button
								onClick={() => {
									setOpenMenu((prev) => !prev);
								}}
								className="p-4 mr-3 rounded-full border-sky-500 font-bold bg-sky-300 hover:!text-white"
							>
								<div className="flex items-center">
									<BsPerson className="font-bold text-blue-950 " />
								</div>
							</button>
						</>
					) : (
						<>
							<Link
								to="/signup"
								className="hover:text-sky-500  text-xl"
							>
								<RiLoginCircleFill className="font-bold mr-1  " />
							</Link>
						</>
					)}
				</div>

				{openMenu && <DropDownMenu />}

				{/* <div
                    className={`md:hidden font-bold text-3xl ${position < 150 &&
                        `text-black`
                        }`}
                >
                    <BiMenuAltRight onClick={toggleMobileBar} />
                </div> */}
			</div>
		</div>
	);
}

export default Navbar;
