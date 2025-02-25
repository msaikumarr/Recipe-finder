const express = require("express");
const router = express.Router();
const { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe, getRecipesByState, searchRecipes, getUserFavoriteRecipes, getUserRecipes, getRecipesByCategory } = require("../controllers/recipeController");
const { protect } = require("../middleware/authMiddleware");

// Routes
router.post("/", protect, createRecipe); // Create a new recipe
router.get("/", getRecipes); // Get all recipes
router.get("/:id", getRecipeById); // Get a recipe by ID
router.put("/:id", updateRecipe); // Update a recipe
router.delete("/:id", deleteRecipe); // Delete a recipe
router.get("/state/:state", getRecipesByState); // get recipes by state
router.get("/search", searchRecipes); // search recipes based on name
router.get("/favorites", protect, getUserFavoriteRecipes); // get user's favorite recipes
router.get("/my-recipes", protect, getUserRecipes);
router.get('/category/:category', getRecipesByCategory); // Add this route

module.exports = router;
