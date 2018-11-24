const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const User = require('Schemas/User');
const Location = require('Schemas/Location')

let commentSchema = new Schema ({
	'user_id' : User,
	'location_id' : Location,
	'comment' : String,
	'date_created' : Date,
	'date_deleted' : Date
}); 

module.exports = mongoose.model('Comment', commentSchema);
