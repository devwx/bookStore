const express = require("express");
const router = express.Router();

// Logout route
router.get("/", (req, res) => {
  req.logout(); // Passport.js method to clear the session and remove req.user
  res.json({ message: "Logout successful" });
});

module.exports = router;
