const Contact = require('../models/Contact');

exports.new_Contact = function(req, res, next) {
  let contact = new Contact(req.body);
  contact.save(function(err) {
    if (err) {
      return next(err);
    }
    console.log(res);
    res.send('Comment received');
  });
};
