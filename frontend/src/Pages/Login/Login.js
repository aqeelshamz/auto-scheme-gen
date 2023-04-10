import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { api } from "../../utils/utils";

const Login = () => {
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		setEmail(e.target[0].value);
		setPass(e.target[1].value);
		if (email && pass) {
			api
				.post("/user/login", { email, password: pass })
				.then((response) => {
					alert("Logged In!");
					navigate("/home");
				})
				.catch((err) => alert(err.response.data.error));
		} else {
			alert("Please fill all the fields");
		}
	};

	return (
		<>
			<section>
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
								placeholder="Password"
								id="password"
								name="password"
								required
							/>
							<button type="submit">Log In</button>
							<br />
							<p>
								Don't have an account?
								<br />
									<button
										className="link-btn"
										onClick={() => navigate("/signup")}
									>
										Sign Up
									</button>
							</p>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};
export default Login;
