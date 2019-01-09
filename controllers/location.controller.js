const Location = require('../models/Location');

exports.test = function(req, res, next) {
  Location.find({}, function(err, location) {
    if (err) return next(err);
    res.send(location);
    // console.log(location);
    console.log('Received');
  });
};

exports.cards = function(req, res, next) {
  Location.find({})
    .limit(20)
    .exec(function(err, location) {
      console.log('location', location);
      if (err) return next(err);
      res.send(location);
    });
};

exports.location_create = function(req, res, next) {
  let location = new Location(req.body);
  location.save(function(err) {
    if (err) {
      return next(err);
    }
    console.log(res);
    res.send('Location Created successfully');
  });
};

exports.location_details = function(req, res, next) {
  Location.findById(req.params.id).exec(function(err, location) {
    console.log(req.params.id);
    console.log(location);
    if (err) return next(err);
    res.send(location);
  });
};

exports.newComment = function(req, res, next) {
  let message = { name: req.body.name, comment: req.body.comment };
  console.log(message);
  Location.findOneAndUpdate({ _id: req.params.id }, { $push: { comment: message } }, function(err, success) {
    err ? res.status(500).send(err) : res.status(200).send(success);
    console.log('Test', success);
    res.status(200);
  });
};
