const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const moment = require("moment");
const getMovies = require("../services/movies-service.js");

router.get("/", async (req, res) => {
  console.log("get MOVIES request");
  const { query } = req;
  const result = await getMovies(query.limit || 5);

  try {
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/add", async (req, res) => {
  console.log("POST request:", req.body);
  const released = moment(new Date(req.body.released));
  const year = moment(new Date(req.body.year));
  console.log("released:", released);
  console.log("year:", year);
  const properties = req.body;
  properties.released = released;
  console.log("properties.released:", properties.released);
  console.log(typeof released);
});

module.exports = router;
