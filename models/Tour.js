const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const User = require('./User');
const Location = require('./Location'); 

let tourSchema = new Schema ({
	'user_id': { type: mongoose.Schema.Types.ObjectId, ref: User },
	'tour_name' : String,
	'saved_loc': [{ type: mongoose.Schema.Types.ObjectId, ref: Location }]
});

module.exports = ('Tour', tourSchema); 