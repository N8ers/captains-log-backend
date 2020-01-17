"use-strict";

const express = require("express");
const mongoose = require("mongoose");
const logRouter = require("./routes/logRoutes.js");

const app = express();
app.use(express.json());

// dev server - mongodb local
const server = `localhost:27017`;
const database = `captian-log`;
mongoose
  .connect(`mongodb://${server}/${database}`)
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("connection to database failed");
  });

// production - mongodb atlas
// mongoose.connect(
//   `mongodb+srv://nathan-123:nathan-123@cluster0-vumtw.mongodb.net/test?retryWrites=true&w=majority`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   }
// );

app.use(logRouter);

app.listen(5000, () => {
  console.log(`server is listening on port 5000, Captian!`);
});
