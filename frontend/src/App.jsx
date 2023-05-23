import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./Pages/Event/Event";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Login/Signup";

const App = () => {
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
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/event/:eventId" element={<Event />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
