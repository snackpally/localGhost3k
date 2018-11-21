const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let locationSchema = new Schema ({
	'ghost_name' : String,
	'place_name' : String,
	'ghost_imgs' : [String],
	'ghost_type' : ghostType,
	'loc' : {
		'lon' : Number,
		'lat' : Number
	},
	'loc_type' : locationType,
	'loc_img_link' : String,
	'img_cite' : String,
	'loc_desc' : String,
	'address' : {
		'street' : String,
		'city' : String,
		'state' : String,
		'country' : String
	},
	'info_link' : String,
	'occupied' : Boolean
}); 