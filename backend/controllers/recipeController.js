const { protect } = require("../middleware/authMiddleware");
const Recipe = require("../models/Recipe");

const createRecipe = async (req, res) => {
  try {
    const { title, description, image, ingredients, steps, category, state, benefits, recommendedHotels } = req.body;

    const newRecipe = new Recipe({
      title,
      description,
      image,
      ingredients,
      steps,
      category,
      state,
      benefits,
      recommendedHotels,
      user: req.user._id // Assuming you store user ID in the token
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: 'Server error' });
  }
}



// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get recipes by state
const getRecipesByState = async (req, res) => {
  try {
    const { state } = req.params;

    // Find recipes that match the selected state
    const recipes = await Recipe.find({ state });

    if (recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found for this state" });
    }

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Search recipes by title
const searchRecipes = async (req, res) => {
  console.log('hello');
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "Title is required for searching." });
    }
    console.log("🔍 Searching for recipes with title:", title); // Debugging log

    // Case-insensitive search using regex
    const recipes = await Recipe.find({ title: { $regex: title, $options: "i" } });

    console.log("✅ Found recipes:", recipes); // Debugging log
    if (!recipes || recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found with that title." });
    }
    res.json(recipes);
  } catch (error) {
    console.error("❌ Search Error:", error); // Logs error to console
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Toggle Favorite Recipe
const getUserFavoriteRecipes = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find all recipes where the user is in the `favoritedBy` array
    const favoriteRecipes = await Recipe.find({ favoritedBy: userId });

    res.json(favoriteRecipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// user uploaded recipes
const getUserRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({ user: req.user.id });
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getRecipesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const recipes = await Recipe.find({ category });
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createRecipe, getRecipes, getRecipeById, updateRecipe, deleteRecipe, getRecipesByState, searchRecipes, getUserFavoriteRecipes, protect, getUserRecipes, getRecipesByCategory };
