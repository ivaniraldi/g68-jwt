import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import RegisterWithCustomHooks from "./pages/RegisterWithCustomHooks";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

const App = () => {
  const { token } = useContext(UserContext);
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterWithCustomHooks />}
      />
      <Route
        path="/profile"
        element={token? <ProfilePage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};
export default App;
