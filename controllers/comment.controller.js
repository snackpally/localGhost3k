const Comment = require('../models/Comment');

exports.test = function(req, res) {
	res.send('This is a test on the Comment');
};

exports.comment_newComment = function (req, res, next) {
	let newComment = new Comment(
		req.body
	);
	
	newComment.save(function (err) {
		if (err) {
			return next(err);
		}
		res.send('Your Comment has been recieved')
		console.log(res.json(newComment));
	});
};



