const mongoose = require("mongoose");
const Location = require("./Location");
let Schema = mongoose.Schema;

//schema for user
let userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: String,
  user_loc: {
    city: String,
    state: String
  },
  tour_data: [{ type: mongoose.Schema.Types.ObjectId, ref: Location }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: Location }]
});

module.exports = mongoose.model("User", userSchema);
