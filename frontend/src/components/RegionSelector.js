import React from "react";
import { useNavigate } from "react-router-dom";

const RegionSelector = () => {
  const navigate = useNavigate();

  const handleRegionSelect = (region) => {
    navigate(`/region/${region}`);
  };

  return (
    <div className="text-center my-4">
      <h4>Select a Region</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {["andhra", "telangana", "tamilnadu", "kerala", "karnataka", "maharashtra"].map((region) => (
          <button
            key={region}
            className="btn btn-outline-danger m-2"
            onClick={() => handleRegionSelect(region)}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionSelector;
