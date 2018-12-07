const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let locationSchema = new Schema({
  ghost_name: { type: String, required: true },
  place_name: String,
  // ghost_imgs: [],
  ghost_type: String,
  loc: {
    type: {
      type: String,
      enum: ["Point"],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
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
  occupied: Boolean
});

module.exports = mongoose.model("Location", locationSchema);
