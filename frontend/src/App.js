import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scheme from "./Pages/Scheme/Scheme";
import Login from "./Pages/Login/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Scheme />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
