import NavBar from "../components/NavBar";

import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

const Login = () => {
  const email = useInput("");
  const password = useInput("");

  const emailValue = email.value;
  const passwordValue = password.value;

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      }
  );
    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    navigate("/");
    window.location.reload();

  };

// localStorage.setItem("token", data.token);
// let token = localStorage.getItem("token");
// localStorage.removeItem("token")
// localStorage.clear()


  return (
    <div>
      <NavBar></NavBar>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="password"
          placeholder="Password"
          {...password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
