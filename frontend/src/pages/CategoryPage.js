import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipesByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/recipes/category/${category}`);
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipesByCategory();
  }, [category]);

  const viewRecipe = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Recipes in {category}</h2>
      <div className="row">
        {recipes.length === 0 ? (
          <p>No recipes found in this category.</p>
        ) : (
          recipes.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe._id}>
              <div className="card shadow-sm">
                <img height={280} src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body">
                  <h5 className="card-title">{recipe.title}</h5>
                  <p className="card-text">{recipe.description}</p>
                  <button className="btn btn-primary w-100" onClick={() => viewRecipe(recipe._id)}>View Recipe</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
