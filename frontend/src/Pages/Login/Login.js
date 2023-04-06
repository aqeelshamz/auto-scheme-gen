import React, { useState } from "react";
import "./login.css";

const Login = (props) => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

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
				<h2>Log In</h2>
				<form className="login-form" onSubmit={handleSubmit}>
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
						placeholder="Password"
						id="password"
						name="password"
					/>
					<button type="submit">Log In</button>
					<button
						className="link-btn"
						onClick={() => props.onFormSwitch("register")}
					>
						Don't have an account? Register
					</button>
				</form>
			</div>
		</div>
	);
};
export default Login;
