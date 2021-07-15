const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()

const PORT = process.env.PORT || 3001;

// const db = require("db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(express.static("public"));

// console.log(process.env) //remove later
// routes
app.use(require("./routes/api/api-routes"));
app.use(require("./routes/view/home-routes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// process.env.MONGODB_URI