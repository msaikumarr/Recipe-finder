const express = require("express");
const { getUserProfile, updateUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware"); // ✅ Correct Import
const User = require('../models/User');

const router = express.Router();

// Route to get user profile (Protected)
router.get("/profile", protect, getUserProfile);

// Route to update user profile (Protected)
router.put("/profile", protect, updateUserProfile);

// Get current user
router.get('/me', protect, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
});
module.exports = router;
