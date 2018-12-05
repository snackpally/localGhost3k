const express = require("express");
const router = express.Router();

const comment_controller = require('../controllers/comment.controller');

router.get('/test' , comment_controller.test);

router.post('/addComment' , comment_controller.comment_newComment);

module.exports = router;