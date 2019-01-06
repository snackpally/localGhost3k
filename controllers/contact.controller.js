const Contact = require('../models/Contact');

exports.new_Contact = function(req, res, next) {
  console.log('Test req.body', req.body);
  let contact = new Contact(req.body);
  contact.save(function(err) {
    if (err) {
      return next(err);
    }
    console.log(res);
    res.send('Comment received');
  });
};

exports.getComments = function(req, res, next) {
  Contact.find({}, function(err, comments) {
    if (err) return next(err);
    res.send(comments);
  });
};
