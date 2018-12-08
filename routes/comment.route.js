const express = require("express");
const router = express.Router();
const location_controller = require("../controllers/location.controller");
const comment_controller = require("../controllers/comment.controller");

router.get("/test", comment_controller.test);

router.post("/addComment", location_controller.comment_newComment);

module.exports = router;
