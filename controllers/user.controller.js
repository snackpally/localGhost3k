const User = require('./models/user');
const bcrypt = require("bcryptjs");

//register user controller

exports.new_user = function(req, res) {
	let password = req.body.password;
	let password2 = req.body.password2;

	if (password == password2) {
		let newUser = new User({
			first_name : req.body.first_name,
			last_name : req.body.last_name,
			email : req.body.email,
			username : req.body.userName,
			password : req.body.password
		});

		User.createUser(newUser, function(err, user) {
			if(err) throw err;
			res.send(user).end()
		});
	} else { 
		res.status(500).send("{errors: \"Passwords don't match\"}").end()	
	}
};

//create user method to hash password
exports.createUser = function (newUser, callback) {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(newUser.password, salt, function (err, hash) {
			newUser.password = hash;
			newUser.save(callback);
		});
	});
}

exports.getUserByUsername = function (username, callback) {
	let query = { username: username };
	User.findOne(query, callback);
}

exports.getUserById = function (id, callback) {
	User.findById(id, callback);
}

exports.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
		if (err) throw err;
		callback(null, isMatch);
	});
}
