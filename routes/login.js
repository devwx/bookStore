const express = require("express");
const passport = require("../config/passport");
const router = express.Router();

// Login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  const user = req.user;
  res.json({ message: "Login successful", user: user });
});

module.exports = router;
