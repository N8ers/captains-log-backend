"use-strict";

const express = require("express");
const mongoose = require("mongoose");
const logRouter = require("./routes/logRoutes.js");
const userRouter = require("./routes/userRoutes");
const cors = require("cors");

const dbuser = process.env.dbuser;
const dbpw = process.env.dbpw;

const app = express();
app.use(cors());
app.use(express.json());

// mongoose.set("useNewUrlParser", true);
// mongoose.set("useFindAndModify", false);

// dev server - mongodb local
// const server = `localhost:27017`;
// const database = `captian-log`;
// mongoose
//   .connect(`mongodb://${server}/${database}`, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     console.log("connected to database");
//   })
//   .catch(err => {
//     console.log("connection to database failed");
//   });

// production - mongodb atlas
mongoose.connect(
  `mongodb+srv://${dbuser}:${dbpw}@cluster0-vumtw.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(logRouter);
app.use(userRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is listening on port 5000, Captian!`);
});
