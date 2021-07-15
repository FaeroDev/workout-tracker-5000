const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config()

const PORT = process.env.PORT

// const db = require("db");

const app = express();

// app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const uri = `mongodb+srv://pharaohnof:jennY8675309@cluster0.9js9i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;



mongoose.connect(
  uri,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true, 
    useFindAndModify: false
});

app.use(express.static("public"));

console.log(process.env) //remove later
// routes
app.use(require("./routes/api/api-routes"));
app.use(require("./routes/view/home-routes"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// process.env.MONGODB_URI
// ||'mongodb://localhost/workout'