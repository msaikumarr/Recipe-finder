const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String }, // URL or path of the image
    ingredients: [{ type: String }],
    steps: [{ type: String }],
    category: { type: String },
    benefits: { type: String },
    state: { type: String },
    recommendedHotels: [
      {
        name: { type: String },
        location: { type: String },
        rating: { type: Number, default: 0 },
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Owner of the recipe
    // favoritedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who favorited the recipe
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", RecipeSchema);
