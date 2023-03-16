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

// const addMovie = async (values) => {
//   const props = Object.keys(movies.schema.tree);

//   const [fields] = await movies.insertOne({ values });
//   return fields;
// };

module.exports = getMovies;
// module.exports = addMovie;
