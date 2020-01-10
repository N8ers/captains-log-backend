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
    res.send(log);
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete entry
app.delete("/log/:id", async (req, res) => {
  try {
    const log = await logModel.findByIdAndDelete(req.params.id);

    if (!log) res.status(404).send("log not found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

// edit entry
app.patch("/log/:id", async (req, res) => {
  try {
    await logModel.findByIdAndUpdate(req.params.id, req.body);
    await logModel.save();
    res.send(log);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
