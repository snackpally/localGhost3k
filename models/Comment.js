const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const User = require("./User");
const Location = require("./Location");

let commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  location_id: { type: Schema.Types.ObjectId, ref: Location },
  comment: { type: String, required: true },
  date_created: { type: Date },
  date_deleted: { type: Date }
});

module.exports = mongoose.model("Comment", commentSchema);
