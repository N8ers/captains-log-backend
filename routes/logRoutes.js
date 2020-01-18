const express = require("express");
const logModel = require("../models/log");
const app = express();

// get all entries
app.get("/logs", async (req, res) => {
  const logs = await logModel.find({});

  try {
    res.send(logs);
  } catch (err) {
    res.status(500).send(err);
  }
});

// create new entry
app.post("/log", async (req, res) => {
  const log = new logModel(req.body);

  try {
    await log.save();
    res.status(200).send(log);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete entry
app.delete("/log/:id", async (req, res) => {
  try {
    const log = await logModel.findByIdAndDelete(req.params.id);

    if (!log) res.status(404).send("log not found");
    res.status(200).send(console.log("success"));
  } catch (err) {
    res.status(500).send(err);
  }
});

// edit entry
app.patch("/log/:id", async (req, res) => {
  try {
    console.log(req.body);
    await logModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(console.log("success"));
  } catch (err) {
    res.status(500).send(err => console.log("Error: ", err));
  }
});

module.exports = app;
