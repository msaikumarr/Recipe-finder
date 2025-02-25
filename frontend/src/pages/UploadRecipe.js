import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import AuthContext

const UploadRecipe = () => {
  const navigate = useNavigate();
  const { token } = useAuth(); // Get token from AuthContext

  console.log("Auth Token from Context:", token);

  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    image: "",
    ingredients: "",
    steps: "",
    category: "",
    state: "",
    benefits: "",
    recommendedHotels: "",
  });

  const [error, setError] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("You must be logged in to add a recipe!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...recipe,
          ingredients: recipe.ingredients.split(","),
          steps: recipe.steps.split(","),
          recommendedHotels: recipe.recommendedHotels
            .split("\n")
            .map((hotel) => {
              const [name, location, rating] = hotel.split(",");
              return { name, location, rating: parseFloat(rating) };
            }),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to upload recipe");
      }

      alert("Recipe uploaded successfully!");
      navigate("/"); // Redirect to home after upload
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Upload Recipe</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={recipe.title}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            value={recipe.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={recipe.image}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Ingredients (comma separated)</label>
          <textarea
            name="ingredients"
            className="form-control"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Steps (comma separated)</label>
          <textarea
            name="steps"
            className="form-control"
            value={recipe.steps}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={recipe.category}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            value={recipe.state}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Benefits</label>
          <textarea
            name="benefits"
            className="form-control"
            value={recipe.benefits}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Recommended Hotels (Each line: Name,Location,Rating)
          </label>
          <textarea
            name="recommendedHotels"
            className="form-control"
            value={recipe.recommendedHotels}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Upload Recipe
        </button>
      </form>
    </div>
  );
};

export default UploadRecipe;
