import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scheme from "./Pages/Scheme/Scheme";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Login/Signup";

const App = () => {

	// Comment this block to bypass login
	if (
		!localStorage.getItem("token") &&
		window.location.pathname !== "/login" &&
		window.location.pathname !== "/signup"
	) {
		window.location.href = "/login";
	}

	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Scheme />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/home" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
