const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Contact = new Schema({
  first_name: { type: String, required: true },
  email: { type: String, required: true },
  comment: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Contact', Contact);
