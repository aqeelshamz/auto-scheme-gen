import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";
import "./Login.css";
import { api } from "../../utils/utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target[0].value);
    setPass(e.target[1].value);
    if (email && pass) {
      api
        .post("/user/login", { email, password: pass })
        .then((response) => {
          localStorage.setItem("token", response.data?.token);
          navigate("/");
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
            {/* <h2 className="font-semibold pb-5 text-xl">Login</h2> */}
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
              <div className="relative">
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  name="password"
                  required
                />
                <div
                  className="absolute h-full flex flex-col justify-center top-0 right-4 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </div>
              </div>

              <button type="submit">Login</button>
              <br />
              <p>
                Don't have an account?&ensp;
                <Link to="/signup" className="link-btn">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
