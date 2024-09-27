import NavBar from "../components/NavBar";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const {login} = useContext(UserContext);
  const email = useInput("");
  const password = useInput("");

  const emailValue = email.value;
  const passwordValue = password.value;

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailValue, passwordValue);

  }

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
