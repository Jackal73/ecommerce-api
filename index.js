const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const router = require("./routes/user");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRoute);

router.post("userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
