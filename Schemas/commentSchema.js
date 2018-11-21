const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let commentSchema = new Schema ({
	'user_id' : user,
	'location_id' : Location,
	'comment' : String,
	'date_created' : Date,
	'date_deleted' : Date
}); 