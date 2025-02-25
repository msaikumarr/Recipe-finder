const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    username: { type: String, required: true }, // Store username for quick access
    text: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5 }, // Optional user rating
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
