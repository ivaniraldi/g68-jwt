import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const RegisterWithCustomHooks = () => {
  const {register} = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== passwordConfirm || password.length < 6){
      alert("Passwords do not match");
      return;
    }else{
      register(email, password);
    }
  };
  

  return (
    <div>
      <NavBar></NavBar>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password"  value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterWithCustomHooks;
