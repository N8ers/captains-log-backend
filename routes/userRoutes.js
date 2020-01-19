const express = require("express");
const userModel = require("../models/user");
const app = express();

// test
app.get("/test", (req, res) => {
  res.send("noice");
});

// sign in
app.get("/signin", async (req, res) => {
  try {
    const [user] = await userModel.find({ username: req.headers.username });
    if (user.password == req.headers.password) {
      res.status(200).send(user);
    } else {
      res.status(404).send("incorrect creds, try again or signup!");
    }
  } catch {
    res.status(500).send("that doesn't look right");
  }
});

// sign up
app.get("/signup", async (req, res) => {
  let user = new userModel(req.headers);

  try {
    await user.save();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send("try a different username");
  }
});

module.exports = app;
