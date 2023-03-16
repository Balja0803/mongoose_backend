const movies = require("../model/movie.js");
const mongoose = require("mongoose");

const getMovies = async (limit) => {
  return await movies
    .find({})
    .limit(limit)
    .then((res) => {
      return res;
    });
};

const addMovie = async (values) => {
  const props = Object.keys(movies.schema.tree);

  return await movies.insertOne({ values }).then((res) => {
    return res;
  });
};

module.exports = getMovies;
// module.exports = addMovie;
