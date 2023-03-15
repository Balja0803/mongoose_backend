const express = require("express");
const router = express.Router();
const getMovies = require("../services/movies-service.js");

router.get("/", async (req, res) => {
  console.log("get MOVIES reqiest");
  const { query } = req;
  const result = await getMovies(query.limit || 5);

  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
