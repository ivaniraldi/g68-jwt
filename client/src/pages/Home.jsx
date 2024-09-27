import { useContext } from "react";
import NavBar from "../components/NavBar";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { token } = useContext(UserContext);
  return <div>
    <NavBar></NavBar>
    <h2>Home</h2>
    <p>{token}</p>
  </div>;
};
export default Home;
