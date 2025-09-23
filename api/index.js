const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("../config/db");
const userRoutes = require("../routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.get("/", (req, res) => res.send("API is running ✅"));
app.use("/users", userRoutes);

module.exports = app;
