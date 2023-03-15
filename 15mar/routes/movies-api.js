const express = require("express");
const router = express.Router();
const getMovies = require("../services/getMovies-service.js");
const movies = require("../model/movie.js");

router.get("/", async (req, res) => {
  console.log("get MOVIES reqiest");
  const getMovies = await movies.find({}).limit(1);
  console.log(getMovies);
  try {
    res.status(200).send(getMovies);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
