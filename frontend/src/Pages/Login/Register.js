import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Register = (props) => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [name, setName] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email);
	};

	return (
		<div className="login">
			<div className="auth-form-container">
				<div className="column" style={{ paddingBottom: "20px" }}>
					<p style={{ fontSize: "2rem", fontWeight: "800" }}>SchemeGen</p>
					<p
						style={{
							fontSize: "0.8rem",
							fontWeight: "500",
						}}
					>
						THRISSUR CITY POLICE
					</p>
				</div>
				<h2 sty>Register</h2>
				<form className="register-form" onSubmit={handleSubmit}>
					{/* <label htmlFor="name">Name</label> */}
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						type="text"
						placeholder="Name"
						id="name"
						name="name"
					/>
					{/* <label htmlFor="email">Email</label> */}
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Email address"
						id="email"
						name="email"
					/>
					{/* <label htmlFor="password">Password</label> */}
					<input
						value={pass}
						onChange={(e) => setPass(e.target.value)}
						type="password"
						placeholder="New password"
						id="password"
						name="password"
					/>
					<button type="submit">Register</button>
					<button
						className="link-btn"
						onClick={() => navigate('/login')}
					>
						Already have an account? Log In
					</button>
				</form>
			</div>
		</div>
	);
};
export default Register;
