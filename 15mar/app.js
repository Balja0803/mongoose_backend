const express = require("express");
const app = express();
const port = 3636;
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/mongoose-config.js");
const movieRouter = require("./routes/movies-api.js");

app.use(cors());
app.use(bodyparser.json());
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
