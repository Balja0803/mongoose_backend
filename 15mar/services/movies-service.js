const movies = require("../model/movie.js");
const mongoose = require("mongoose");

const getMovies = async (limit) => {
  const [fields] = await movies.find({}).limit(limit);
  return fields;
};

const addMovie = async (values) => {
  const props = mongoose.movies(Object.keys);

  const [fields] = await movies.insertOne({});
  return fields;
};

module.exports = getMovies;
module.exports = addMovie;
