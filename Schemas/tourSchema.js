const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let tourSchema = new Schema ({
	'user_id' : user,
	'tour_name' : String,
	'saved_loc' : [Location]
})