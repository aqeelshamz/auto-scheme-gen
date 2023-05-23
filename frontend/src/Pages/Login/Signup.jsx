import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import "./Login.css";
import { api } from "../../utils/utils";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");
	const [confirmPass, setConfirmPass] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setName(e.target[0].value);
		setEmail(e.target[1].value);
		setPass(e.target[2].value);
		if (name && email && pass) {
			api.post("/user/signup", { name, email, password: pass })
				.then((response) => {
					navigate("/login");
				})
				.catch((err) => alert(err.response.data.error));
		} else {
			alert("Please fill all the fields");
		}
	};

	return (
		<div className="login">
			<div style={{ paddingBottom: "20px" }}>
				<p
					style={{
						fontSize: "50px",
						fontWeight: "800",
						color: "#f0f0f0",
					}}
				>
					SchemeGen
				</p>
				<p
					style={{
						fontSize: "15px",
						fontWeight: "500",
						color: "#f0f0f0",
					}}
				>
					THRISSUR CITY POLICE
				</p>
			</div>
			<div className="auth-form-container">
				{/* <h2 className="font-semibold pb-5 text-xl">Sign up</h2> */}
				<form className="signup-form" onSubmit={handleSubmit}>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Name"
						id="name"
						name="name"
						autoComplete="off"
						required
					/>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email address"
						id="email"
						name="email"
						autoComplete="off"
						required
					/>
					<div className="relative">
						<input
							value={pass}
							onChange={(e) => setPass(e.target.value)}
							type={showPassword ? "text" : "password"}
							placeholder="New password"
							id="password"
							name="password"
							required
						/>
						<div
							className="absolute h-full flex flex-col justify-center top-0 right-4 cursor-pointer"
							onClick={() => setShowPassword(!showPassword)}
						>
							{showPassword ? (
								<FiEyeOff size={20} />
							) : (
								<FiEye size={20} />
							)}
						</div>
					</div>
					<div className="relative">
						<input
							value={confirmPass}
							onChange={(e) => setConfirmPass(e.target.value)}
							type={showConfirmPassword ? "text" : "password"}
							placeholder="Confirm password"
							id="password"
							name="password"
							required
						/>
						<div
							className="absolute h-full flex flex-col justify-center top-0 right-4 cursor-pointer"
							onClick={() => setShowConfirmPassword(!showConfirmPassword)}
						>
							{showConfirmPassword ? (
								<FiEyeOff size={20} />
							) : (
								<FiEye size={20} />
							)}
						</div>
					</div>

					{confirmPass !== "" && confirmPass !== pass && (
						<p style={{ fontSize: 14, color: "red" }}>
							Password do not match
						</p>
					)}

					<button type="submit">Sign up</button>
					<br />
					<p>
						Already have an account?&ensp;
						<Link to="/login" className="link-btn">
							Login
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
export default Signup;
