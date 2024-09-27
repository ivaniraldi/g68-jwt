import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();


  const simulacro = async () => {
    const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
        cart: carrito,
        }),
        });
    let data = await response.json();
    alert(data?.error || data.message);
    };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  const getUser = async () => {
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

  const register = async (email, password) => {
        const response = await fetch("http://localhost:5000/api/auth/register", { 
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
          email: email,
          password: password,
          }),
          });
          const data = await response.json();
          alert(data?.error || "Registration successful!");
          localStorage.setItem("token", data.token);
          setToken(data.token);
          navigate("/");
    };

  const login = async (emailValue, passwordValue) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Authentication successful!");
    localStorage.setItem("token", data.token);
    setToken(data.token);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, token, register, getUser, logOut, simulacro }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
