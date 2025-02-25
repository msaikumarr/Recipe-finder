import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.trim() === "") {
      setRecipes([]); // Clear results if input is empty
      return;
    }

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:5000/api/recipes/search?title=${encodeURIComponent(query)}`);

        if (!response.ok) throw new Error("No recipes found");
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
        setRecipes([]); // Clear recipes if an error occurs
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]); // Trigger API call whenever query changes

  return (
    <div className="container mt-4">
      {/* Search Input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Track input changes
        />
      </div>

      {/* Dynamic Heading */}
      <h2 className="text-center">
        {query ? `Searching for: "${query}"` : "Search for your favorite recipes"}
      </h2>

      {/* Loading / Error Messages */}
      {loading && <p className="text-center">Searching...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Search Results */}
      <div className="row">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe._id} className="col-md-4">
              <Link to={`/recipe/${recipe._id}`} className="text-decoration-none">
                <div className="card mb-3 shadow">
                  <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          !loading && !error && query && <p className="text-center">No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;