import { useEffect, useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from ".../api/axios";
import "./Login.css";

const LOGIN_URL = "/auth";

const Login = () => {
	const { setAuth } = useContext(AuthContext);

	const emailRef = useRef();
	const errRef = useRef();

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState("");

	useEffect(() => {
		emailRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [email, pass]);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify({ email, pass }),
				{
					headers: { "Content-Type": "application/json" },
					withCredentials: true,
				}
			);
			console.log(JSON.stringify(response?.data));
			//console.log(JSON.stringify(response?.data));
			const accessToken = response?.data?.accessToken;
			const roles = response?.data?.roles;
			setAuth({ email, pass, roles, accessToken });
			setEmail("");
			setPass("");
			setSuccess(true);
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
			} else if (err?.response?.status === 400) {
				setErrMsg('Missing email or password');
			} else if (err?.response?.status === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			{success ? (
				<section>
					<h1>You're logged in!</h1>
					<br />
					<p>
						<a href="/scheme">Home</a>
					</p>
				</section>
			) : (
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
							<p
								ref={errRef}
								className={errMsg ? "errmsg" : "offscreen"}
								aria-live="assertive"
							>
								{errMsg}
							</p>
							<h2>Log In</h2>
							<form className="login-form" onSubmit={handleSubmit}>
								{/* <label htmlFor="email">Email</label> */}
								<input
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									ref={emailRef}
									type="email"
									placeholder="Email address"
									id="email"
									name="email"
									autoComplete="off"
									required
								/>
								{/* <label htmlFor="password">Password</label> */}
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
								{/*<button className="link-btn" onClick={() => navigate("/register")}>
						Don't have an account? Register
					</button>*/}
								<p>
									Don't have an account?
									<br />
									<span className="line">
										<button
											className="link-btn"
											onClick={() => navigate("/signup")}
										>
											Sign Up
										</button>
									</span>
								</p>
							</form>
						</div>
					</div>
				</section>
			)}
		</>
	);
};
export default Login;
