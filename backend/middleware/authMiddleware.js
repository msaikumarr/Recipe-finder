const jwt = require("jsonwebtoken");
const User = require("../models/User");
const secretKey = "nikhil";

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Extract token

      const decoded = jwt.verify(token, secretKey); // Verify token

      req.user = await User.findById(decoded.id).select("-password"); // Attach user to request

      next(); // Move to next middleware/controller
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

module.exports = { protect };
