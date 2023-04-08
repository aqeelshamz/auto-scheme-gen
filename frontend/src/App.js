import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scheme from "./Pages/Scheme/Scheme";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Login/Register";

const App = () => {
  return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Scheme />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/register" element={<Register />} />
					<Route exact path="/home" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
