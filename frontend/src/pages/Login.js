import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const nav = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });

      const json = await response.json();
      console.log("Login Response:", json); // Debugging

      if (!response.ok) {
        alert(json.message || "Invalid email or password");
        return;
      }

      if (!json.authtoken) {
        alert("Token not received from server!");
        return;
      }

      localStorage.setItem('token', json.authtoken);
      console.log("Token stored:", localStorage.getItem("token")); // Debugging
      alert("Login successful!");
      nav('/');
      window.location.reload();
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{
      background: "url('https://img.freepik.com/premium-photo/ingredients-cooking-black-stone-kitchen-table-herbs-spices-vegetables-top-view-with-space-design_1040174-1582.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="p-4 rounded" style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "2px solid white",
        width: "400px",
      }}>
        <h2 className="mb-4 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="text-white">Email address</label>
            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} value={credentials.email} style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
            }} />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="password" className="text-white">Password</label>
            <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
            }} />
          </div>
          <button type="submit" className="btn btn-outline-light w-100" style={{
            transition: "0.3s",
            border: "2px solid white", marginTop: "45px"
          }}>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
