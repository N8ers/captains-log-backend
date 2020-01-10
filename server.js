"use-strict";

const express = require("express");
const mongoose = require("mongoose");
const logRouter = require("./routes/logRoutes.js");

const app = express();
app.use(express.json());

mongoose.connect(
  `mongodb+srv://nathan-123:nathan-123@cluster0-vumtw.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(logRouter);

app.listen(3000, () => {
  console.log(`server is listening, Captian!`);
});
