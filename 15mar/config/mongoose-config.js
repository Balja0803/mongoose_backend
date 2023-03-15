const express = require("express");
const mongoose = require("mongoose");

const db = mongoose
  .connect(
    "mongodb+srv://balja0803:celo0803@cluster0.steqanz.mongodb.net/sample_mflix"
  )
  .then((res) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = db;
