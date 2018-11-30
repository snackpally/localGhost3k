const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const User = require('Schemas/User');
const Location = require('Schemas/Location'); 

let tourSchema = new Schema ({
	'user_id' : User,
	'tour_name' : String,
	'saved_loc' : [Location]
});

module.exports = ('Tour', tourSchema); 