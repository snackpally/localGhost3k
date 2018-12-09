const Location = require("../models/Location");

exports.test = function(req, res) {
  // res.send("Greetings from the Test Controller!");
  Location.find({}, function(err, location) {
    if (err) return next(err);
    res.send(location);
    console.log(location);
  });
};

exports.location_create = function(req, res, next) {
  let location = new Location(req.body);
  location.save(function(err) {
    if (err) {
      return next(err);
    }
    console.log(res);
    res.send("Location Created successfully");
  });
};

exports.newComment = function(req, res, next) {
  Location.findById(req.params.id, function(err, location) {
    let currentlocation = location;
    currentlocation.comment.push({});
  });
};

exports.location_details = function(req, res, next) {
  let here;
  Location.findById(req.params.id, function(err, location) {
    if (err) return next(err);
    res.send(location);
    here = location;
  });
  here.comment.push({ comment: req.body.comment });
  here.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("New comment saved!");
  });
};
