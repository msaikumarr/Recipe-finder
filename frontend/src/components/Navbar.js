import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
    "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal"
  ];

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    if (selectedState) {
      navigate(`/region/${selectedState}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* <Link className="navbar-brand fw-bold" to="/">RECIPE SHARE</Link> */}
        <Link className="navbar-brand fw-bold" to="/"><img width={50} height={35} src="https://i.imgur.com/raLQH6ol.jpg" alt="" /><span className="m-2">SPICE SCOOP</span></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto d-flex align-items-center" style={{ gap: "2rem" }}>
            <li className="nav-item mx-3">
              <select className="form-select" onChange={handleStateChange} defaultValue="">
                <option value="" disabled>Select State</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </li>
          </ul>
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/search">
                <span style={{fontSize: "18px"}}>Search</span> <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/upload">
                <button className="btn btn-outline-info">Add Recipe</button>
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/profile">
                    <i className="fas fa-user"></i> Profile
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <button className="btn btn-outline-light" onClick={logoutUser}>Logout</button>
                </li>
              </>
            ) : (
              <div className="d-flex gap-2">
                <li className="nav-item">
                  <Link className="btn btn-outline-light" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light" to="/signup">Sign Up</Link>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
