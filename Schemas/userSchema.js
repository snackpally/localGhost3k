const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema ({
	'first_name' : String,
	'last_name' : String,
	'user_loc' : {
		'city' : String,
		'state' : String
	},
	'tour_data' : [
		Location
	],
	'favorites' : [
		Location
	]
});

