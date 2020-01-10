const express = require("express");
const logModel = require("../models/log");
const app = express();

// get all entries

// create new entry
app.post("/log", async (req, res) => {
  const log = new logModel(req.body);

  try {
    await log.save();
    res.send(log);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete entry

// edit entry

module.exports = app;
