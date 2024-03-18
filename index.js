const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const logoutRoute = require("./routes/logout");
const bookRoute = require("./routes/book");
const connectDB = require("./config/database");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Use routes
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", logoutRoute);
app.use("/api", bookRoute);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  // const __dirname = path.resolve();
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(port, () => {
  console.log("Server is running on port 5000");
});
