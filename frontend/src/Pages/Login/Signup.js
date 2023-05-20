import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { api } from "../../utils/utils";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setName(e.target[0].value);
		setEmail(e.target[1].value);
		setPass(e.target[2].value);
		if (name && email && pass) {
			api.post("/user/signup", { name, email, password: pass })
				.then((response) => {
					alert("User registered successfully!");
					navigate("/login");
				})
				.catch((err) => alert(err.response.data.error));
		} else {
			alert("Please fill all the fields");
		}
	};

	return (
		<div className="login">
			<div className="auth-form-container">
				<div className="column" style={{ paddingBottom: "20px" }}>
					<p style={{ fontSize: "2rem", fontWeight: "800" }}>
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
				<h2>Sign Up</h2>
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
					<input
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type="password"
						placeholder="New password"
						id="password"
						name="password"
						required
					/>
					<button type="submit">Sign Up</button>
					<br />
					<p>
						Already have an account?
						<button
							className="link-btn"
							onClick={() => navigate("/login")}
						>
							Log In
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};
export default Signup;
