import React, { useContext, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Import AuthContext
import { RecipeContext } from "../context/RecipeContext"; // Import RecipeContext
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, token } = useAuth();
  const { recipes, fetchUserRecipes } = useContext(RecipeContext);
  const nav = useNavigate();

  useEffect(() => {
    if (token) {
      fetchUserRecipes(); // Fetch user recipes when the component loads
    }
  }, [token]);

  if (!user) {
    return <div>Loading...</div>; // Render a loading state while user data is being fetched
  }

  const viewRecipe = (id) => {
    nav(`/recipe/${id}`);
  };

  const deleteRecipe = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/recipes/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Failed to delete recipe");
      }

      // Refresh the list of recipes after deletion
      fetchUserRecipes();
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  // Utility function to truncate description
  const truncateDescription = (description, maxLength) => {
    return description.length > maxLength ? `${description.substring(0, maxLength)}...` : description;
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg mb-4">
        <div className="d-flex align-items-center">
          <img
            width={200}
            height={200}
            src="https://static.vecteezy.com/system/resources/previews/013/042/571/large_2x/default-avatar-profile-icon-social-media-user-photo-in-flat-style-vector.jpg"
            alt="User Profile"
            className="rounded-circle me-3"
          />
          <div>
            <h4 className="mb-1">{user.name}</h4>
            <p className="text-muted">{user.email}</p>
          </div>
        </div>
      </div>

      <h3 className="mb-3">Your Recipes</h3>
      <div className="row">
        {recipes.length === 0 ? (
          <p>No recipes uploaded yet.</p>
        ) : (
          recipes.map((recipe, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img width={100} height={250} src={recipe.image} className="card-img-top" alt={recipe.title} />
                <div className="card-body" style={{ height: "170px" }}>
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{recipe.title}</h5>
                    <i className="fa-solid fa-trash" onClick={() => deleteRecipe(recipe._id)} style={{ cursor: 'pointer' }}></i>
                  </div>
                  <p className="card-text text-muted">
                    {truncateDescription(recipe.description, 20)}
                  </p>
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

export default Profile;
