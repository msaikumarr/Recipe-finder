const express = require("express");
const { addComment, getCommentsByRecipe, deleteComment } = require("../controllers/commentController");

const router = express.Router();

router.post("/", addComment);
router.get("/:recipeId", getCommentsByRecipe);
router.delete("/:id", deleteComment);

module.exports = router;
