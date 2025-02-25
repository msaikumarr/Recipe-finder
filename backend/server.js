const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/connection");
const Recipe = require("./models/Recipe"); // ✅ Import the Recipe model
const recipeRoutes = require("./routes/RecipeRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const commentRoutes = require("./routes/commentRoutes");

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ✅ Search API directly in server.js
app.get("/api/recipes/search", async (req, res) => {
  console.log("🔍 Search request received!");
  try {
    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "❌ Title is required for searching." });
    }

    console.log("Searching for:", title);
    const recipes = await Recipe.find({ title: { $regex: title, $options: "i" } });

    if (recipes.length === 0) {
      return res.status(404).json({ message: "❌ No recipes found." });
    }

    res.json(recipes);
  } catch (error) {
    console.error("❌ Search Error:", error);
    res.status(500).json({ message: "❌ Server error", error: error.message });
  }
});



// Routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
