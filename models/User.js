const mongoose = require('mongoose');
const Location = require('./Location');
let Schema = mongoose.Schema;

//schema for user 
let userSchema = new Schema({
	username: String,
	password: String,
	email: String,
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

