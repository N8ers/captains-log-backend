const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value === "") throw new Error("you must input somethign to log");
    }
  },
  starDate: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const Log = mongoose.model("Log", LogSchema);
module.exports = Log;
