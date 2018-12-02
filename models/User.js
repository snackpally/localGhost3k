const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const Location = require('./Location');

let userSchema = new Schema({
  first_name: String,
  last_name: String,
  user_loc: {
    city: String,
    state: String
  },
  tour_data: [{ type: mongoose.Schema.Types.ObjectId, ref: Location }],
	favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: Location }]
});

module.exports = mongoose.model('User', userSchema);

