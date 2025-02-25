import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null); // Token state
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // Set the token state
      fetch("http://localhost:5000/api/users/me", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => logoutUser());
    }
    setLoading(false);
  }, []);

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.authtoken);
      setToken(data.authtoken); // Set the token state
      setUser(data.user);
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const signupUser = async (name, email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Signup failed");

      localStorage.setItem("token", data.authtoken);
      setToken(data.authtoken); // Set the token state
      setUser(data.user);
      navigate("/");  // Redirect to Home after signup
    } catch (error) {
      console.error(error.message);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken(null); // Clear the token state
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser, signupUser, logoutUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for AuthContext
export const useAuth = () => useContext(AuthContext);
