const mongoose = require('mongoose');
// const User = require("./User");
let Schema = mongoose.Schema;

let Featurepoint = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

let Comment = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    name: String
  },
  comment: { type: String },
  date_created: { type: Date, default: Date.now },
  date_deleted: { type: Date, default: Date.now }
});

let locationSchema = new Schema({
  ghost_name: String,
  place_name: { type: String, required: true },
  ghost_imgs: [String],
  ghost_type: String,
  loc: {
    type: Featurepoint,
    required: true
  },
  loc_type: String,
  loc_img_link: String,
  img_cite: String,
  loc_desc: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  info_link: String,
  comment: [Comment],
  occupied: Boolean
});

module.exports = mongoose.model('Location', locationSchema);
