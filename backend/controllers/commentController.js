const Comment = require("../models/Comment");

// Add a comment
const addComment = async (req, res) => {
  try {
    const { recipeId, userId, username, text, rating } = req.body;

    const newComment = new Comment({
      recipeId,
      userId,
      username,
      text,
      rating,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

// Get comments for a specific recipe
const getCommentsByRecipe = async (req, res) => {
  try {
    const comments = await Comment.find({ recipeId: req.params.recipeId }).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

// Delete a comment (only if the user owns it)
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    await comment.deleteOne();
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
};

module.exports = { addComment, getCommentsByRecipe, deleteComment };
