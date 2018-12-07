const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const User = require("./User");
const Location = require("./Location");

let commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  location_id: { type: Schema.Types.ObjectId, ref: Location },
  comment: { type: String, required: true },
  date_created: { type: Date, default: Date.now },
  date_deleted: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", commentSchema);
