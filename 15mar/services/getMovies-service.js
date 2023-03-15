const movies = require("../model/movie.js");

const getMovies = async () => {
  const [fields] = await movies.find({}).limit(1);
  return fields;
};
