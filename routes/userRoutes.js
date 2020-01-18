const express = require("express");
const userModel = require("../models/user");
const app = express();

// test
app.get("/test", (req, res) => {
  res.send("noice");
});

// sign in
app.get("/signin", async (req, res) => {
  const [user] = await userModel.find({ username: req.body.username });
  if (user.password == req.body.password) {
    res.status(200).send(user);
  } else {
    res.status(404).send("incorrect creds, try again or signup!");
  }
});

// sign up
app.get("/signup", async (req, res) => {
  let user = new userModel(req.body);

  try {
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("try a different username");
  }
});

module.exports = app;
