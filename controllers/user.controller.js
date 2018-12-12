//todo refactor es6 classes

const User = require("../models/User");
const bcrypt = require("bcryptjs");

//register user controller

exports.new_user = function(req, res, next) {
  let password = req.body.password;
  let password2 = req.body.password2;

  if (password == password2) {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name
    });

    exports.createUser(newUser, function(err, user) {
      if (err) return next(err);
      res.send(user).end();
    });
  } else {
    res
      .status(500)
      .send('{errors: "Passwords don\'t match"}')
      .end();
  }
};

//create user method to hash password
exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

exports.getUserByUsername = function(username, callback) {
  let query = { username: username };
  User.findOne(query, callback);
};

exports.getUserById = function(id, callback) {
  User.findById(id, callback);
};

exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
