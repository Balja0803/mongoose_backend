const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    _id: String,
    plot: String,
    genres: Array,
    runtime: Number,
    cast: Array,
    poster: String,
    title: String,
    fullplot: String,
    languages: Array,
    released: Date,
    directors: Array,
    writers: Array,
    awards: Object,
    year: Date,
    imdb: Object,
    countries: Array,
    type: String,
    tometoes: Object,
  },
  {
    collection: "movies",
  }
);

const Movies = mongoose.model("movies", movieSchema);

module.exports = Movies;
