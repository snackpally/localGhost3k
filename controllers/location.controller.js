const Location = require("../models/Location");

exports.test = function(req, res) {
  res.send("Greetings from the Test Controller!");
  Location.find({}, function(err, location) {
    if (err) return next(err);
    console.log(location);
  });
};

exports.location_create = function(req, res, next) {
  let location = new Location(req.body);
  location.save(function(err) {
    if (err) {
      return next(err);
    }
    // console.log(location);
    // res.json(location);
    res.send("Location Created successfully");
  });
};

exports.location_details = function(req, res, next) {
  Location.findById({ _id: req.params.id }, function(err, location) {
    if (err) return next(err);
    res.send(location);
  });
};
