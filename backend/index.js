const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoute = require("./routes/index");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());

dotenv.config({ path: "./config.env" });

const connectDb = async function () {
  try {
    await mongoose.connect(process.env.Database);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

connectDb();

const PORT = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/api", todoRoute);

app.listen(PORT, function () {
  console.log("Server listening on Port", PORT);
});
