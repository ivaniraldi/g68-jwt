import NavBar from "../components/NavBar";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { getUser, user} = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <div>
        {user ? (
          <>
          <p>Email: {user.email}</p>
          <p>Id: {user.id}</p>
          </>

        ) : (
          <p>Please login to view your profile.</p>
        )}
      </div>
    </div>
  );
};
export default Profile;
