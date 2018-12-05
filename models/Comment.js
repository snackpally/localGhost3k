const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const User = require("./User");
const Location = require("./Location");

let commentSchema = new Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: User },
  location_id: { type: mongoose.Schema.Types.ObjectId, ref: Location },
  comment: String,
  date_created: Date,
  date_deleted: Date
});

module.exports = mongoose.model("Comment", commentSchema);
