const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("event", eventSchema);

// events