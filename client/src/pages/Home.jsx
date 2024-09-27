import { useContext } from "react";
import NavBar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { token, simulacro } = useContext(UserContext);
  return <div>
    <NavBar></NavBar>
    <h2>Home</h2>
    <button className="btn btn-primary" onClick={() => simulacro()} disabled={!token}>Simulacro</button>
  </div>;
};
export default Home;
