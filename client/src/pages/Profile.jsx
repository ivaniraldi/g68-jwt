import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUser(data);
    }
  };

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
