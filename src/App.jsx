import { useEffect, useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import {
  Login,
  PageNotFound,
  Users,
  Layout,
  Schedules,
  Transactions,
  Settings,
  Dashboard,
} from "./Pages";

const App = () => {
  // Navigation
  const navigate = useNavigate();

  // Use State Hook
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use Effect Hook

  useEffect(() => {
    const checkAuthentication = () => {
      const userEmail = localStorage.getItem("email");
      const isAuthenticated = !!userEmail;
      setIsLoggedIn(isAuthenticated);
      if (!isAuthenticated) {
        navigate("/login");
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <Routes>
      {/* Secured Login user authentication */}

      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      {isLoggedIn ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      ) : (
        <Route path="/*" element={<PageNotFound />} />
      )}
    </Routes>
  );
};

export default App;
