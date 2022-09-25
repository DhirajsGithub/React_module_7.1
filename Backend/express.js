const express = require("express");
const app = express();

// important for req.body object to be defined
// npm i body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// // or we can go with this
// app.use(express.json())

// cors policy 😢
//npm i cors
const cors = require("cors");
app.use(
  cors({
    // if you coming from this origin then we will allow any request to come up
    origin : "*",     // allow from any origin
    // origin: "http://localhost:3000/",

    // only allow get and post request from http://localhost:3000/
    methods : ['GET', 'POST'],

    // set up cookies, as by default cookies are block from cross origin
    credentials: true
  })
)

const Movies = require("./mongoose");

app.get("/", async (req, res) => {
  const movies = await Movies.find();
  res.send(movies);
});

app.post("/", async (req, res) => {
  try {
    const { title, releaseDate, openingText } = req.body;
    const newMovie = new Movies({
      title: title,
      releaseDate: releaseDate,
      openingText: openingText,
    });
    const savedMovei = await newMovie.save();
    res.json(savedMovei);
  } catch (error) {
    console.log(error);
  }
});

app.listen(3001, () => {
  console.log("server started at server 3001");
});
